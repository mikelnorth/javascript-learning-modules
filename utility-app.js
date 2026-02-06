// Main application logic for advanced array methods training
let completedExercises = new Set();
let editors = {}; // Store CodeMirror instances

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  loadExercises();
  updateProgress();
  initPlaygroundEditor();
});

// Load all exercises dynamically
function loadExercises() {
  const exerciseSection = document.getElementById("exercises");

  exercises.forEach((exercise) => {
    const exerciseDiv = document.createElement("div");
    exerciseDiv.className = "exercise";
    exerciseDiv.id = `exercise-${exercise.id}`;

    // Add category badge
    const categoryBadge = `<span class="category-badge">${exercise.category}</span>`;

    exerciseDiv.innerHTML = `
            ${categoryBadge}
            <h3>${exercise.title}</h3>
            <div class="exercise-links">
                <a href="${exercise.links.w3schools}" target="_blank">📖 W3Schools</a>
                <a href="${exercise.links.mdn}" target="_blank">📚 MDN Docs</a>
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
                <textarea id="code-${exercise.id}">${exercise.starterCode}</textarea>
            </div>
            <button onclick="runExercise(${exercise.id})" class="btn-run">Run Exercise</button>
            <button onclick="toggleHint(${exercise.id})" class="hint-button">💡 Show Hint</button>
            <button onclick="toggleSolutionHint(${exercise.id})" class="solution-hint-button" id="solution-btn-${exercise.id}" style="display: none;">🔑 Show Solution Hint</button>
            <div id="hint-${exercise.id}" class="hint">${exercise.hint}</div>
            <div id="solution-hint-${exercise.id}" class="solution-hint">${exercise.solutionHint || exercise.hint}</div>
            <div class="console" id="console-${exercise.id}"></div>
            <div id="result-${exercise.id}"></div>
        `;

    exerciseSection.appendChild(exerciseDiv);

    // Initialize CodeMirror for this exercise after a short delay
    setTimeout(() => initCodeEditor(exercise.id), 100);
  });
}

// Initialize CodeMirror editor
function initCodeEditor(exerciseId) {
  const textarea = document.getElementById(`code-${exerciseId}`);
  if (!textarea) return;

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
    readOnly: false,
    viewportMargin: Infinity,
  });

  // Ensure editor is focused and ready for input
  editor.refresh();
  editors[exerciseId] = editor;
}

// Initialize playground editor
function initPlaygroundEditor() {
  const textarea = document.getElementById("playgroundCode");
  if (!textarea) return;

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
    readOnly: false,
    viewportMargin: Infinity,
  });

  // Ensure editor is focused and ready for input
  editor.refresh();
  editors["playground"] = editor;
}

// Run a specific exercise
function runExercise(exerciseId) {
  const exercise = exercises.find((ex) => ex.id === exerciseId);
  const code = editors[exerciseId].getValue();
  const consoleDiv = document.getElementById(`console-${exerciseId}`);
  const resultDiv = document.getElementById(`result-${exerciseId}`);

  // Clear previous results
  consoleDiv.innerHTML = "";
  resultDiv.innerHTML = "";
  consoleDiv.className = "console";

  // Capture console.log output
  let output = "";
  const originalLog = console.log;

  console.log = (...args) => {
    const message = args
      .map((arg) => {
        if (typeof arg === "object") {
          return JSON.stringify(arg, null, 2);
        }
        return String(arg);
      })
      .join(" ");
    output += message + "\n";
    consoleDiv.innerHTML += escapeHtml(message) + "\n";
  };

  try {
    // Extract all variable names from the code
    const varRegex = /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
    const detectedVars = [];
    let match;
    while ((match = varRegex.exec(code)) !== null) {
      detectedVars.push(match[1]);
    }

    // Create a wrapper to capture all detected variables
    const varCapture =
      detectedVars.length > 0
        ? detectedVars
            .map((v) => `${v}: typeof ${v} !== 'undefined' ? ${v} : undefined`)
            .join(",\n          ")
        : "";

    let codeWrapper = `
          (function() {
            ${code}

            // Return all detected variables
            return {
              ${varCapture}
            };
          })()
        `;

    // Execute the code and capture variables
    const capturedVars = eval(codeWrapper);

    // Automatically log all detected variables
    if (detectedVars.length > 0) {
      consoleDiv.innerHTML +=
        '\n<span style="color: #a0aec0;">--- Your Variables ---</span>\n';
      detectedVars.forEach((varName) => {
        if (capturedVars[varName] !== undefined) {
          const value = capturedVars[varName];
          const displayValue =
            typeof value === "object"
              ? JSON.stringify(value, null, 2)
              : String(value);
          output += `${varName}: ${displayValue}\n`;
          consoleDiv.innerHTML += `<span style="color: #68d391;">${varName}:</span> ${escapeHtml(displayValue)}\n`;
        }
      });
    }

    // Validate the solution
    const validation = exercise.validate(code, output);

    if (validation.success) {
      resultDiv.innerHTML = `<div class="success-message">✅ ${validation.message}</div>`;
      completedExercises.add(exerciseId);
      updateProgress();
      consoleDiv.className = "console success";
    } else {
      resultDiv.innerHTML = `<div class="error-message">❌ ${validation.message}</div>`;
      consoleDiv.className = "console error";
    }
  } catch (error) {
    consoleDiv.innerHTML = `<span style="color: #fc8181;">Error: ${escapeHtml(error.message)}</span>`;
    consoleDiv.className = "console error";
    resultDiv.innerHTML = `<div class="error-message">❌ There's an error in your code. Check the console above!</div>`;
  }

  // Restore original console.log
  console.log = originalLog;
}

