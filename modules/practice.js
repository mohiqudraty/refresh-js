/*
// javascript is a programming language that is used to create dynamic and interactive web pages. It is a versatile language that can be used for both front-end and back-end development.

// variable: A variable is a container that holds data. In JavaScript, you can declare a variable using the var, let, or const keywords.

// var, let, and const are used to declare variables in JavaScript. The main differences between them are:
// - var is function-scoped and can be redeclared and reassigned.
// - let is block-scoped and can be reassigned but not redeclared.
// - const is block-scoped and cannot be reassigned or redeclared.

var globalVar = "I am a global variable"; // This variable is accessible anywhere in the code.
let globalLet = "I am a global variable"; // This variable is accessible anywhere in the code
const globalConst = "I am a global variable"; // This variable is accessible anywhere in the code


{
    var blockVar = "I am a block variable"; // This variable is accessible anywhere in the code.
    let blockLet = "I am a block variable"; // This variable is accessible only within this block.
    const blockConst = "I am a block variable"; // This variable is accessible only within this block.
}

function practiceScope() {
    if (true) {
        var functionVar = "I am a function variable"; // This variable is accessible only anywhere in the function.
        let functionLet = "I am a function variable"; // This variable is accessible only within this block.
        const functionConst = "I am a function variable"; // This variable is accessible only within this block.
    }

    // console.log(functionVar); // This will work because functionVar is function-scoped.
    // console.log(functionLet); // This will not work because functionLet is block-scoped. its show ReferenceError: functionLet is not defined
    // console.log(functionConst); // This will not work because functionConst is block-scoped. ita show ReferenceError: functionConst is not defined
}


practiceScope();



//  hoisting in JavaScript? Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted!";
let hoistedLet = "I am not hoisted!"; // This will throw a ReferenceError if you try to access it before its declaration.
const hoistedConst = "I am not hoisted!"; // This will throw a ReferenceError if you try to access it before its declaration.


var hoistedVar;
hoistedVar = "I am hoisted!"; // This is equivalent to the previous declaration and assignment, but it is hoisted to the top of its scope.


// temporal dead zone (TDZ) is a behavior in JavaScript where variables declared with let and const cannot be accessed before their declaration. This means that if you try to access a variable before it is declared, you will get a ReferenceError.

 */





// data type and data system

// primitive data types: string, number, boolean, null, undefined, symbol

// reference data types: object, array, function 

// you can copy primitive data types and assign them to another variable, but if you change the value of the original variable, the copied variable will not be affected. This is because primitive data types are stored in the stack memory.

let name = "mohi";
let copiedName = name;
name = "mohiuddin";
console.log(name); // "mohiuddin"
console.log(copiedName); // "mohi"


// reference data types are stored in the heap memory, and when you copy a reference data type, you are copying the reference to the object in memory, not the object itself. This means that if you change the value of the original variable, the copied variable will also be affected.

let person = { name: "mohi" };
let copiedPerson = person;
person.name = "mohiuddin";
console.log(person.name); // "mohiuddin"
console.log(copiedPerson.name); // "mohiuddin"

// we can use single quotes, double quotes, or backticks to define strings in JavaScript.
// single quates ''
// duble quates ""
// backticks ``


// number data type: integer and float
// integer number: 1, 2, 3, 4, 5
// float number: 1.1, 2.2, 3.3, 4.4, 5.5

// boolean data type: true or false

// null data type: null is a special value that represents the absence of any value. It is often used to indicate that a variable has no value or that an object property does not exist.

// undefined data type: undefined is a special value that represents the absence of a value. It is often used to indicate that a variable has not been assigned a value or that an object property does not exist.

// difference between null and undefined: null is an assignment value, it can be assigned to a variable as a representation of no value. undefined is a type itself (undefined) and is the default value of uninitialized variables.

// symbol data type: Symbol is a unique and immutable primitive value that can be used as an identifier for object properties. It was introduced in ECMAScript 2015 (ES6) and provides a way to create unique keys for object properties, ensuring that they do not conflict with other property keys.

// bigint data type: BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive. BigInt can be used for arbitrarily large integers, and it is created by appending "n" to the end of an integer literal or by calling the BigInt() constructor.



