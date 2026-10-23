// JavaScript operators
// Operators let me calculate values, compare them, and combine conditions.

// Arithmetic operators
const firstNumber = 12;
const secondNumber = 5;
console.log("Addition:", firstNumber + secondNumber); // 17
console.log("Subtraction:", firstNumber - secondNumber); // 7
console.log("Multiplication:", firstNumber * secondNumber); // 60
console.log("Division:", firstNumber / secondNumber); // 2.4
console.log("Remainder:", firstNumber % secondNumber); // 2
console.log("Exponent:", secondNumber ** 2); // 25

// Assignment operators update a variable's value.
let total = 10;
total += 5; // Same as: total = total + 5
console.log("After +=:", total); // 15
total *= 2; // Same as: total = total * 2
console.log("After *=:", total); // 30

// Comparison operators return true or false.
console.log("Is 12 greater than 5?", firstNumber > secondNumber); // true
console.log("Is 12 equal to 12?", firstNumber === 12); // true
console.log('Is 12 equal to "12"?', firstNumber === "12"); // false: strict equality checks type too.
console.log("Is 12 not equal to 5?", firstNumber !== secondNumber); // true

// Logical operators combine or reverse Boolean conditions.
const hasTicket = true;
const isOldEnough = false;
console.log("Can enter?", hasTicket && isOldEnough); // false: both conditions must be true.
console.log("Has a ticket or is old enough?", hasTicket || isOldEnough); // true: either condition can be true.
console.log("Does not have a ticket?", !hasTicket); // false

// Nullish coalescing uses the default only when the value is null or undefined.
const providedName = "mohi";
const displayName = providedName ?? "Guest";
console.log("Display name:", displayName); // "mohi"

// The conditional (ternary) operator chooses one of two values.
const score = 76;
const result = score >= 50 ? "Pass" : "Try again";
console.log("Result:", result); // "Pass"




