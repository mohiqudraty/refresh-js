// JavaScript functions
// A function is a reusable block of code that can receive input and return a result.

// A function declaration can be called by its name.
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Mohi"));

// Parameters are the inputs; arguments are the values passed when calling the function.
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const sum = add(5, 3);
console.log("Sum:", sum);

// A default parameter is used when an argument is not provided.
function introduce(name, country = "Bangladesh") {
    return `My name is ${name}, and I am from ${country}.`;
}

console.log(introduce("Mohi"));
console.log(introduce("Mohi", "Canada"));

// An arrow function is a shorter way to write a function expression.
const double = (number) => number * 2;
console.log("Double:", double(4));

// A function can use an early return when it handles a condition.
function getAgeGroup(age) {
    if (age < 18) {
        return "Minor";
    }

    return "Adult";
}

console.log("Age 16:", getAgeGroup(16));
console.log("Age 21:", getAgeGroup(21));