// arrays objects and functions are reference data types. They are stored in the heap memory, and when you copy a reference data type, you are copying the reference to the object in memory, not the object itself. This means that if you change the value of the original variable, the copied variable will also be affected.

// dynamic typing: JavaScript is a dynamically typed language, which means that you don't have to specify the data type of a variable when you declare it. The data type of a variable can change at runtime, depending on the value assigned to it. This allows for more flexibility in coding, but it can also lead to unexpected behavior if you're not careful with how you use variables.

// type coersion: JavaScript is a loosely typed language, which means that it automatically converts values from one data type to another when necessary. This process is called type coercion. For example, if you try to add a number and a string together, JavaScript will convert the number to a string and concatenate the two values.

// truthy falsy values: In JavaScript, values can be classified as either "truthy" or "falsy" based on how they evaluate in a boolean context. A truthy value is any value that evaluates to true when used in a boolean context, while a falsy value is any value that evaluates to false. The following values are considered falsy in JavaScript: false, 0, -0, 0n, "", null, undefined, and NaN. All other values are considered truthy.



// operators in javascript: JavaScript has a variety of operators that can be used to perform operations on values. These include arithmetic operators (+, -, *, /, %), comparison operators (==, ===, !=, !==, >, <, >=, <=), logical operators (&&, ||, !), assignment operators (=, +=, -=, *=, /=), and more. Operators can be used to manipulate values and perform calculations in your code. unary operators: Unary operators are operators that operate on a single operand. In JavaScript, the unary operators include the following:
// - Unary plus (+): Converts a value to a number. For example, +true evaluates to 1, and +false evaluates to 0.
// - Unary negation (-): Negates a value. For example, -5 evaluates to -5, and -(-5) evaluates to 5. ternary operator: The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. The syntax for the ternary operator is as follows:
// condition ? valueIfTrue : valueIfFalse;



// control flow in javascript: Control flow refers to the order in which statements are executed in a program. In JavaScript, control flow is determined by conditional statements (if, else , else if), loops (for, while, do while), and function calls. Conditional statements allow you to execute different blocks of code based on certain conditions, while loops allow you to repeat a block of code multiple times. Function calls allow you to execute a block of code when the function is called. By using control flow statements effectively, you can create more complex and dynamic programs.

/* if else statement: The if-else statement is a conditional statement that allows you to execute different blocks of code based on a condition. The syntax for the if-else statement is as follows:
if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}
 */

/* switch statement: The switch statement is a conditional statement that allows you to execute different blocks of code based on the value of a variable. The syntax for the switch statement is as follows:
switch (expression) {
    case value1:
        // code to execute if expression === value1
        break;
    case value2:
        // code to execute if expression === value2
        break;
    default:
        // code to execute if expression does not match any case
} */

/* early return: The early return pattern is a programming technique that allows you to exit a function early if a certain condition is met. This can help simplify your code and make it easier to read. The syntax for the early return pattern is as follows:
function exampleFunction(condition) {
    if (!condition) {
        return; // exit the function early if condition is false
    }
    // code to execute if condition is true
} */



// loops : for while, do while, for in, for of, forEach
/* break and continue statements: The break statement is used to exit a loop or switch statement early, while the continue statement is used to skip the current iteration of a loop and move on to the next one. The syntax for the break and continue statements is as follows:
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit the loop early if i equals 5
    }
    // code to execute for each iteration
} */

/* for usecase, the continue statement can be used to skip over certain iterations of a loop.For example, if you want to skip over even numbers in a loop, you could use the continue statement as follows:
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // skip the current iteration if i is even
    }
    // code to execute for each iteration
}

for (start; condition; increment / decrement) {
    // code to execute for each iteration
}
 */

// for (let i = 1; i <= 99; i++) {
//     console.log(i);
// }


/* for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }
}
 */


/* for (let i = 1; i <= 10; i++) {

    console.log(`5 x ${i} = ${5 * i}`);
}
 */
/*
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
    console.log(`Sum of first ${i} natural numbers is: ${sum}`);
}
console.log(sum);
 */



/*
while loop: The while loop is a control flow statement that allows you to execute a block of code repeatedly as long as a certain condition is true.The syntax for the while loop is as follows:
while (condition) {
    // code to execute while condition is true
} */

