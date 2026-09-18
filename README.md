# 🎯 JavaScript Arrays & Loops Training Suite

A comprehensive, interactive learning environment for mastering JavaScript arrays, loops, and functional programming.

## 📦 Four Array Training Modules

`index.html` is the top-level hub. It links to the arrays hub (`arrays-hub.html`) and the objects hub (`objects-hub.html`). The arrays hub includes four progressive modules covering everything students need to master JavaScript arrays and iteration:

1. **Basic Array Methods** (`arrays-basic.html`) - 7 exercises
2. **Loops & Iteration** (`arrays-loops.html`) - 15 exercises
3. **Advanced Arrays** (`arrays-advanced.html`) - 17 exercises
4. **Utility Methods** (`arrays-utility.html`) - 15 exercises

**Total: 54 interactive array exercises!** A separate set of seven Objects & OOP modules is listed below.

---

# 📊 Module 1: Basic Array Methods

Master essential JavaScript array manipulation methods.

## 📚 What's Covered

This training playground teaches the following array methods:

- **`.push()`** - Add elements to the end of an array
- **`.pop()`** - Remove the last element from an array
- **`.shift()`** - Remove the first element from an array
- **`.unshift()`** - Add elements to the beginning of an array
- **`.slice()`** - Create a new array from a portion of another (non-mutating)
- **`.splice()`** - Remove, replace, or add elements at any position

## 🚀 Getting Started

1. Open `arrays-basic.html` in your web browser (or start at `index.html` and follow the links)
2. Read through each exercise carefully
3. Write your code in the provided text area
4. Click "Run Exercise" to test your solution
5. Use the "Show Hint" button if you get stuck
6. Practice in the free playground at the bottom

## ✨ Features

- **Interactive Exercises** - 7 hands-on exercises with instant feedback
- **Live Code Execution** - See your results immediately (Ctrl/Cmd+Enter runs the current exercise)
- **Built-in Console** - View output and errors in real-time
- **Infinite-Loop Guard** - Student code is stopped after 1,000,000 loop iterations instead of freezing the tab
- **Progress Tracking** - A sticky progress bar at the top of each page shows completion
- **Hints System** - A hint first; the solution can be revealed inline after opening the hint or after two failed runs
- **Free Playground** - Experiment with any array methods
- **Auto-Save Progress** - Completed exercises and your code are saved to localStorage per module, with export, import, and clear buttons

## 🎓 Exercise Structure

Each exercise includes:

- Clear explanation of the method
- Code examples
- Specific task to complete
- Starter code
- Validation and feedback
- Helpful hints

## 💡 Tips for Success

1. **Read the examples** - They show exactly how each method works
2. **Start with the starter code** - It's provided to help you focus on the method
3. **No need for console.log()** - The system automatically displays your variables!
4. **Check the hints** - They provide guidance without giving away the answer
5. **Experiment** - Use the free playground to try different approaches

## 🎨 Customize

You can easily add more exercises by editing `exercises.js`. Each exercise object includes:

- `id` - Unique identifier
- `title` - Exercise name
- `description` - Explanation of the method
- `example` - Working code example
- `instruction` - What the student should do
- `starterCode` - Initial code provided
- `solution` - Reference solution
- `validate` - Function to check if the solution is correct
- `hint` - Helpful tip

## 📝 Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations needed
- Works completely offline

## 🌟 For Instructors

This playground is perfect for:

- Classroom instruction
- Homework assignments
- Self-paced learning
- Coding bootcamps
- Tutorial sessions

Students can work at their own pace and get immediate feedback on their solutions.

## 🔧 Files for This Module

- `arrays-basic.html` - Basic array methods training page
- `exercises.js` - Exercise definitions for basic methods
- `array-app.js` - Shared application logic for all four array modules
- `README.md` - This file (covers all modules)

## 📚 Other Modules

- `arrays-loops.html` - Loops & Iteration training (15 exercises, see `LOOPS-README.md`)
- `arrays-advanced.html` - Advanced Arrays training (17 exercises, see `ADVANCED-README.md`)
- `arrays-utility.html` - Utility Methods training (15 exercises, see below)
- `arrays-hub.html` - Hub page to navigate between the array modules
- `index.html` - Top-level hub linking the arrays hub and the objects hub

## 🎨 Shared Resources

- `styles.css` - Beautiful, modern styling (shared by all modules)
- `array-app.js` - One shared app script for the array modules, configured by data attributes on its `<script>` tag
- `vendor/codemirror/` - CodeMirror 5, vendored so the site has no CDN dependency
- `loop-exercises.js` - Loops module exercises
- `advanced-exercises.js` - Advanced module exercises
- `utility-exercises.js` - Utility module exercises

## 📖 Learning Path

