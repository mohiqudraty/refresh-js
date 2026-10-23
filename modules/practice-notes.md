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

My runnable practice file is [`variables.js`](variables.js). I can run it with Node.js or open [`index.html`](index.html) and check the browser console.

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

My runnable data type examples are in [`data-type.js`](data-type.js). I can run the file with Node.js or open [`index.html`](index.html) and check the browser console.