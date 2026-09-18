// Shared application logic for the four array training modules.
//
// Each page loads this file with data attributes that identify the module:
//   <script src="array-app.js"
//           data-module="arrayMethods"
//           data-progress-key="arrayMethodsProgress"></script>
//
// The page must define a global `exercises` array (see exercises.js and friends)
// before this script runs.

(function () {
  const script = document.currentScript;
  if (!script || !script.dataset.module) {
    throw new Error("array-app.js needs data-module on its <script> tag");
  }
  window.MODULE_NAME = script.dataset.module;
  window.PROGRESS_KEY =
    script.dataset.progressKey || script.dataset.module + "Progress";
})();

const LOOP_GUARD_LIMIT = 1000000;
const OUTPUT_SEPARATOR = "--- console.log ---";

let completedExercises = new Set();
const editors = {}; // CodeMirror instances keyed by exercise id (and "playground")
const failedRuns = {}; // exercise id -> number of unsuccessful runs

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  loadCompletedExercises();
  loadExercises();
  updateProgress();
  initPlaygroundEditor();
});

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

function loadExercises() {
  const exerciseSection = document.getElementById("exercises");

  exercises.forEach((exercise) => {
    const exerciseDiv = document.createElement("div");
    exerciseDiv.className = "exercise";
    exerciseDiv.id = `exercise-${exercise.id}`;

    const categoryBadge = exercise.category
      ? `<span class="category-badge">${escapeHtml(exercise.category)}</span>`
      : "";

    exerciseDiv.innerHTML = `
      ${categoryBadge}
      <h3><span class="exercise-status" id="status-${exercise.id}"></span>${exercise.title}</h3>
      <div class="exercise-links">
        <a href="${exercise.links.w3schools}" target="_blank" rel="noopener">📖 W3Schools</a>
        <a href="${exercise.links.mdn}" target="_blank" rel="noopener">📚 MDN Docs</a>
      </div>
      <div class="exercise-description">
        <p>${exercise.description}</p>
      </div>
      <div class="example">
        <strong>📖 Example:</strong>
        <code>${escapeHtml(exercise.example)}</code>
      </div>
      <div class="instruction">
        <strong>✏️ Your Task:</strong>
        <p>${exercise.instruction}</p>
      </div>
      <div class="editor-wrapper">
        <textarea id="code-${exercise.id}">${escapeHtml(exercise.starterCode)}</textarea>
      </div>
      <div class="exercise-buttons">
        <button onclick="runExercise(${exercise.id})" class="btn-run" title="Ctrl+Enter / Cmd+Enter">▶ Run Exercise</button>
        <button onclick="resetExercise(${exercise.id})" class="btn-reset">Reset</button>
        <button onclick="toggleHint(${exercise.id})" class="hint-button">💡 Show Hint</button>
        <button onclick="toggleSolutionHint(${exercise.id})" class="solution-hint-button" id="solution-btn-${exercise.id}" style="display: none;">🔑 Show Solution</button>
      </div>
      <div id="hint-${exercise.id}" class="hint">${exercise.hint}</div>
      <div id="solution-confirm-${exercise.id}" class="solution-confirm" style="display: none;">
        <p>Seeing the answer now means less practice for you. Want one more try first?</p>
        <button onclick="hideSolutionConfirm(${exercise.id})" class="btn-run">Keep trying</button>
        <button onclick="revealSolution(${exercise.id})" class="btn-reset">Show the solution</button>
      </div>
      <div id="solution-hint-${exercise.id}" class="solution-hint">${exercise.solutionHint || exercise.hint}</div>
      <div class="console" id="console-${exercise.id}"></div>
      <div id="result-${exercise.id}"></div>
    `;

    exerciseSection.appendChild(exerciseDiv);
  });

  // CodeMirror needs the textareas in the DOM and laid out before it measures.
  setTimeout(() => {
    exercises.forEach((exercise) => initExerciseEditor(exercise));
  }, 50);
}

// ---------------------------------------------------------------------------
// Editors
// ---------------------------------------------------------------------------

