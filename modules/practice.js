// Scope, closures, callbacks, and higher-order functions.
// Run this lesson with: node modules/practice.js

// A var declaration is hoisted and initialized as undefined.
console.log("Before assignment:", hoistedMessage);
var hoistedMessage = "The declaration was available first.";
console.log("After assignment:", hoistedMessage);

// A function can access variables from the scope where it was created.
function createGreeter(greeting) {
    return function greet(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeter("Hello");
const sayWelcome = createGreeter("Welcome");
console.log(sayHello("Mohi"));
console.log(sayWelcome("Mohi"));

// The returned function keeps its own private count in a closure.
function createCounter(start = 0) {
    let count = start;

    return function increment() {
        count += 1;
        return count;
    };
}

const firstCounter = createCounter();
const secondCounter = createCounter(10);
console.log("First counter:", firstCounter(), firstCounter());
console.log("Second counter:", secondCounter());

// A higher-order function receives another function as an argument.
function calculate(firstNumber, secondNumber, operation) {
    return operation(firstNumber, secondNumber);
}

const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
console.log("Calculated result:", calculate(6, 7, multiply));

// Array methods such as map accept callbacks to transform each value.
const scores = [62, 75, 91];
const adjustedScores = scores.map((score) => score + 5);
console.log("Original scores:", scores);
console.log("Adjusted scores:", adjustedScores);
