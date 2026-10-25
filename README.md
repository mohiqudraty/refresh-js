# My JavaScript Practice Notes

`TOPIC 01` / `VARIABLES`

> [!NOTE]
> These are my practice notes. I am starting with a variable, then learning what happens when I declare it, use it before its value is assigned, and put it inside a scope.

## 1. My first variable

I use a variable to keep a value so I can use it later. Declaring a variable creates its name. Initializing it means giving it its first value.

```js
let name;
console.log(name); // undefined: I have not given it a value yet.

name = "mohi";
console.log(name);

let age = 21;
const favoriteNumber = 33;
console.log(age, favoriteNumber);
```

> [!TIP]
> `let name;` is a declaration. `name = "mohi";` assigns a value. `let age = 21;` does both in one line.

## 2. Choosing `var`, `let`, or `const`

This is what I noticed while practicing:

| Keyword | Can I redeclare it here? | Can I give it a new value? | Scope |
| --- | --- | --- | --- |
| `var` | Yes | Yes | Function |
| `let` | No | Yes | Block |
| `const` | No | No | Block |

```js
var oldName = "mohi";
var oldName = "mohiuddin"; // var allows this.

let score = 11;
score = 72; // let allows a new value.

const nickname = "mahmud";
// nickname = "qudraty"; // Error: const cannot be reassigned.
// let score = 33; // Error: score is already declared in this scope.
```

> [!IMPORTANT]
> `const` needs a value when I declare it. I usually choose `const` when the variable will not be reassigned, and `let` when I need to give it a new value. I learn `var` because I will see it in older code.

## 3. Hoisting with `var`

I tried reading a `var` before its declaration. JavaScript has created the variable, but its assigned value is not ready yet, so I see `undefined`.

```js
console.log(city); // undefined
var city = "qudraty";
console.log(city); // "qudraty"
```

It is helpful to think of the code like this. The declaration is moved up in my mental model; the assignment is not.

```js
var city;
console.log(city); // undefined
city = "qudraty";
```

## 4. The temporal dead zone

`let` and `const` are different from `var`: I cannot use them before their declaration. That time is called the **temporal dead zone (TDZ)**.

```js
{
    // console.log(futureName); // ReferenceError: still in the TDZ.
    let futureName = "mahmud";
    console.log(futureName);
}
```

> [!WARNING]
> Before the declaration runs, reading a `let` or `const` variable causes a `ReferenceError`. Reading a hoisted `var` gives `undefined` instead.

## 5. Scope: where can I use it?

Scope means the part of the code where I can use a variable. Here, `var` is available throughout the function. `let` is only available inside the block where I declared it.

```js
function practiceScope() {
    if (true) {
        var blockVar = "mohiuddin";
        let blockLet = "mohi";
    }

    console.log(blockVar); // "mohiuddin"
    // console.log(blockLet); // ReferenceError: outside its block.
}

practiceScope();
```

## What I remember

- A declaration creates a variable name; initialization gives it its first value.
- `let` can be reassigned. `const` cannot. `var` can be redeclared.
- A `var` used before its assignment is `undefined`.
- A `let` or `const` used before its declaration is in the TDZ and throws a `ReferenceError`.
- `let` and `const` are block-scoped; `var` is function-scoped.

### My practice

1. Declare a variable named `friend` without a value. Print it, then assign it `"mohiuddin"`.
2. Make a `let` score with the value `11`. Change it to `72` and print it again.
3. Predict what the hoisting example prints before running it.
4. Try moving `console.log(blockLet)` outside the `if` block and see what happens.

> [!TIP]
> Each example is a fenced JavaScript code block. Use its copy button in Markdown previews that support code-block actions.

My runnable practice file is [`variables.js`](modules/variables.js). I can run it with Node.js or open [`index.html`](modules/index.html) and check the browser console.

`TOPIC 02` / `DATA TYPES`

> [!NOTE]
> A data type describes the kind of value I am working with. JavaScript is dynamically typed, so a variable can hold a value of one type and later hold a value of another type.