// Static completion lists. These replace an earlier approach that executed the
// student's draft code on every "." keystroke, which could hang the page on an
// unfinished loop.
const ARRAY_MEMBERS = Object.getOwnPropertyNames(Array.prototype)
  .filter((name) => name !== "constructor")
  .concat(["length"]);
const STRING_MEMBERS = Object.getOwnPropertyNames(String.prototype).filter(
  (name) => name !== "constructor",
);
const DOT_COMPLETIONS = Array.from(
  new Set(ARRAY_MEMBERS.concat(STRING_MEMBERS)),
).sort();

const IDENTIFIER_TOKEN_TYPES = new Set([
  "variable",
  "variable-2",
  "property",
  "def",
]);

function hintFunction(cm) {
  const cur = cm.getCursor();
  const token = cm.getTokenAt(cur);
  const line = cm.getLine(cur.line);

  // Dot completion: "arr." or "arr.pu"
  const beforeCursor = line.slice(0, cur.ch);
  const dotMatch = beforeCursor.match(/\.([A-Za-z_$][\w$]*)?$/);
  if (dotMatch) {
    const partial = dotMatch[1] || "";
    const list = DOT_COMPLETIONS.filter(
      (name) => name.startsWith(partial) && name !== partial,
    );
    if (list.length === 0) return null;
    return {
      list,
      from: CodeMirror.Pos(cur.line, cur.ch - partial.length),
      to: cur,
    };
  }

  // Identifier completion from the JavaScript keyword list plus words already
  // in the editor.
  if (!IDENTIFIER_TOKEN_TYPES.has(token.type)) return null;
  const word = token.string;
  const jsHint = CodeMirror.hint.javascript(cm) || { list: [] };
  const anyHint = CodeMirror.hint.anyword(cm) || { list: [] };
  const seen = new Set();
  const list = [];
  jsHint.list.concat(anyHint.list).forEach((item) => {
    const text = typeof item === "string" ? item : item.text;
    if (text === word || seen.has(text)) return;
    seen.add(text);
    list.push(text);
  });
  if (list.length === 0) return null;
  return {
    list,
    from: CodeMirror.Pos(cur.line, token.start),
    to: CodeMirror.Pos(cur.line, token.end),
  };
}

// Keys that act on the completion popup. Enter is deliberately NOT here so it
// always inserts a newline; Tab accepts a suggestion.
const HINT_KEYS = {
  Up: (cm, handle) => handle.moveFocus(-1),
  Down: (cm, handle) => handle.moveFocus(1),
  PageUp: (cm, handle) => handle.moveFocus(-handle.menuSize() + 1, true),
  PageDown: (cm, handle) => handle.moveFocus(handle.menuSize() - 1, true),
  Home: (cm, handle) => handle.setFocus(0),
  End: (cm, handle) => handle.setFocus(handle.length - 1),
  Tab: (cm, handle) => handle.pick(),
  Esc: (cm, handle) => handle.close(),
};

function createEditor(textarea, options) {
  const editor = CodeMirror.fromTextArea(textarea, {
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
    indentUnit: 2,
    tabSize: 2,
    indentWithTabs: false,
    lineWrapping: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    viewportMargin: Infinity,
    extraKeys: {
      "Ctrl-Space": "autocomplete",
      "Ctrl-Enter": options.onRun,
      "Cmd-Enter": options.onRun,
      Tab: (cm) => {
        if (cm.somethingSelected()) {
          cm.indentSelection("add");
        } else {
          cm.replaceSelection("  ", "end");
        }
      },
      "Shift-Tab": (cm) => cm.indentSelection("subtract"),
    },
    hintOptions: {
      completeSingle: false,
      hint: hintFunction,
      customKeys: HINT_KEYS,
    },
  });

  editor.getInputField().setAttribute("aria-label", options.label);

  editor.on("inputRead", (cm, change) => {
    if (change.origin !== "+input") return;
    const typed = change.text[0];
    if (typed === ".") {
      cm.showHint({ completeSingle: false });
      return;
    }
    const token = cm.getTokenAt(cm.getCursor());
    if (IDENTIFIER_TOKEN_TYPES.has(token.type) && token.string.length >= 3) {
      cm.showHint({ completeSingle: false });
    }
  });

  const saved = localStorage.getItem(options.storageKey);
  if (saved !== null) {
    editor.setValue(saved);
  }

  editor.on(
    "change",
    debounce(() => {
      localStorage.setItem(options.storageKey, editor.getValue());
    }, 500),
  );

  editor.refresh();
  return editor;
}

