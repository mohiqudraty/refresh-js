// JavaScript arrays
// Arrays store ordered lists of values. Their indexes start at 0.
const fruits = ["apple", "banana", "cherry"];

console.log("First fruit:", fruits[0]);
console.log("Number of fruits:", fruits.length);
console.log("Is an array:", Array.isArray(fruits));

// Update an item by assigning a value to its index.
fruits[1] = "blueberry";
console.log("Updated fruits:", fruits);

// push and pop add and remove items at the end of an array.
fruits.push("orange");
console.log("After push:", fruits);
const lastFruit = fruits.pop();
console.log("Removed:", lastFruit);

// Use for...of to visit each item.
for (const fruit of fruits) {
    console.log("Fruit:", fruit);
}

// map creates a new array by transforming every item.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
console.log("Doubled:", doubledNumbers);

// filter creates a new array containing items that match a condition.
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Even numbers:", evenNumbers);

// find returns the first matching item; includes checks whether an item exists.
const firstNumberOverThree = numbers.find((number) => number > 3);
console.log("First number over 3:", firstNumberOverThree);
console.log("Includes 3:", numbers.includes(3));

// reduce combines an array into one value.
const total = numbers.reduce((sum, number) => sum + number, 0);
console.log("Total:", total);

// Destructuring copies selected items into variables.
const [firstNumber, secondNumber] = numbers;
console.log("First two numbers:", firstNumber, secondNumber);

// Spread creates a shallow copy so this addition does not change numbers.
const moreNumbers = [...numbers, 6];
console.log("Original numbers:", numbers);
console.log("With an extra number:", moreNumbers);