## 1. Primitive data types

JavaScript has seven primitive types: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`.

```js
const firstName = "mohi"; // string
const age = 21; // number
const largeNumber = 9007199254740993n; // bigint
const isLearning = true; // boolean
let favoriteColor; // undefined: declared, but not assigned a value
const uniqueId = Symbol("id"); // symbol: a unique value
const emptyValue = null; // null: an intentional absence of a value

console.log(typeof firstName); // "string"
console.log(typeof age); // "number"
console.log(typeof largeNumber); // "bigint"
console.log(typeof isLearning); // "boolean"
console.log(typeof favoriteColor); // "undefined"
console.log(typeof uniqueId); // "symbol"
console.log(typeof emptyValue); // "object": a historical JavaScript quirk
```

> [!TIP]
> `undefined` often means no value has been assigned. I use `null` when I want to intentionally represent "no value". The `typeof null` result is a long-standing quirk; it does not mean that `null` is an object.

## 2. Objects, arrays, and functions

Objects group related values. Arrays keep an ordered list of values, and functions contain reusable code. Objects and arrays are reference values; functions are callable objects.

```js
const person = { name: "mohi", age: 21 };
const colors = ["red", "green", "blue"];
function sayHello() {
    return "Hello!";
}

console.log(typeof person); // "object"
console.log(typeof colors); // "object"
console.log(Array.isArray(colors)); // true
console.log(typeof sayHello); // "function"
```

> [!IMPORTANT]
> `typeof` reports arrays as `"object"`, so I use `Array.isArray()` when I need to check whether a value is an array.

## 3. Copying primitive and reference values

When I copy a primitive value, the new variable gets its own value. Changing one variable does not change the other.

```js
let originalScore = 10;
let copiedScore = originalScore;
originalScore = 20;

console.log(originalScore); // 20
console.log(copiedScore); // 10
```

When I assign an object to another variable, both variables refer to the same object. Changing a property through either variable is visible through both.

```js
const originalPerson = { name: "mohi" };
const copiedPerson = originalPerson;
originalPerson.name = "mohiuddin";

console.log(originalPerson.name); // "mohiuddin"
console.log(copiedPerson.name); // "mohiuddin"
```

I can make a shallow copy with object spread. This creates a different top-level object.

```js
const personCopy = { ...originalPerson };
personCopy.name = "mahmud";

console.log(originalPerson.name); // "mohiuddin"
console.log(personCopy.name); // "mahmud"
```

## 4. Type coercion

JavaScript sometimes converts a value from one type to another automatically. This is called **type coercion**. I can convert values explicitly when I want the code to be clear.

```js
console.log("5" + 2); // "52": + joins the values as strings
console.log("5" - 2); // 3: - converts the string to a number
console.log(Number("5") + 2); // 7: explicit conversion
```

## 5. Truthy and falsy values

In a Boolean check, the values `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN` are falsy. Every other value is truthy, including empty arrays and empty objects.

```js
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
```

## What I remember

- JavaScript has seven primitive types: string, number, bigint, boolean, undefined, symbol, and null.
- Arrays and objects are reference values. `Array.isArray()` checks for arrays.
- Assigning an object to another variable copies its reference, not the object itself.
- `typeof null` returns `"object"` because of a historical quirk.
- JavaScript can coerce values between types; explicit conversions can make my intent clearer.
- Empty strings, zero, `null`, `undefined`, and `NaN` are falsy. Empty arrays and objects are truthy.

### My practice

1. Create one variable for each primitive type and print its value and `typeof` result.
2. Check whether an array is an array using `Array.isArray()`.
3. Copy a number and an object, change each original, and compare what happens to each copy.
4. Predict the results of `"8" + 3`, `"8" - 3`, and `Boolean([])` before running them.

My runnable data type examples are in [`data-type.js`](modules/data-type.js). I can run the file with Node.js or open [`index.html`](modules/index.html) and check the browser console.

`TOPIC 03` / `OPERATORS`

> [!NOTE]
> Operators perform actions with values. I use them to calculate, assign, compare, and combine conditions.

## 1. Arithmetic and assignment operators

Arithmetic operators do calculations. `%` gives me the remainder, and `**` raises a number to a power. Assignment operators such as `+=` update a variable using its current value.

```js
const firstNumber = 12;
const secondNumber = 5;

