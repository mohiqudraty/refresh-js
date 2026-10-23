// JavaScript data types
// JavaScript is dynamically typed, so a variable can hold values of different types.

// Primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
const firstName = "mohi";
const age = 21;
const largeNumber = 9007199254740993n;
const isLearning = true;
let favoriteColor;
const uniqueId = Symbol("id");
const emptyValue = null;

console.log("String:", firstName, typeof firstName);
console.log("Number:", age, typeof age);
console.log("BigInt:", largeNumber, typeof largeNumber);
console.log("Boolean:", isLearning, typeof isLearning);
console.log("Undefined:", favoriteColor, typeof favoriteColor);
console.log("Symbol:", uniqueId, typeof uniqueId);
console.log("Null:", emptyValue, typeof emptyValue); // typeof null is "object" for historical reasons.

// typeof helps me check most value types. Arrays need Array.isArray().
const person = { name: "mohi", age: 21 };
const colors = ["red", "green", "blue"];
function sayHello() {
    return "Hello!";
}

console.log("Object:", typeof person); // "object"
console.log("Array:", typeof colors, Array.isArray(colors)); // "object", true
console.log("Function:", typeof sayHello); // "function"

// Primitive values are copied. Changing one variable does not change the other.
let originalScore = 10;
let copiedScore = originalScore;
originalScore = 20;
console.log("Original score:", originalScore); // 20
console.log("Copied score:", copiedScore); // 10

// Objects are reference values. Both variables refer to the same object here.
const originalPerson = { name: "mohi" };
const copiedPerson = originalPerson;
originalPerson.name = "mohiuddin";
console.log("Original person's name:", originalPerson.name); // "mohiuddin"
console.log("Copied person's name:", copiedPerson.name); // "mohiuddin"

// A shallow copy makes a new top-level object.
const personCopy = { ...originalPerson };
personCopy.name = "mahmud";
console.log("Original person's name:", originalPerson.name); // "mohiuddin"
console.log("Copied person's name:", personCopy.name); // "mahmud"

// JavaScript can convert values between types. This is called type coercion.
console.log('"5" + 2:', "5" + 2); // "52": + joins strings when one value is a string.
console.log('"5" - 2:', "5" - 2); // 3: - converts the string to a number.
console.log("Number(\"5\") + 2:", Number("5") + 2); // 7: convert explicitly for clearer code.

// Falsy values become false in a boolean check; other values are truthy.
const valuesToCheck = [false, 0, -0, 0n, "", null, undefined, NaN];
for (const value of valuesToCheck) {
    console.log("Falsy value:", value, Boolean(value));
}

console.log("Truthy examples:", Boolean("hello"), Boolean(42), Boolean([]), Boolean({}));
