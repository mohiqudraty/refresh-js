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







// data type and data system

// primitive data types: string, number, boolean, null, undefined, symbol

// reference data types: object, array, function 