console.log(firstNumber + secondNumber); // 17
console.log(firstNumber - secondNumber); // 7
console.log(firstNumber * secondNumber); // 60
console.log(firstNumber / secondNumber); // 2.4
console.log(firstNumber % secondNumber); // 2
console.log(secondNumber ** 2); // 25

let total = 10;
total += 5; // Same as total = total + 5.
console.log(total); // 15
```

## 2. Comparison and logical operators

Comparison operators return `true` or `false`. I use `===` and `!==` for strict comparisons so JavaScript does not convert the values before checking them. Logical operators let me combine or reverse conditions.

```js
console.log(12 > 5); // true
console.log(12 === 12); // true
console.log(12 === "12"); // false: the types are different.
console.log(12 !== 5); // true

const hasTicket = true;
const isOldEnough = false;
console.log(hasTicket && isOldEnough); // false: both must be true.
console.log(hasTicket || isOldEnough); // true: at least one must be true.
console.log(!hasTicket); // false: ! reverses the Boolean value.
```

## 3. Conditional and default-value operators

The conditional, or **ternary**, operator chooses one of two values. The nullish coalescing operator `??` uses a default only when the left value is `null` or `undefined`.

```js
const score = 76;
const result = score >= 50 ? "Pass" : "Try again";
console.log(result); // "Pass"

const providedName = "mohi";
const displayName = providedName ?? "Guest";
console.log(displayName); // "mohi"
```

## 4. Solved problems

### Find a rectangle's area and perimeter

Area is length multiplied by width. Perimeter is twice the sum of length and width.

```js
const length = 8;
const width = 3;
const area = length * width;
const perimeter = 2 * (length + width);

console.log(area); // 24
console.log(perimeter); // 22
```

### Check whether a number is even or odd

An even number has a remainder of `0` when divided by `2`. I combine `%` with `===` and the ternary operator to choose the answer.

```js
const numberToCheck = 17;
const evenOrOdd = numberToCheck % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd); // "Odd"
```

### Calculate a discount and check a budget

I calculate the discount amount as a percentage of the original price, subtract it, and compare the result with my budget.

```js
const originalPrice = 80;
const discountPercent = 25;
const finalPrice = originalPrice - (originalPrice * discountPercent / 100);
const budgetMessage = finalPrice <= 60 ? "Within budget" : "Over budget";

console.log(finalPrice); // 60
console.log(budgetMessage); // "Within budget"
```

> [!TIP]
> Parentheses make the order of a calculation clear. For example, `2 * (length + width)` adds the dimensions before multiplying by `2`.

## What I remember

- Arithmetic operators calculate values; `%` finds a remainder and `**` calculates a power.
- Assignment operators such as `+=` update a variable.
- Comparisons return a Boolean. I usually choose `===` and `!==` for strict comparisons.
- `&&` requires both conditions to be true; `||` requires at least one; `!` reverses a Boolean.
- The ternary operator chooses between two values. `??` provides a fallback for `null` or `undefined`.

### My practice

1. Calculate the area and perimeter of a rectangle with length `10` and width `4`.
2. Use `%` to decide whether `24` is even or odd.
3. A product costs `120` and has a `15` percent discount. Calculate the final price.
4. Use a ternary operator to print `"Pass"` for a score of `65` when the passing score is `50`.

My runnable operator examples and solved problems are in [`operators.js`](modules/operators.js). I can run the file with Node.js or open [`index.html`](modules/index.html) and check the browser console.

`TOPIC 04` / `CONTROL FLOW`

> [!NOTE]
> Control flow determines which statements run and how many times they run. Conditions choose a path, loops repeat work, and `return` can leave a function early.

## 1. Choose a path with `if...else`

I use `if`, `else if`, and `else` to run one branch based on conditions. JavaScript checks the conditions from top to bottom and runs the first matching branch.

```js
const score = 82;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Keep practicing");
}
```

## 2. Match a value with `switch`

I use `switch` when I want to compare one expression with several exact values. `break` prevents execution from continuing into the next case. `default` runs when no case matches.

```js
const role = "editor";