1. Start with `.push()` and `.pop()` - They're the simplest
2. Move to `.shift()` and `.unshift()` - Similar but work on the beginning
3. Learn `.slice()` - Important concept of non-mutating methods
4. Master `.splice()` - The most powerful but complex method
5. Complete the challenge - Combine multiple methods

## 🎉 Next Steps

After completing these exercises, students should:

- Understand when to use each array method
- Know which methods modify the original array vs. create new ones
- Be comfortable combining multiple methods
- **Then proceed to Module 2 (Loops), Module 3 (Advanced Arrays), and Module 4 (Utility Methods)**

# 🧰 Module 4: Utility Methods

Everyday array helpers: access, search, string conversion, sorting, and type checking. Open `arrays-utility.html`. Exercise definitions live in `utility-exercises.js`.

## 📖 Exercise Breakdown

1. Exercise 1: at() - Access with Negative Index
2. Exercise 2: includes() - Check for Value
3. Exercise 3: join() - Array to String
4. Exercise 4: split() - String to Array
5. Exercise 5: find() - Find First Match
6. Exercise 6: find() with Objects
7. Exercise 7: findIndex() - Get Position
8. Exercise 8: sort() - Sort Numbers
9. Exercise 9: toSorted() - Non-Mutating Sort
10. Exercise 10: reverse() - Reverse In Place
11. Exercise 11: toReversed() - Non-Mutating Reverse
12. Exercise 12: Array.isArray() - Type Checking
13. Challenge 1: join() and split() Together
14. Challenge 2: find() vs filter() - Know the Difference
15. Final Challenge: Sorting Leaderboard

The first half (exercises 1-7: `at`, `includes`, `join`/`split`, `find`, `findIndex`) pairs well with the Basic module for a first arrays lesson. The second half covers sorting, reversing, and type checking.

# 🧱 Objects & OOP Modules

`objects-hub.html` links to seven object modules. Each has its own `objects-*-exercises.js` and `objects-*-app.js` pair.

| Page | Topic | Exercises |
| --- | --- | --- |
| `objects-basics.html` | Objects Basics | 10 |
| `objects-manipulation.html` | Object Manipulation | 10 |
| `objects-methods.html` | Object Methods | 14 |
| `objects-modern.html` | Modern Features | 12 |
| `objects-this.html` | The this Keyword | 10 |
| `objects-advanced.html` | Advanced Objects | 12 |
| `objects-classes.html` | Classes & OOP | 15 |

Total: 83 object exercises.

## 🚀 Quick Start

**For Students:**
Open `index.html` in your web browser, pick the arrays or objects hub, and choose a module to start!

**For Instructors:**
See `TEACHER-GUIDE.md` for classroom integration, grading strategies, and teaching tips.

**For Deployment:**
See `DEPLOYMENT.md` for hosting options and production checklist.

## 🌐 Deployment

This is a static site - no backend required! Deploy anywhere:

**Quick Deploy Options:**

- **GitHub Pages:** Create a repository on GitHub, add it as a remote, and push:
  ```bash
  git remote add origin https://github.com/USERNAME/REPO_NAME.git
  git push -u origin main
  ```
  Then enable Pages in settings.
- **Netlify:** Drag & drop the folder at netlify.com/drop
- **Vercel:** Run `vercel` in the project folder
- **Local:** Just open `index.html` in a browser!

See `DEPLOYMENT.md` and `SETUP.md` for detailed instructions.

## 📁 File Structure

```
├── index.html                 # Top-level hub (arrays + objects)
├── arrays-hub.html            # Arrays hub
├── arrays-basic.html          # Module 1
├── arrays-loops.html          # Module 2
├── arrays-advanced.html       # Module 3
├── arrays-utility.html        # Module 4
├── array-app.js               # Shared logic for all four array modules
│                              #   (configured via data-* attributes on the script tag;
│                              #   replaces the former app.js, loops-app.js,
│                              #   advanced-app.js, and utility-app.js)
├── exercises.js               # Module 1 exercises
├── loop-exercises.js          # Module 2 exercises
├── advanced-exercises.js      # Module 3 exercises
├── utility-exercises.js       # Module 4 exercises
├── objects-hub.html           # Objects hub
├── objects-*.html             # Seven object modules
├── objects-*-exercises.js     # Object module exercises
├── objects-*-app.js           # Object module logic
├── styles.css                 # Shared styles
├── vendor/codemirror/         # Vendored CodeMirror 5 (no CDN)
├── docs/                      # Screenshots and planning notes
├── README.md                  # This file
├── LOOPS-README.md            # Module 2 details
├── ADVANCED-README.md         # Module 3 details
├── TEACHER-GUIDE.md           # For instructors
├── DEPLOYMENT.md              # Production checklist
└── SETUP.md                   # Detailed setup guide
```

---

**Ready for production!** 🚀 Just follow the deployment checklist and you're good to go!
