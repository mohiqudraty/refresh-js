# My JavaScript Notes

> A quick refresher of the JavaScript topics I have practiced. Each code block is a standalone example; use the code block's copy button in the Markdown preview to copy it.

## Contents

- [Variables and scope](#1-variables-and-scope)
- [Data types and values](#2-data-types-and-values)
- [Operators](#3-operators)
- [Conditions and control flow](#4-conditions-and-control-flow)
- [Loops](#5-loops)
- [Functions](#6-functions)
- [Arrays](#7-arrays)
- [Objects](#8-objects)
- [Closures and callbacks](#9-closures-and-callbacks)
- [DOM](#10-dom)
- [Events](#11-events)
- [Forms](#12-forms)
- [Timers](#13-timers)
- [Web storage](#14-web-storage)
- [Quick reminders](#quick-reminders)

## 1. Variables and scope

- `const`: block-scoped; I cannot reassign the binding.
- `let`: block-scoped; I can reassign it.
- `var`: function-scoped; it can be redeclared and is mostly found in older code.
- Hoisting makes declarations known before their source line. A `var` starts as `undefined`; `let` and `const` cannot be accessed before initialization (the temporal dead zone).
- Scope is where a name is available: global, function, or block.

```js
const name = "Mohi";
let score = 11;
score = 72;

console.log(name, score);

console.log(city); // undefined: the var declaration is hoisted.
var city = "Dhaka";

{
    let blockValue = "Only inside this block";
    console.log(blockValue);
}
```

## 2. Data types and values

- **Primitive:** `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, `null`.
- **Reference values:** objects, arrays, and functions.
- Primitives are copied as values. Assigning an object copies its reference; a spread copy is shallow.
- `typeof null` is `"object"` for historical reasons. Use `value === null` to test for `null`; use `Array.isArray(value)` to test for an array.
- Falsy values: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`. Everything else is truthy, including `[]` and `{}`.
- JavaScript may coerce types automatically. Prefer explicit conversion when it makes the result clear.

```js
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof null); // "object" (historical quirk)
console.log(Array.isArray([1, 2])); // true

console.log("5" + 2); // "52": string concatenation
console.log("5" - 2); // 3: numeric coercion
console.log(Number("5") + 2); // 7: explicit conversion
console.log(Boolean([])); // true

const original = { color: "blue" };
const sameReference = original;
const shallowCopy = { ...original };

sameReference.color = "green";
console.log(original.color); // "green"
console.log(shallowCopy.color); // "blue"
```

## 3. Operators

- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`.
- Assignment: `=`, `+=`, `-=`, `*=`, `/=`.
- Comparison: `>`, `<`, `>=`, `<=`, `===`, `!==`.
- Logical: `&&` (and), `||` (or), `!` (not). These short-circuit and return operand values.
- `??` uses the fallback only for `null` or `undefined`; `||` also uses it for other falsy values.
- Ternary: `condition ? valueIfTrue : valueIfFalse`.

```js
const first = 12;
const second = 5;
console.log(first % second); // 2
console.log(first === 12); // true
console.log(first === "12"); // false

const name = "";
console.log(name || "Guest"); // "Guest"
console.log(name ?? "Guest"); // ""

const score = 76;
const result = score >= 50 ? "Pass" : "Try again";
console.log(result);
```

## 4. Conditions and control flow

`if / else` handles ranges and more complex conditions. `switch` is useful when comparing one value to several exact cases. An early `return` keeps a function from continuing once its result is known.

```js
const score = 82;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("Keep practicing");
}

const role = "editor";
switch (role) {
    case "admin":
        console.log("Full access");
        break;
    case "editor":
        console.log("Can edit");
        break;
    default:
        console.log("Read only");
}

function shippingCost(subtotal) {
    if (subtotal >= 50) return 0;
    return 5.99;
}
```

## 5. Loops

- `for`: useful when I know the iteration pattern or count.
- `while`: repeats while a condition is true.
- `do...while`: always runs at least once.
- `for...of`: visits iterable values, such as array items.
- `for...in`: visits enumerable property keys; usually use `for...of` for arrays.
- `break` exits a loop; `continue` skips to the next iteration.

```js
for (let number = 1; number <= 3; number++) {
    console.log(number);
}

for (const fruit of ["apple", "banana", "cherry"]) {
    console.log(fruit);
}

let countdown = 3;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}

for (const number of [1, 2, 3, 4, 5]) {
    if (number % 2 !== 0) continue;
    if (number > 4) break;
    console.log(number);
}
```

## 6. Functions

- A **declaration** is named and can be called before its source line.
- An **expression** assigns a function to a value.
- An **arrow function** uses `=>` and does not have its own `this`.
- Parameters are names in the definition; arguments are values passed to the call.
- `return` sends a result back. Without it, a function returns `undefined`.

```js
function add(first, second = 0) {
    return first + second;
}

const double = (number) => number * 2;
const introduce = (name, country = "Bangladesh") =>
    `My name is ${name}; I am from ${country}.`;

console.log(add(5, 3)); // 8
console.log(add(5)); // 5
console.log(double(4)); // 8
console.log(introduce("Mohi"));
```

## 7. Arrays

Arrays are ordered lists with zero-based indexes. Common methods: `push` / `pop` add or remove at the end; `shift` / `unshift` add or remove at the start; `slice` copies a range; `splice` changes the original array.

- `map`: transform every item and return a new array.
- `filter`: keep matching items.
- `find`: return the first match (or `undefined`).
- `reduce`: combine items into one result.
- `forEach`: run a callback for each item; it does not create a transformed array.

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]); // 1
console.log(numbers.length); // 5
console.log(numbers.map((number) => number * 2)); // [2, 4, 6, 8, 10]
console.log(numbers.filter((number) => number % 2 === 0)); // [2, 4]
console.log(numbers.find((number) => number > 3)); // 4
console.log(numbers.reduce((sum, number) => sum + number, 0)); // 15

const [first, second] = numbers;
const extended = [...numbers, 6]; // shallow copy plus a new item
console.log(first, second, extended);
```

## 8. Objects

Objects group values as key-value pairs. I can read properties with dot or bracket notation, add or update with assignment, and remove one with `delete`. Methods are functions stored on objects; `this` refers to the object when called as `object.method()`.

```js
const person = {
    name: "Mohi",
    address: { city: "Dhaka" },
    greet() {
        return `Hello, ${this.name}!`;
    },
};

const key = "name";
console.log(person.name, person[key]);
console.log(person.address?.city); // optional chaining
console.log(person.contact?.email); // undefined; no error

const { name, address } = person; // destructuring
const copy = { ...person }; // shallow copy
console.log(Object.keys(person), Object.values(person));
console.log(name, address.city, person.greet());
```

## 9. Closures and callbacks

- JavaScript uses lexical scope: an inner function can access variables from the scope where it was created.
- A **closure** keeps access to those outer variables after the outer function has finished.
- A **callback** is a function passed to another function.
- A **higher-order function** takes a function as an argument or returns a function. `map`, `filter`, and `reduce` use callbacks.
- An IIFE (immediately invoked function expression) runs as soon as it is created.

```js
function createCounter(start = 0) {
    let count = start;

    return function increment() {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2: the closure remembers count

const calculate = (first, second, operation) => operation(first, second);
console.log(calculate(6, 7, (a, b) => a * b)); // 42

(() => console.log("Runs immediately"))();
```

## 10. DOM

The DOM (Document Object Model) is the browser's object representation of an HTML page. Common selectors include `getElementById`, `querySelector`, and `querySelectorAll`. Use `textContent` for text; use `innerHTML` only when inserting trusted markup.

```html
<p id="message">Original text</p>
<button id="change-button" type="button">Change text</button>
```

```js
const message = document.querySelector("#message");
const button = document.querySelector("#change-button");

if (!message || !button) {
    throw new Error("Required example elements are missing.");
}

button.addEventListener("click", () => {
    message.textContent = "Updated with JavaScript.";
});
```

`textContent` includes text regardless of visual styling. `innerText` reflects rendered text. `innerHTML` parses HTML and should not receive untrusted user input.

## 11. Events

`addEventListener` connects an event to a callback. The event object contains details such as `event.target`. Most events bubble from the target toward its ancestors; event delegation handles child interactions on a shared parent.

```html
<button id="count-button" type="button">Click me</button>
<p id="count-output">Not clicked yet.</p>
```

```js
const button = document.querySelector("#count-button");
const output = document.querySelector("#count-output");
let count = 0;

if (!button || !output) {
    throw new Error("Required example elements are missing.");
}

button.addEventListener("click", (event) => {
    count++;
    output.textContent = `Clicked ${count} time(s).`;
    console.log("Event target:", event.target);
});
```

## 12. Forms

I listen for `submit`, call `preventDefault()` when handling the form on the page, and read trimmed input values. HTML constraints such as `required`, `type="email"`, and `minlength` provide browser validation; real applications must also validate data on the server.

```html
<form id="greeting-form">
    <label for="visitor-name">Name</label>
    <input id="visitor-name" name="name" required />
    <button type="submit">Send</button>
</form>
<p id="greeting-output" aria-live="polite"></p>
```

```js
const form = document.querySelector("#greeting-form");
const nameInput = document.querySelector("#visitor-name");
const output = document.querySelector("#greeting-output");

if (!form || !nameInput || !output) {
    throw new Error("Required example elements are missing.");
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    output.textContent = `Hello, ${nameInput.value.trim()}!`;
});
```

## 13. Timers

- `setTimeout(callback, delay)` schedules a callback once.
- `setInterval(callback, delay)` schedules it repeatedly.
- `clearTimeout` and `clearInterval` cancel scheduled work.
- Timer delays are approximate, not guaranteed execution times.

```js
const timeoutId = setTimeout(() => {
    console.log("Runs once after about one second.");
}, 1000);

const intervalId = setInterval(() => {
    console.log("Repeats about once per second.");
    clearInterval(intervalId);
}, 1000);

// clearTimeout(timeoutId); // Cancel the one-time callback if needed.
```

For a countdown, calculate remaining time from a deadline (`Date.now() + duration`) instead of assuming each interval tick is exact.

## 14. Web storage

- `localStorage` persists in the browser across sessions.
- `sessionStorage` lasts for the current tab session.
- Both store strings. Use `JSON.stringify` and `JSON.parse` for objects.
- Storage can be unavailable or throw (for example, when browser settings block it); handle that case.
- Cookies are sent with matching HTTP requests. Web storage is not. Do not store sensitive authentication secrets in browser storage.

```js
const key = "favorite-color";

try {
    localStorage.setItem(key, "blue");
    const color = localStorage.getItem(key);
    console.log(color); // "blue"

    const preferences = { color: "blue", compactMode: true };
    localStorage.setItem("preferences", JSON.stringify(preferences));
    const savedPreferences = JSON.parse(localStorage.getItem("preferences"));
    console.log(savedPreferences.color);

    localStorage.removeItem(key);
} catch (error) {
    console.error("Browser storage is unavailable.", error);
}
```

## Quick reminders

| Topic | Reminder |
| --- | --- |
| Equality | Prefer `===` and `!==` to avoid implicit type conversion. |
| Missing values | `null` is intentional absence; `undefined` commonly means not assigned or not found. |
| Arrays | `map` transforms; `filter` selects; `find` returns the first match; `reduce` combines. |
| Copies | Array/object spread makes a shallow copy, not a deep copy. |
| DOM output | Prefer `textContent` for text; do not put untrusted input in `innerHTML`. |
| Browser input | Validate input; client-side validation is not a replacement for server-side validation. |
| Storage | Web storage holds strings and may be unavailable. |
| Async timing | Timer callbacks run after a minimum delay when the event loop can process them. |

## My practice files

- [Variables](./modules/variables.js) · [Data types](./modules/data-type.js) · [Operators](./modules/operators.js)
- [Control flow](./modules/control-flow.js) · [Loops](./modules/loops.js) · [Functions](./modules/functions.js)
- [Arrays](./modules/arrays.js) · [Objects](./modules/objects.js) · [Closures and callbacks](./modules/practice.js)
- [DOM](./modules/dom.js) · [Events](./modules/events.js) · [Forms](./modules/form.js)
- [Timers](./modules/timer.js) · [Web storage](./modules/webstorage.js)
- [Browser practice lab](./modules/index.html) · [Interview questions](./INTERVIEW_QUESTIONS.md)