switch (role) {
    case "admin":
        console.log("Full access");
        break;
    case "editor":
        console.log("Can edit content");
        break;
    default:
        console.log("Unknown role");
}
```

## 3. Repeat work with loops

I use a `for` loop when I know how to initialize, check, and update a counter. A `while` loop checks its condition before each repetition. A `do...while` loop always runs at least once because it checks the condition afterward.

```js
for (let number = 1; number <= 3; number++) {
    console.log("For:", number);
}

let countdown = 2;
while (countdown > 0) {
    console.log("While:", countdown);
    countdown--;
}

let attempts = 0;
do {
    console.log("This runs at least once");
    attempts++;
} while (attempts < 1);
```

`for...of` is a convenient way to visit each value in an iterable, such as an array. `continue` skips to the next repetition, while `break` exits the loop. More runnable examples are in [`loops.js`](modules/loops.js).

```js
for (const number of [1, 2, 3, 4]) {
    if (number === 2) {
        continue;
    }

    if (number === 4) {
        break;
    }

    console.log(number); // 1, then 3
}
```

## 4. Return early from a function

An early return handles a condition and exits the function immediately. This can keep the remaining logic easy to follow.

```js
function getShippingCost(subtotal) {
    if (subtotal >= 50) {
        return 0;
    }

    return 5.99;
}

console.log(getShippingCost(35)); // 5.99
console.log(getShippingCost(60)); // 0
```

## What I remember

- `if...else` chooses a branch based on Boolean conditions.
- `switch` checks one expression against exact case values; `break` exits a case.
- `for`, `while`, and `do...while` repeat code with different condition-check timing.
- `break` exits a loop, and `continue` skips the rest of the current repetition.
- `return` exits a function and can provide its result.

### My practice

1. Use `if...else` to print whether a number is positive, negative, or zero.
2. Use `switch` to print a message for a traffic-light color, with a `default` case.
3. Use a `for` loop to print the even numbers from `2` through `10`.
4. Write a function that returns `"Adult"` for an age of `18` or more and `"Minor"` otherwise.

My runnable control-flow examples are in [`control-flow.js`](modules/control-flow.js), and more loop examples are in [`loops.js`](modules/loops.js). I can run either file with Node.js and check the output in the terminal.

`TOPIC 05` / `FUNCTIONS`

> [!NOTE]
> A function is a reusable block of code. It can receive values through parameters, work with those values, and return a result.

## 1. Declare and call a function

I use a function declaration to give reusable code a name. Calling the function runs its body.

```js
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Mohi")); // "Hello, Mohi!"
```

The function's `name` parameter receives the `"Mohi"` argument. `return` sends a value back to the caller.

## 2. Use parameters and return a result

```js
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const sum = add(5, 3);
console.log(sum); // 8
```

Parameters are the names in the function definition. Arguments are the actual values I provide when calling it.

## 3. Set a default parameter

A default parameter provides a value when an argument is omitted.

```js
function introduce(name, country = "Bangladesh") {
    return `My name is ${name}, and I am from ${country}.`;
}

console.log(introduce("Mohi"));
console.log(introduce("Mohi", "Canada"));
```

## 4. Write an arrow function

Arrow functions are another way to create functions. When the body is a single expression, it can return that expression directly.

```js
const double = (number) => number * 2;
console.log(double(4)); // 8
```

## What I remember

- A function declaration gives reusable code a name.
- Parameters receive input; arguments are passed when calling the function.
- `return` sends a result back and ends that function call.
- Default parameters provide a value when an argument is missing.
- Arrow functions are useful for writing short function expressions.

### My practice

1. Write a function that takes two numbers and returns their product.
2. Write a function with a default greeting, then call it with and without an argument.
3. Write a function that returns `"Minor"` for an age below `18` and `"Adult"` otherwise.
4. Rewrite a short function expression as an arrow function.

My runnable function examples are in [`functions.js`](modules/functions.js). I can run the file with Node.js and check the output in the terminal.

`TOPIC 06` / `ARRAYS`

> [!NOTE]
> An array stores an ordered list of values. I use its zero-based indexes to access items, and array methods to add, remove, search, or transform values.

## 1. Create, access, and update an array

The first item is at index `0`. The `length` property tells me how many items the array contains.

```js
const fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // "apple"
console.log(fruits.length); // 3

fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]
console.log(Array.isArray(fruits)); // true
```

## 2. Add and remove items

`push()` adds items to the end and `pop()` removes the last item. Both change the original array.

```js
const colors = ["red", "green"];

colors.push("blue");
console.log(colors); // ["red", "green", "blue"]

const lastColor = colors.pop();
console.log(lastColor); // "blue"
console.log(colors); // ["red", "green"]
```

## 3. Loop through an array

I use `for...of` when I want to work with each value in order.

```js
for (const fruit of ["apple", "banana", "cherry"]) {
    console.log(fruit);
}
```

## 4. Search and transform values

`map()` transforms each item into a new array. `filter()` makes a new array from items that pass a condition. `find()` returns the first matching item.

```js
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

const firstNumberOverThree = numbers.find((number) => number > 3);
console.log(firstNumberOverThree); // 4
console.log(numbers.includes(3)); // true
```

## 5. Combine values and copy an array

`reduce()` combines items into one value. Destructuring assigns array items to variables. Spread makes a shallow copy that I can extend without changing the original array.

```js
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total); // 15

const [firstNumber, secondNumber] = numbers;
console.log(firstNumber, secondNumber); // 1 2

const moreNumbers = [...numbers, 6];
console.log(moreNumbers); // [1, 2, 3, 4, 5, 6]
console.log(numbers); // [1, 2, 3, 4, 5]
```

## What I remember

- Arrays keep values in order and use zero-based indexes.
- `push()` and `pop()` change the original array.
- `map()` and `filter()` return new arrays; `find()` returns the first match.
- `reduce()` can combine array values into one result.
- `Array.isArray()` checks whether a value is an array.
- Spread (`...`) creates a shallow copy of an array.

### My practice

1. Create an array of four favorite foods and print the first and last items.
2. Add an item with `push()` and remove the last item with `pop()`.
3. Use `filter()` to keep only numbers greater than `10`.
4. Use `map()` to turn an array of names into uppercase names.
5. Use `reduce()` to calculate the total of an array of prices.

My runnable array examples are in [`arrays.js`](modules/arrays.js). I can run the file with Node.js and check the output in the terminal.

`TOPIC 07` / `OBJECTS`

> [!NOTE]
> An object groups related data into key-value pairs. I can read and update its properties, define methods, and safely access nested values.

## 1. Create an object and read its properties

I use dot notation when I know the property name. Bracket notation is useful when the property name is in a variable.

```js
const person = {
    name: "Mohi",
    age: 21,
};

console.log(person.name); // "Mohi"

const propertyName = "age";
console.log(person[propertyName]); // 21
```

## 2. Add, update, and remove properties

```js
const person = { name: "Mohi", age: 21 };

person.job = "Developer"; // Add a property.
person.age = 22; // Update a property.
delete person.job; // Remove a property.

console.log("age" in person); // true
console.log(person);
```

The `in` operator checks whether a property exists on the object or its prototype chain.

## 3. Add a method and access nested values

Methods are functions stored as object properties. Optional chaining (`?.`) returns `undefined` instead of throwing an error when a value along the chain is `null` or `undefined`.

```js
const person = {
    name: "Mohi",
    address: { city: "Dhaka" },
    greet() {
        return `Hello, my name is ${this.name}.`;
    },
};

