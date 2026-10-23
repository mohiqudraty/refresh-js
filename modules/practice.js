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
