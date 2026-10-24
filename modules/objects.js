// JavaScript objects
// Objects store related data as key-value pairs.
const person = {
    name: "Mohi",
    age: 21,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
    },
    greet() {
        return `Hello, my name is ${this.name}.`;
    },
};

// Read properties with dot notation or bracket notation.
console.log("Name:", person.name);
const propertyName = "age";
console.log("Age:", person[propertyName]);
console.log("Greeting:", person.greet());

// Add, update, and delete properties.
person.job = "Developer";
person.age = 22;
console.log("Updated person:", person);

delete person.job;
console.log("Has job property:", "job" in person);

// Optional chaining safely reads a property that may not exist.
console.log("City:", person.address?.city);
console.log("Postal code:", person.address?.postalCode); // undefined
console.log("Missing address:", person.contact?.address); // undefined

// Object.keys, Object.values, and Object.entries inspect own enumerable properties.
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// Destructuring assigns properties to variables.
const { name, age } = person;
console.log("Destructured:", name, age);

// Spread creates a shallow copy; nested objects are still shared references.
const personCopy = { ...person };
personCopy.name = "Alex";
personCopy.address.city = "Chattogram";
console.log("Original name:", person.name); // "Mohi"
console.log("Copied name:", personCopy.name); // "Alex"
console.log("Shared nested city:", person.address.city); // "Chattogram"