function initExerciseEditor(exercise) {
  const textarea = document.getElementById(`code-${exercise.id}`);
  if (!textarea) return;
  editors[exercise.id] = createEditor(textarea, {
    storageKey: codeStorageKey(exercise.id),
    label: `Code editor for ${exercise.title}`,
    onRun: () => runExercise(exercise.id),
  });
}

function initPlaygroundEditor() {
  const textarea = document.getElementById("playgroundCode");
  if (!textarea) return;
  editors.playground = createEditor(textarea, {
    storageKey: MODULE_NAME + "_playground",
    label: "Playground code editor",
    onRun: runPlaygroundCode,
  });
}

function codeStorageKey(exerciseId) {
  return MODULE_NAME + "_code_" + exerciseId;
}

// ---------------------------------------------------------------------------
// Running student code
// ---------------------------------------------------------------------------

const RESERVED_WORDS = new Set(
  (
    "break case catch class const continue debugger default delete do else " +
    "enum export extends false finally for function if import in instanceof " +
    "new null return super switch this throw true try typeof var void while " +
    "with yield let static await async of"
  ).split(" "),
);

// Names that exist on `window`, so `typeof name !== "undefined"` would report a
// browser global instead of the student's (out-of-scope) variable.
const WINDOW_GLOBALS = new Set(
  (
    "name top self parent status length event open close closed history " +
    "location document window screen origin frames navigator"
  ).split(" "),
);

function stripComments(code) {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:\\])\/\/.*$/gm, "$1");
}

