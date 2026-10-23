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