// Run code in the free playground
function runPlaygroundCode() {
  const code = editors["playground"].getValue();
  const consoleDiv = document.getElementById("playgroundConsole");

  consoleDiv.innerHTML = "";
  consoleDiv.className = "console";

  let output = "";
  const originalLog = console.log;
  console.log = (...args) => {
    const message = args
      .map((arg) => {
        if (typeof arg === "object") {
          return JSON.stringify(arg, null, 2);
        }
        return String(arg);
      })
      .join(" ");
    output += message + "\n";
    consoleDiv.innerHTML += escapeHtml(message) + "\n";
  };

  try {
    eval(code);
    consoleDiv.className = "console success";
  } catch (error) {
    consoleDiv.innerHTML = `<span style="color: #fc8181;">Error: ${escapeHtml(error.message)}</span>`;
    consoleDiv.className = "console error";
  }

  console.log = originalLog;
}

// Toggle hint visibility
function toggleHint(exerciseId) {
  const hint = document.getElementById(`hint-${exerciseId}`);
  const solutionBtn = document.getElementById(`solution-btn-${exerciseId}`);
  hint.classList.toggle("visible");

  // Show the solution hint button when first hint is revealed
  if (hint.classList.contains("visible")) {
    solutionBtn.style.display = "inline-block";
  }
}

// Track solution hint attempts per exercise
const solutionAttempts = {};

// Toggle solution hint visibility with gatekeeping
function toggleSolutionHint(exerciseId) {
  const solutionHint = document.getElementById(`solution-hint-${exerciseId}`);

  // Initialize attempt counter
  if (!solutionAttempts[exerciseId]) {
    solutionAttempts[exerciseId] = 0;
  }

  // If already visible, just toggle it off
  if (solutionHint.classList.contains("visible")) {
    solutionHint.classList.remove("visible");
    return;
  }

  // Increment attempt
  solutionAttempts[exerciseId]++;

  const messages = [
    {
      text: "🤔 Hold on! Have you tried reading the documentation links above? They have great examples!\n\nClick Next to keep trying, then ask for the solution again if you're still stuck.",
      allowCancel: false,
    },
    {
      text: "💭 Before I show you... have you tried experimenting in the playground? Sometimes playing around helps!\n\nClick Next to keep trying, then ask for the solution again if you're still stuck.",
      allowCancel: false,
    },
    {
      text: "👥 Consider asking a classmate or teacher first! Explaining your confusion to others often helps you solve it yourself.\n\nClick OK to keep trying, or Cancel to see the solution anyway.",
      allowCancel: true,
    },
    {
      text: "📚 Have you looked at the example code above? It shows exactly how the method works!\n\nClick OK to continue, or Cancel to see the solution.",
      allowCancel: true,
    },
    {
      text: "🔍 Try searching online for more examples. Real-world problem solving means knowing how to research!\n\nClick OK one more time, or Cancel to see the solution.",
      allowCancel: true,
    },
    {
      text: "✨ You're almost there! One more click... but are you SURE you've exhausted all other options?\n\nClick OK to reveal it, or Cancel to skip ahead.",
      allowCancel: true,
    },
  ];

  if (solutionAttempts[exerciseId] <= messages.length) {
    const messageObj = messages[solutionAttempts[exerciseId] - 1];

    if (messageObj.allowCancel) {
      // Show confirm dialog (OK/Cancel)
      const shouldContinue = confirm(messageObj.text);
      if (!shouldContinue) {
        // User clicked Cancel - show solution immediately
        solutionHint.classList.add("visible");
        solutionAttempts[exerciseId] = messages.length + 1; // Mark as shown
      }
    } else {
      // Show alert dialog (only OK button)
      alert(messageObj.text);
    }
  } else {
    // Finally show the solution hint
    solutionHint.classList.add("visible");
  }
}

// Update progress bar and text
function updateProgress() {
  const total = exercises.length;
  const completed = completedExercises.size;
  const percentage = (completed / total) * 100;

  document.getElementById("progressBar").style.width = percentage + "%";
  document.getElementById("progressText").textContent =
    `${completed} of ${total} exercises completed`;

  if (completed === total) {
    document.getElementById("progressText").textContent =
      `🎉 Congratulations! You've completed all ${total} exercises!`;
  }
}

// Utility function to escape HTML
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Save progress to localStorage
window.addEventListener("beforeunload", () => {
  localStorage.setItem(
    "advancedArraysProgress",
    JSON.stringify([...completedExercises]),
  );
});

// Load progress from localStorage
window.addEventListener("load", () => {
  const saved = localStorage.getItem("advancedArraysProgress");
  if (saved) {
    completedExercises = new Set(JSON.parse(saved));
    updateProgress();
  }
});
