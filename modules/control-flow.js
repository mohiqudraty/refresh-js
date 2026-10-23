// JavaScript control flow
// Control flow decides which statements run and how often they run.

// if, else if, and else choose a path based on a condition.
const score = 82;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Keep practicing");
}

// switch is useful when one value has several exact matches.
const role = "editor";

switch (role) {
    case "admin":
        console.log("Full access");
        break;
    case "editor":
        console.log("Can edit content");
        break;
    case "reader":
        console.log("Can read content");
        break;
    default:
        console.log("Unknown role");
}

// A for loop repeats a block while its condition is true.
for (let number = 1; number <= 5; number++) {
    console.log("For loop:", number);
}

// A while loop checks its condition before each repetition.
let countdown = 3;
while (countdown > 0) {
    console.log("Countdown:", countdown);
    countdown--;
}

// A do...while loop runs its block at least once before checking the condition.
let attempts = 0;
do {
    console.log("Attempt:", attempts + 1);
    attempts++;
} while (attempts < 1);

// continue skips the current repetition; break exits the loop.
for (const number of [1, 2, 3, 4, 5]) {
    if (number === 2) {
        continue;
    }

    if (number === 5) {
        break;
    }

    console.log("Loop control:", number);
}

// An early return exits a function as soon as its result is known.
function getShippingCost(subtotal) {
    if (subtotal >= 50) {
        return 0;
    }

    return 5.99;
}

console.log("Shipping for $35:", getShippingCost(35));
console.log("Shipping for $60:", getShippingCost(60));