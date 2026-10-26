# JavaScript Practice

## A step-by-step learning path, from your first variable to interactive browser projects

Welcome! This repository is a small, practical JavaScript course. Each lesson is a short file you can read, run, and change. Work through the topics in order, experiment with the examples, and use the browser lab when a lesson needs a web page.

> **Start here:** Open [`index.html`](./index.html) in your browser for the visual course guide. Open [`modules/index.html`](./modules/index.html) for the interactive browser exercises.

## Contents

- [Get started](#get-started)
- [The learning path](#the-learning-path)
- [How to practice](#how-to-practice)
- [Interactive browser lab](#interactive-browser-lab)
- [Project map](#project-map)
- [Interview questions](./INTERVIEW_QUESTIONS.md)

## Get started

You need a modern browser. Install [Node.js](https://nodejs.org/) if you also want to run the console lessons from a terminal.

1. **Open the course:** open `index.html` in your browser.
2. **Choose a lesson:** follow the numbered learning path, starting with variables.
3. **Read the source:** open that lesson's `.js` file in your editor.
4. **Run a console lesson:** from the project folder, run `node modules/variables.js` (replace `variables.js` with the lesson you are studying).
5. **Try a browser exercise:** open `modules/index.html` and use the interactive examples.
6. **Make it yours:** change an example, predict the result, run it again, and write down what you learned.

There is no build step or package installation required. For the most consistent browser storage behavior, serve this folder with a local development server rather than opening it as a `file://` URL.

## The learning path

### 1. JavaScript foundations

| Step | Topic | Lesson |
| --- | --- | --- |
| 01 | Variables, declarations, and scope | [`modules/variables.js`](./modules/variables.js) |
| 02 | Primitive and reference data types | [`modules/data-type.js`](./modules/data-type.js) |
| 03 | Arithmetic, comparison, and logical operators | [`modules/operators.js`](./modules/operators.js) |
| 04 | Conditions and control flow | [`modules/control-flow.js`](./modules/control-flow.js) |
| 05 | Repeating work with loops | [`modules/loops.js`](./modules/loops.js) |

### 2. Reusable code and data

| Step | Topic | Lesson |
| --- | --- | --- |
| 06 | Functions, parameters, and return values | [`modules/functions.js`](./modules/functions.js) |
| 07 | Arrays and common array methods | [`modules/arrays.js`](./modules/arrays.js) |
| 08 | Objects, properties, and destructuring | [`modules/objects.js`](./modules/objects.js) |
| 09 | Scope, closures, callbacks, and higher-order functions | [`modules/practice.js`](./modules/practice.js) |

### 3. JavaScript in the browser

| Step | Topic | Lesson and exercise |
| --- | --- | --- |
| 10 | Selecting and updating page elements | [`modules/dom.js`](./modules/dom.js) · [Open the lab](./modules/index.html#dom-lab) |
| 11 | Click, input, and submit events | [`modules/events.js`](./modules/events.js) · [Open the lab](./modules/index.html#events-lab) |
| 12 | Forms and input validation | [`modules/form.js`](./modules/form.js) · [Open the lab](./modules/index.html#form-lab) |
| 13 | Timers and intervals | [`modules/timer.js`](./modules/timer.js) · [Open the lab](./modules/index.html#timer-lab) |
| 14 | Saving preferences in web storage | [`modules/webstorage.js`](./modules/webstorage.js) · [Open the lab](./modules/index.html#storage-lab) |

## How to practice

For every topic, use this simple loop:

1. **Read** the example and identify the idea it demonstrates.
2. **Predict** what the code will print or what the page will do.
3. **Run** it and compare the result with your prediction.
4. **Change** one thing at a time and run it again.
5. **Explain** the idea in your own words before moving on.

Try the challenge ideas at the bottom of a lesson, or invent a small variation of your own. If you get stuck, read the browser console or terminal error carefully; it usually points to the file and line that needs attention.

## Interactive browser lab

The lab is a single page for the browser-only topics. It includes a DOM text toggle, event and form examples, a start/pause/reset countdown timer, and a color preference saved in `localStorage`. Each exercise loads its own lesson script.

Open [`modules/index.html`](./modules/index.html). Keep the browser developer console open while you experiment. The examples use semantic HTML and visible status messages so you can see what each interaction does.

## Project map

```text
refresh-javascript/
├── index.html                 # Course home and topic guide
├── styles.css                 # Shared responsive styles
├── README.md                  # Course guide and setup
├── INTERVIEW_QUESTIONS.md     # Review questions with concise answers
└── modules/
    ├── index.html             # Interactive browser lab
    ├── variables.js
    ├── data-type.js
    ├── operators.js
    ├── control-flow.js
    ├── loops.js
    ├── functions.js
    ├── arrays.js
    ├── objects.js
    ├── practice.js            # Scope, closures, and callbacks
    ├── dom.js
    ├── events.js
    ├── form.js
    ├── timer.js
    └── webstorage.js
```

## Keep learning

Once you have finished the lessons, review the [JavaScript interview questions](./INTERVIEW_QUESTIONS.md), then build a small project such as a to-do list, quiz, or expense tracker using the same fundamentals.