function stripStrings(code) {
  return code.replace(/(["'`])(?:\\.|(?!\1)[^\\\n])*\1/g, '""');
}

// The code handed to validators: comments removed and whitespace before "("
// collapsed so `.push (` and `.push(` look the same.
function normalizeForValidation(code) {
  return stripComments(code).replace(/\s+\(/g, "(");
}

function detectVariables(code) {
  const scanned = stripStrings(stripComments(code));
  const varRegex = /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
  const names = [];
  let match;
  while ((match = varRegex.exec(scanned)) !== null) {
    const name = match[1];
    if (RESERVED_WORDS.has(name) || WINDOW_GLOBALS.has(name)) continue;
    if (!names.includes(name)) names.push(name);
  }
  return names;
}

// Insert an iteration counter at the top of every for/while/do loop body so a
// forgotten increment throws instead of freezing the tab.
function protectLoops(code) {
  const guard =
    ` if (++__loopGuard > ${LOOP_GUARD_LIMIT}) throw new Error(` +
    `"Possible infinite loop: a loop ran more than ${LOOP_GUARD_LIMIT.toLocaleString()} times. Check your loop condition and that your counter changes."); `;

  let result = "";
  let i = 0;
  const keyword = /\b(for|while|do)\b/g;
  let match;
  while ((match = keyword.exec(code)) !== null) {
    let pos = match.index + match[0].length;
    let bodyStart = -1;

    if (match[1] === "do") {
      const rest = code.slice(pos).match(/^\s*\{/);
      if (rest) bodyStart = pos + rest[0].length;
    } else {
      // Skip to the matching ")" of the loop head.
      const open = code.slice(pos).search(/\S/);
      if (open === -1 || code[pos + open] !== "(") continue;
      let depth = 0;
      let j = pos + open;
      for (; j < code.length; j++) {
        if (code[j] === "(") depth++;
        else if (code[j] === ")") {
          depth--;
          if (depth === 0) break;
        }
      }
      if (depth !== 0) continue;
      const rest = code.slice(j + 1).match(/^\s*\{/);
      if (rest) bodyStart = j + 1 + rest[0].length;
    }

    if (bodyStart === -1) continue; // brace-less body: leave as is
    result += code.slice(i, bodyStart) + guard;
    i = bodyStart;
    keyword.lastIndex = bodyStart;
  }
  return "let __loopGuard = 0;\n" + result + code.slice(i);
}

function formatValue(value) {
  if (typeof value === "object" && value !== null) {
    try {
      return JSON.stringify(value, null, 2);
    } catch (e) {
      return String(value);
    }
  }
  return String(value);
}

// Buffers console.log output while student code runs. Output is written to the
// DOM once in flush(), not per call, so a runaway loop that logs on every
// iteration can't grind the page to a halt before the loop guard fires.
const MAX_LOG_LINES = 500;

function captureConsole(consoleDiv) {
  const originalLog = console.log;
  const lines = [];
  let dropped = 0;
  console.log = (...args) => {
    if (lines.length >= MAX_LOG_LINES) {
      dropped++;
      return;
    }
    lines.push(args.map(formatValue).join(" "));
  };
  return {
    get logs() {
      return lines.length ? lines.join("\n") + "\n" : "";
    },
    flush() {
      let html = lines.map((line) => escapeHtml(line) + "\n").join("");
      if (dropped > 0) {
        html += `<span class="console-label">... ${dropped.toLocaleString()} more line(s) not shown</span>\n`;
      }
      consoleDiv.innerHTML += html;
    },
    restore() {
      console.log = originalLog;
    },
  };
}

// Executes student code and returns { vars, names } or throws.
// eval is intentional: this is a client-side teaching playground that runs the
// learner's own code in their own browser. Nothing here touches a server.
function executeStudentCode(code) {
  const names = detectVariables(code);
  const capture = names
    .map((v) => `${v}: typeof ${v} !== 'undefined' ? ${v} : undefined`)
    .join(",\n");
  const wrapper = `
    (function() {
      ${protectLoops(code)}

      return { ${capture} };
    })()
  `;
  const vars = eval(wrapper) || {};
  return { vars, names };
}

function runExercise(exerciseId) {
  const exercise = exercises.find((ex) => ex.id === exerciseId);
  const editor = editors[exerciseId];
  const consoleDiv = document.getElementById(`console-${exerciseId}`);
  const resultDiv = document.getElementById(`result-${exerciseId}`);
  if (!exercise || !editor) return;

  const code = editor.getValue();
  consoleDiv.innerHTML = "";
  resultDiv.innerHTML = "";
  consoleDiv.className = "console";

  const captured = captureConsole(consoleDiv);
  let succeeded = false;

  try {
    const { vars, names } = executeStudentCode(code);
    captured.flush();

    let dump = "";
    if (names.length > 0) {
      consoleDiv.innerHTML +=
        '\n<span class="console-label">--- Your Variables ---</span>\n';
      names.forEach((name) => {
        if (vars[name] === undefined) return;
        const display = formatValue(vars[name]);
        dump += `${name}: ${display}\n`;
        consoleDiv.innerHTML += `<span class="console-var">${name}:</span> ${escapeHtml(display)}\n`;
      });
    }

    const logs = captured.logs;
    const output = dump + OUTPUT_SEPARATOR + "\n" + logs;
    const validation = exercise.validate(normalizeForValidation(code), output, {
      vars,
      logs,
      rawCode: code,
    });

    if (validation.success) {
      succeeded = true;
      resultDiv.innerHTML = `<div class="success-message">✅ ${validation.message}</div>`;
      consoleDiv.className = "console success";
      completedExercises.add(exerciseId);
      updateProgress();
    } else {
      resultDiv.innerHTML = `<div class="error-message">❌ ${validation.message}</div>`;
      consoleDiv.className = "console error";
    }
  } catch (error) {
    // Keep whatever the student logged before the error; append the error.
    captured.flush();
    consoleDiv.innerHTML += `<span class="console-error">Error: ${escapeHtml(error.message)}</span>\n`;
    consoleDiv.className = "console error";
    resultDiv.innerHTML = `<div class="error-message">❌ There's an error in your code. Check the console above!</div>`;
  } finally {
    captured.restore();
  }

  if (!succeeded) {
    failedRuns[exerciseId] = (failedRuns[exerciseId] || 0) + 1;
    if (failedRuns[exerciseId] >= 2) showSolutionButton(exerciseId);
  }

  resultDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function runPlaygroundCode() {
  const editor = editors.playground;
  const consoleDiv = document.getElementById("playgroundConsole");
  if (!editor || !consoleDiv) return;

  consoleDiv.innerHTML = "";
  consoleDiv.className = "console";
  const captured = captureConsole(consoleDiv);
  try {
    eval(protectLoops(editor.getValue()));
    captured.flush();
    consoleDiv.className = "console success";
  } catch (error) {
    captured.flush();
    consoleDiv.innerHTML += `<span class="console-error">Error: ${escapeHtml(error.message)}</span>\n`;
    consoleDiv.className = "console error";
  } finally {
    captured.restore();
  }
}

// ---------------------------------------------------------------------------
// Hints and solutions
// ---------------------------------------------------------------------------

function toggleHint(exerciseId) {
  const hint = document.getElementById(`hint-${exerciseId}`);
  hint.classList.toggle("visible");
  if (hint.classList.contains("visible")) showSolutionButton(exerciseId);
}

function showSolutionButton(exerciseId) {
  const button = document.getElementById(`solution-btn-${exerciseId}`);
  if (button) button.style.display = "inline-block";
}

function toggleSolutionHint(exerciseId) {
  const solution = document.getElementById(`solution-hint-${exerciseId}`);
  const confirmBox = document.getElementById(`solution-confirm-${exerciseId}`);

  if (solution.classList.contains("visible")) {
    solution.classList.remove("visible");
    return;
  }
  if (solution.dataset.revealed === "true") {
    solution.classList.add("visible");
    return;
  }
  confirmBox.style.display = confirmBox.style.display === "none" ? "block" : "none";
}

function hideSolutionConfirm(exerciseId) {
  document.getElementById(`solution-confirm-${exerciseId}`).style.display = "none";
}

function revealSolution(exerciseId) {
  hideSolutionConfirm(exerciseId);
  const solution = document.getElementById(`solution-hint-${exerciseId}`);
  solution.dataset.revealed = "true";
  solution.classList.add("visible");
}

// ---------------------------------------------------------------------------
// Progress
// ---------------------------------------------------------------------------

function knownExerciseIds() {
  return new Set(exercises.map((ex) => ex.id));
}

function loadCompletedExercises() {
  const saved = localStorage.getItem(PROGRESS_KEY);
  if (!saved) return;
  try {
    const ids = JSON.parse(saved);
    const known = knownExerciseIds();
    completedExercises = new Set(
      (Array.isArray(ids) ? ids : []).filter((id) => known.has(id)),
    );
  } catch (e) {
    completedExercises = new Set();
  }
}

function saveCompletedExercises() {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify([...completedExercises]));
}

function updateProgress() {
  const total = exercises.length;
  const completed = completedExercises.size;
  const percentage = total ? (completed / total) * 100 : 0;

  const bar = document.getElementById("progressBar");
  const text = document.getElementById("progressText");
  if (bar) bar.style.width = Math.min(100, percentage) + "%";
  if (text) {
    text.textContent =
      completed === total && total > 0
        ? `🎉 Congratulations! You've completed all ${total} exercises!`
        : `${completed} of ${total} exercises completed`;
  }

  exercises.forEach((ex) => {
    const exerciseDiv = document.getElementById("exercise-" + ex.id);
    const statusEl = document.getElementById("status-" + ex.id);
    if (!exerciseDiv || !statusEl) return;
    const done = completedExercises.has(ex.id);
    exerciseDiv.classList.toggle("completed", done);
    statusEl.textContent = done ? "✓" : "";
  });

  saveCompletedExercises();
}

// ---------------------------------------------------------------------------
// Reset / export / import / clear
// ---------------------------------------------------------------------------

function resetExercise(exerciseId) {
  const exercise = exercises.find((e) => e.id === exerciseId);
  const editor = editors[exerciseId];
  if (!exercise || !editor) return;
  editor.setValue(exercise.starterCode);
  localStorage.removeItem(codeStorageKey(exerciseId));
  const consoleDiv = document.getElementById(`console-${exerciseId}`);
  const resultDiv = document.getElementById(`result-${exerciseId}`);
  consoleDiv.innerHTML = "";
  consoleDiv.className = "console";
  resultDiv.innerHTML = "";
}

const PLAYGROUND_MARKER = "// === Playground Code ===";

function exportProgress() {
  const lines = [];
  const title = document.querySelector("h1").textContent;
  lines.push("// " + "=".repeat(50));
  lines.push("// " + title + " - My Solutions");
  lines.push("// Exported: " + new Date().toLocaleDateString());
  lines.push("// Completed: " + JSON.stringify([...completedExercises]));
  lines.push("// " + "=".repeat(50));
  lines.push("");

  exercises.forEach((exercise) => {
    const code =
      localStorage.getItem(codeStorageKey(exercise.id)) || exercise.starterCode;
    lines.push("// --- " + exercise.title + " ---");
    lines.push("// " + exercise.instruction.replace(/<[^>]*>/g, ""));
    lines.push(code);
    lines.push("");
  });

  const playgroundCode = localStorage.getItem(MODULE_NAME + "_playground");
  if (playgroundCode) {
    lines.push(PLAYGROUND_MARKER);
    lines.push(playgroundCode);
    lines.push("");
  }

  const blob = new Blob([lines.join("\n")], { type: "text/javascript" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = MODULE_NAME + "-solutions.js";
  a.click();
  URL.revokeObjectURL(a.href);
}

function importProgress() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".js";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const content = ev.target.result;
      const [exercisePart, playgroundPart] = content.split(PLAYGROUND_MARKER);

      const completedMatch = exercisePart.match(/^\/\/ Completed: (\[.*\])$/m);
      if (completedMatch) {
        try {
          const known = knownExerciseIds();
          JSON.parse(completedMatch[1])
            .filter((id) => known.has(id))
            .forEach((id) => completedExercises.add(id));
        } catch (err) {
          /* ignore a malformed completed list */
        }
      }

      exercisePart.split(/\/\/ --- /).forEach((section) => {
        if (!section.trim()) return;
        const lines = section.split("\n");
        const title = lines[0].replace(/ ---.*$/, "").trim();
        const exercise = exercises.find((ex) => ex.title === title);
        if (!exercise) return;
        const codeLines = lines.slice(1);
        // Drop the single instruction comment line written by exportProgress.
        if (codeLines.length && codeLines[0].startsWith("// ")) codeLines.shift();
        while (codeLines.length && !codeLines[codeLines.length - 1].trim()) {
          codeLines.pop();
        }
        const code = codeLines.join("\n");
        if (!code.trim()) return;
        localStorage.setItem(codeStorageKey(exercise.id), code);
        if (editors[exercise.id]) editors[exercise.id].setValue(code);
      });

      if (playgroundPart && playgroundPart.trim()) {
        const playgroundCode = playgroundPart.trim();
        localStorage.setItem(MODULE_NAME + "_playground", playgroundCode);
        if (editors.playground) editors.playground.setValue(playgroundCode);
      }

      updateProgress();
      alert("Progress imported successfully!");
    };
    reader.readAsText(file);
  };
  input.click();
}

function clearAllProgress() {
  if (
    !confirm(
      "Are you sure? This will reset ALL exercises to starter code and clear completion status.",
    )
  ) {
    return;
  }
  exercises.forEach((ex) => {
    localStorage.removeItem(codeStorageKey(ex.id));
    if (editors[ex.id]) editors[ex.id].setValue(ex.starterCode);
    const consoleDiv = document.getElementById(`console-${ex.id}`);
    const resultDiv = document.getElementById(`result-${ex.id}`);
    if (consoleDiv) {
      consoleDiv.innerHTML = "";
      consoleDiv.className = "console";
    }
    if (resultDiv) resultDiv.innerHTML = "";
  });
  localStorage.removeItem(MODULE_NAME + "_playground");
  localStorage.removeItem(PROGRESS_KEY);
  completedExercises = new Set();
  updateProgress();
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
}