console.log(person.greet()); // "Hello, my name is Mohi."
console.log(person.address?.city); // "Dhaka"
console.log(person.contact?.address); // undefined
```

## 4. Inspect, destructure, and copy an object

`Object.keys()`, `Object.values()`, and `Object.entries()` return an object's own enumerable keys, values, or key-value pairs. Destructuring lets me assign properties to variables.

```js
const person = { name: "Mohi", age: 21 };

console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.values(person)); // ["Mohi", 21]
console.log(Object.entries(person)); // [["name", "Mohi"], ["age", 21]]

const { name, age } = person;
console.log(name, age); // "Mohi" 21
```

Object spread makes a shallow copy: it copies top-level properties, but nested objects are still shared references.

```js
const original = { name: "Mohi", address: { city: "Dhaka" } };
const copy = { ...original };

copy.name = "Alex";
copy.address.city = "Chattogram";

console.log(original.name); // "Mohi"
console.log(original.address.city); // "Chattogram": the nested object is shared.
```

## What I remember

- Objects group related values as key-value pairs.
- Dot notation reads known property names; bracket notation can use a variable.
- Methods are functions stored on an object.
- Optional chaining safely reads properties that may be missing.
- Object spread makes a shallow copy, not a deep copy.

### My practice

1. Create a `book` object with a title, author, and page count, then print each property.
2. Add a property, update another, and remove one with `delete`.
3. Add a method that returns a sentence using the object's properties.
4. Use destructuring to get two properties into variables.
5. Copy an object with a nested property and observe what happens when you change the nested value in the copy.

My runnable object examples are in [`objects.js`](modules/objects.js). I can run the file with Node.js and check the output in the terminal.

`TOPIC 08` / `THE DOM`

## 1. Select an element and update its text

The **Document Object Model (DOM)** represents the HTML page as elements that JavaScript can select and change. In [modules/index.html](./modules/index.html), the paragraph has the id `description`, so `querySelector("#description")` finds it.

The runnable example in [modules/dom.js](./modules/dom.js) creates a button, adds a click event listener, and uses `textContent` to change the paragraph. Click the button again to restore the original text. The script is loaded after the HTML elements and the existing practice script.

```js
(() => {
    const description = document.querySelector("#description");

    if (!description) {
        throw new Error('The DOM example requires an element with id="description".');
    }

    const originalText = description.textContent ?? "";
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = "Change description";
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", () => {
        const isUpdated = button.getAttribute("aria-pressed") === "true";

        description.textContent = isUpdated
            ? originalText
            : "The description was updated with JavaScript.";
        button.setAttribute("aria-pressed", String(!isUpdated));
    });

    document.body.append(button);
})();
```

> [!TIP]
> `createElement()` makes a new element, `addEventListener()` responds to an event, and `append()` adds the element to the page. Use `textContent` for text rather than `innerHTML` when you do not need to insert HTML.

### My practice

1. Change the selector to target `#another-description` and update that paragraph.
2. Add a second button that changes the heading selected with `.title`.
3. Try changing the text with `textContent` and compare it with reading the element's current text.

`TOPIC 09` / `EVENTS`

## 1. Respond to browser events

An **event** is an action or occurrence in the browser. I can use `addEventListener()` to run a function when an event happens. In [modules/index.html](./modules/index.html), the event demo has a button and a name form. The runnable code is in [modules/events.js](./modules/events.js).

```js
countButton.addEventListener("click", () => {
    clickCount += 1;
    countOutput.textContent = `Button clicked ${clickCount} ${
        clickCount === 1 ? "time" : "times"
    }.`;
});

nameInput.addEventListener("input", () => {
    nameFeedback.textContent = `You have typed ${nameInput.value.length} characters.`;
});

greetingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    greetingOutput.textContent = `Hello, ${name || "there"}!`;
});
```

The click listener counts button clicks. The input listener responds as I type, and the submit listener greets me. `preventDefault()` stops the form from reloading the page. The complete example checks that its required HTML elements exist before adding listeners.

### My practice

1. Add a `change` listener to a select element and display the selected value.
2. Add a reset button that clears the greeting output.
3. Try `keydown` on the name input and compare it with the `input` event.
