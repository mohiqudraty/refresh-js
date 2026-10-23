// Variables
// A variable stores a value that I can use later.

// Declaration creates the variable. It has the value undefined until I assign one.
let firstName;
console.log(firstName); // undefined

// Assignment gives the declared variable a value.
firstName = "mohi";
console.log(firstName);

// I can declare and initialize a variable on the same line.
let age = 21;
const luckyNumber = 33;
console.log(age, luckyNumber);

// var can be redeclared and reassigned.
var userName = "mohi";
var userName = "mohiuddin";
console.log(userName);

// let can be reassigned, but not redeclared in the same scope.
let score = 11;
score = 72;
console.log(score);
// let score = 33; // SyntaxError: score is already declared.

// const must be initialized and cannot be reassigned.
const nickname = "mahmud";
console.log(nickname);
// nickname = "qudraty"; // TypeError: const cannot be reassigned.

// Hoisting: the var declaration is available before this line, with value undefined.
console.log(city); // undefined
var city = "qudraty";
console.log(city);

// let and const cannot be used before their declaration (the temporal dead zone).
{
    try {
        console.log(futureName);
    } catch (error) {
        console.log(error.name); // ReferenceError
    }

    let futureName = "mahmud";
    console.log(futureName);
}

// Scope decides where I can use a variable.
function practiceScope() {
    if (true) {
        var blockVar = "mohiuddin";
        let blockLet = "mohi";
        console.log("Inside the block:", blockVar, blockLet);
    }

    // var is function-scoped, so it is still available here.
    console.log("Outside the block:", blockVar);

    // let is block-scoped, so it is not available here.
    try {
        console.log(blockLet);
    } catch (error) {
        console.log(error.name); // ReferenceError
    }
}

practiceScope();