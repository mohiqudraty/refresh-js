// Loop examples: run this file with `node modules/loops.js`.

// Use a for loop when the number of repetitions is known.
for (let number = 1; number <= 5; number++) {
    console.log("For loop:", number);
}

// Use a while loop when repetition depends on a condition.
let countdown = 3;
while (countdown > 0) {
    console.log("Countdown:", countdown);
    countdown--;
}

// A do...while loop always runs at least once.
let attempts = 0;
do {
    console.log("Attempt:", attempts + 1);
    attempts++;
} while (attempts < 1);

// Use for...of to visit each value in an iterable.
for (const fruit of ["apple", "banana", "cherry"]) {
    console.log("Fruit:", fruit);
}

// continue skips a value, and break exits the loop.
for (const number of [1, 2, 3, 4, 5]) {
    if (number % 2 !== 0) {
        continue;
    }

    if (number > 4) {
        break;
    }

    console.log("Even number:", number);
}