/*  do {
     // code to execute at least once and then repeatedly while condition is true
 } while (condition) {
     // code to execute at least once and then repeatedly while condition is true
 } */

/* let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10); */


/* let i = 10;
do {
    console.log(i);
    i--;
} while (i >= 1); */

// diffarance between for loop and while loop: The main difference between a for loop and a while loop is that a for loop is used when you know how many times you want to execute a block of code, while a while loop is used when you want to execute a block of code as long as a certain condition is true. In other words, a for loop is used for counting, while a while loop is used for conditional execution. Additionally, the syntax of a for loop includes an initialization, condition, and increment/decrement statement, while the syntax of a while loop only includes a condition statement.



/* function in JavaScript: A function is a block of code that can be called and executed multiple times. Functions can take parameters and return values. The syntax for defining a function is as follows:
function functionName(parameter1, parameter2) {
    // code to execute
    return value; // optional
} */


/* function declaration expression arrow function: In JavaScript, there are three main ways to define functions: function declarations, function expressions, and arrow functions.

1. Function Declaration: A function declaration is a named function that is defined using the function keyword. It can be called before it is defined in the code due to hoisting.

function myFunction() {
    // code to execute
    return "Hello, World!";
}

2. Function Expression: A function expression is an anonymous function that is assigned to a variable. It cannot be called before it is defined in the code.
 function myFunction = function() {
    // code to execute
    return "Hello, World!";
}


3. Arrow Function: An arrow function is a shorthand syntax for defining functions using the => syntax. It does not have its own this context and is often used for shorter functions or callbacks.

() => {
    // code to execute
    return "Hello, World!";
} */

// first class functions: In JavaScript, functions are first-class citizens, which means that they can be treated like any other value. This means that functions can be assigned to variables, passed as arguments to other functions, and returned from other functions. This allows for a high degree of flexibility and enables powerful programming patterns such as higher-order functions and callbacks.

// higher-order functions: A higher-order function is a function that takes one or more functions as arguments, returns a function, or both. Higher-order functions allow for more abstract and flexible programming patterns, such as map, filter, and reduce.

// closoure: A closure is a function that has access to its own scope, the outer function's scope, and the global scope. Closures are created when a function is defined inside another function, and they allow for data encapsulation and the creation of private variables.

// lexical scoping: Lexical scoping is a way of determining the scope of a variable based on its location in the source code. In JavaScript, variables are scoped to the function in which they are defined, and nested functions have access to variables defined in their outer functions. This means that a variable defined in an outer function can be accessed by an inner function, but not vice versa.

/*     IIFE: An Immediately Invoked Function Expression (IIFE) is a function that is defined and executed immediately after its creation. IIFEs are often used to create a new scope and avoid polluting the global namespace. The syntax for an IIFE is as follows:
    (function() {
        // code to execute
    })(); */

// hoisting in JavaScript: Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.

/* function bmi(weight, height) {
    return weight / (height * height);
} console.log(bmi(55, 1.5).toFixed(2)); // 24.44 */



/* arrays in JavaScript: An array is a data structure that can hold multiple values in a single variable. Arrays are ordered, meaning that the values are stored in a specific order and can be accessed using an index. The syntax for creating an array is as follows:
let myArray = [value1, value2, value3, ...]; */

let arr = [1, 2, 3, 4, 5];

// You can access, modify, and delete elements in an array using their index. The index of an array starts at 0 for the first element. You can access an element by its index, modify it by assigning a new value to that index, and delete it using the splice() method or by setting it to undefined.


/* array methods: JavaScript provides a variety of built-in methods for working with arrays. Some common array methods include:
- push(): Adds one or more elements to the end of an array and returns the new length of the array.
- pop(): Removes the last element from an array and returns that element.
- shift(): Removes the first element from an array and returns that element.
- unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
- splice(): Adds or removes elements from an array at a specified index.
- slice(): Returns a shallow copy of a portion of an array into a new array
 */

/* array distructuring: Array destructuring is a feature in JavaScript that allows you to extract values from an array and assign them to variables in a more concise and readable way. The syntax for array destructuring is as follows:
let myArray = [value1, value2, value3];
let [a, b, c] = myArray;
     */

