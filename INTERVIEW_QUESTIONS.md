# JavaScript Interview Questions

A compact review guide for the concepts in this practice project. Try to answer each question before reading its explanation.

## Language fundamentals

### 1. What is the difference between `let`, `const`, and `var`?

`let` and `const` are block-scoped. `let` can be reassigned; `const` cannot be reassigned and must be initialized. `var` is function-scoped and can be redeclared, so modern code generally prefers `const` and `let`.

### 2. What is the temporal dead zone?

It is the time between entering a scope and reaching a `let` or `const` declaration. Accessing that binding during this period throws a `ReferenceError`.

### 3. What does hoisting mean?

Declarations are processed before their scope's code runs. Function declarations can be called before their position in the source; `var` is initialized to `undefined`; `let` and `const` are not usable before initialization.

### 4. What are JavaScript's primitive types?

`string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`.

### 5. Why does `typeof null` return `"object"`?

It is a long-standing JavaScript behavior kept for compatibility. Use `value === null` to check for `null`.

### 6. What is the difference between `==` and `===`?

`==` may convert types before comparing. `===` compares without that conversion, so it is usually the clearer default.

### 7. What is type coercion?

It is JavaScript's conversion of a value from one type to another. Use explicit conversions such as `Number(value)` when they make intent clearer.

### 8. What are truthy and falsy values?

Truthy values act like `true` in a Boolean context. Falsy values are `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`; everything else is truthy.

## Functions and scope

### 9. What is the difference between a parameter and an argument?

A parameter is a named input in a function definition. An argument is the value supplied when the function is called.

### 10. What is a callback?

A callback is a function passed to another function so it can be called later, often in response to an event or while processing a collection.

### 11. What is a higher-order function?

A function that takes another function as an argument, returns a function, or does both. `map` and `filter` are common examples.

### 12. What is a closure?

A function bundled with access to variables from the scope where it was created. A closure can keep those variables available after the outer function has returned.

### 13. What is lexical scope?

The visibility of a variable is determined by where functions and blocks are written in the source code. Inner scopes can access bindings from their outer lexical scopes.

### 14. How are arrow functions different from regular functions?

Arrow functions do not create their own `this` or `arguments` binding, and they cannot be used as constructors. Regular functions do have their own `this` based on how they are called.

### 15. What does an early return do?

It exits a function as soon as a condition is handled. This can reduce nesting and make the remaining path easier to read.

## Arrays and objects

### 16. What is the difference between `map` and `forEach`?

`map` returns a new array containing each callback result. `forEach` runs a callback for each item and returns `undefined`.

### 17. What do `filter`, `find`, and `reduce` do?

`filter` returns all items matching a condition; `find` returns the first matching item (or `undefined`); `reduce` combines items into one accumulated result.

### 18. What is destructuring?

A concise way to unpack values from arrays or properties from objects into variables.

### 19. What does the spread syntax do?

It expands iterable values or object properties into a new array or object. Copies made this way are shallow: nested objects are still shared.

### 20. What is the difference between dot and bracket property access?

Dot notation uses a fixed property name, as in `user.name`. Bracket notation accepts an expression, as in `user[propertyName]`, and supports names that are not valid identifiers.

### 21. What does optional chaining (`?.`) do?

It safely accesses a property or calls a method when the value before `?.` might be `null` or `undefined`. The expression short-circuits to `undefined` if that value is missing.

## Browser JavaScript

### 22. What is the DOM?

The Document Object Model is the browser's object representation of a page. JavaScript can use it to read and update elements, attributes, and text.

### 23. What is event bubbling?

After an event reaches its target, it normally propagates through ancestor elements. This makes event delegation possible: a parent can handle events from its descendants.

### 24. Why call `preventDefault()` on a form's submit event?

It prevents the browser's default navigation or submission behavior so the page can handle the data itself. A real application still needs appropriate server-side validation.

### 25. What is the difference between `localStorage` and `sessionStorage`?

Both store string key-value pairs in the browser. `localStorage` persists across browser sessions; `sessionStorage` is scoped to the current tab's session.

### 26. How do you store an object in web storage?

Convert it to a string with `JSON.stringify(object)` before saving, then use `JSON.parse(value)` after reading. Handle missing or invalid stored data appropriately.

### 27. What is the difference between `setTimeout` and `setInterval`?

`setTimeout` schedules a callback once after a delay. `setInterval` schedules it repeatedly until cleared. Neither guarantees execution at an exact time.
