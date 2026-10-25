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

/* objects in JavaScript: An object is a data structure that can hold multiple values in the form of key-value pairs. Objects are unordered, meaning that the values are not stored in a specific order and can be accessed using their keys. The syntax for creating an object is as follows:
let myObject = {
    key1: value1,
    key2: value2,
    key3: value3
}; */

/* object access: You can access, modify, and delete properties in an object using their keys. You can access a property by its key using dot notation or bracket notation, modify it by assigning a new value to that key, and delete it using the delete operator. */

/* key in object: The in operator is used to check if a property exists in an object. It returns true if the property exists and false if it does not. The syntax for using the in operator is as follows:
if ("key" in myObject) {
    // code to execute if the property exists
}  */

/* optional chaining: Optional chaining is a feature in JavaScript that allows you to access properties of an object without having to check if the object or its properties are null or undefined. It uses the ?. operator to safely access nested properties. If any part of the chain is null or undefined, the expression will short-circuit and return undefined instead of throwing an error. The syntax for optional chaining is as follows:
let myObject = {
key1: {
    nestedKey: "value"
}
}; */

/* dot vs bracket notation: In JavaScript, you can access object properties using either dot notation or bracket notation. Dot notation is used when you know the name of the property you want to access, while bracket notation is used when the property name is stored in a variable or is not a valid identifier. The syntax for dot notation is as follows:
let myObject = {
    key1: "value1",
    key2: "value2"
}; */

// DOM manipulation in JavaScript: The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of nodes, where each node corresponds to an element, attribute, or piece of text in the document. JavaScript can be used to manipulate the DOM by selecting elements, modifying their content and attributes, and responding to user events. Common methods for DOM manipulation include getElementById(), querySelector(), createElement(), appendChild(), and addEventListener().

/* element selectors in JavaScript: JavaScript provides several methods for selecting elements from the DOM.Some common element selectors include:
- getElementById(): Selects an element by its ID.
- getElementsByClassName(): Selects all elements with a specific class name.
- getElementsByTagName(): Selects all elements with a specific tag name.
- querySelector(): Selects the first element that matches a CSS selector.
- querySelectorAll(): Selects all elements that match a CSS selector.

 */

/* text/content access: In JavaScript, you can access the text content of an element using the textContent property. This property returns the text content of an element and its descendants, excluding any HTML tags. You can also set the text content of an element by assigning a new value to the textContent property. The syntax for accessing and modifying the text content of an element is as follows:
let myElement = document.getElementById("myElement");
let text = myElement.textContent;
myElement.textContent = "New text content"; */

// innerText  vs innerHTML: innerText and innerHTML are both properties of DOM elements in JavaScript that allow you to get or set the content of an element. The main difference between them is that innerText returns the visible text content of an element, while innerHTML returns the HTML content of an element, including any nested elements and their attributes. This means that innerHTML can be used to add or modify HTML elements within an element, while innerText can only be used to modify the text content of an element.

// textcontent vs innerText: textContent and innerText are both properties of DOM elements in JavaScript that allow you to get or set the text content of an element. The main difference between them is that textContent returns the text content of an element, including any hidden text, while innerText returns the visible text content of an element, excluding any hidden text. This means that textContent can be used to get or set the text content of an element regardless of its visibility, while innerText can only be used to get or set the visible text content of an element.

/* atribute manipulation in JavaScript: In JavaScript, you can manipulate the attributes of an element using the setAttribute() and getAttribute() methods. The setAttribute() method allows you to set the value of an attribute for an element, while the getAttribute() method allows you to retrieve the value of an attribute for an element. You can also remove an attribute from an element using the removeAttribute() method. The syntax for manipulating attributes in JavaScript is as follows:
let myElement = document.getElementById("myElement");
myElement.setAttribute("class", "newClass");

 */

// atribute vs property: In JavaScript, an attribute is a value that is defined in the HTML markup of an element, while a property is a value that is defined in the DOM object of an element. Attributes are static and do not change unless they are modified in the HTML markup, while properties are dynamic and can change based on user interactions or other events. For example, the "value" attribute of an input element defines its initial value, while the "value" property reflects its current value as the user types into it.

// dynamic dom manipulation: Dynamic DOM manipulation refers to the ability to modify the structure, content, and attributes of a web page's Document Object Model (DOM) in real-time using JavaScript. This allows developers to create interactive and responsive web applications that can update the user interface without requiring a full page reload. Common techniques for dynamic DOM manipulation include adding or removing elements, changing element styles, updating text content, and responding to user events such as clicks or form submissions.

// createElement, appendChild, removeChild, replaceChild, insertBefore, cloneNode, setAttribute, getAttribute, removeAttribute, classList.add, classList.remove, classList.toggle, classList.contains, innerHTML, textContent, innerText, querySelector, querySelectorAll, getElementById, getElementsByClassName, getElementsByTagName

// style manipulation in JavaScript: In JavaScript, you can manipulate the styles of an element using the style property. The style property allows you to set or get the inline styles of an element, which are defined directly on the element's HTML tag. You can also use CSS classes to apply styles to elements and manipulate them using the classList property. Common methods for manipulating styles in JavaScript include setting individual style properties, adding or removing CSS classes, and toggling classes on and off.

// events and event handling in JavaScript: In JavaScript, events are actions or occurrences that happen in the browser, such as a user clicking a button, submitting a form, or moving the mouse. Event handling refers to the process of responding to these events by executing specific code when they occur. You can attach event listeners to elements using the addEventListener() method, which allows you to specify the type of event to listen for and the function to execute when that event occurs. Common event types include click, submit, mouseover, keydown, and many others.

/* addEventListener("click", function() {
    // code to execute when the element is clicked
}
 */

/* removeEventListener("click", function() {
    // code to execute when the event listener is removed
} */

// common event types in JavaScript include click, dblclick, mouseover, mouseout, keydown, keyup, submit, change, input, focus, blur, load, resize, scroll, and many others. Each event type corresponds to a specific user action or browser behavior that can be detected and responded to using JavaScript event handling techniques.

// events name: Some common event names in JavaScript include:
// - click , dblclick: Triggered when an element is clicked
// - submit: Triggered when a form is submitted
// - mouseover: Triggered when the mouse pointer moves over an element
// - keydown: Triggered when a key is pressed down
// - load: Triggered when the page has finished loading
// - resize: Triggered when the browser window is resized
// - scroll: Triggered when the user scrolls the page

// event object: The event object is an object that is automatically passed to event handler functions in JavaScript. It contains information about the event that occurred, such as the type of event, the target element, and any additional data associated with the event. The event object can be used to access properties and methods related to the event, allowing developers to respond to user interactions and browser events in a more dynamic and interactive way.

// event bubbling and capturing: Event bubbling and capturing are two phases of event propagation in the DOM. In the capturing phase, the event starts from the root of the DOM tree and propagates down to the target element. In the bubbling phase, the event starts from the target element and propagates up to the root of the DOM tree. By default, events bubble up through the DOM, but you can also use event capturing by specifying the third parameter of addEventListener() as true. This allows you to control how events are handled and can be useful for managing complex event interactions in your web applications.

// forms and form validation in JavaScript: Forms are a common feature of web applications that allow users to input data and submit it to a server for processing. Form validation is the process of checking user input to ensure that it meets certain criteria before it is submitted. In JavaScript, you can use event listeners to detect when a form is submitted and validate the input fields using conditional statements and regular expressions. Common validation techniques include checking for required fields, validating email addresses and phone numbers, and ensuring that passwords meet certain complexity requirements.

// timers and intervals in JavaScript: Timers and intervals are features in JavaScript that allow you to execute code after a certain amount of time has passed or repeatedly at specified intervals. The setTimeout() function is used to execute code after a specified delay, while the setInterval() function is used to execute code repeatedly at specified intervals. You can also use the clearTimeout() and clearInterval() functions to stop the execution of timers and intervals. These features are commonly used for creating animations, updating user interfaces, and implementing time-based functionality in web applications.

/* let counter = 10;

let intervalId = setInterval(() => {
  console.log(counter);
  counter--;
  if (counter < 0) {
    clearInterval(intervalId);
  }
}, 1000); */

// web storage in JavaScript: Web storage is a feature in JavaScript that allows you to store data in the browser's local storage or session storage. Local storage allows you to store data that persists even after the browser is closed, while session storage allows you to store data that is cleared when the browser session ends. You can use the localStorage and sessionStorage objects to set, get, and remove data from web storage. This feature is commonly used for storing user preferences, authentication tokens, and other data that needs to persist across page reloads or sessions.

// cookies in JavaScript: Cookies are small pieces of data that are stored in the user's browser and sent to the server with each request. They can be used to store user preferences, authentication tokens, and other data that needs to persist across page reloads or sessions. In JavaScript, you can use the document.cookie property to set, get, and delete cookies. However, cookies have limitations on size and security, and they are sent with every HTTP request, which can impact performance. For more secure and efficient storage, web storage (localStorage and sessionStorage) is often preferred over cookies.

/* let myObject = {
  name: "mohi",
  age: 25,
  city: "Dhaka",
  country: "Bangladesh",
};

localStorage.setItem("myObject", JSON.stringify(myObject));
let retrievedObject = JSON.parse(localStorage.getItem("myObject"));
console.log(retrievedObject);

localStorage.getItem("myObject"); // This will retrieve the object from local storage and return it as a string. You can then parse it back into an object using JSON.parse().

localStorage.removeItem("myObject");
 */

/* sessionStorage.setItem("myObject", JSON.stringify(myObject));
let retrievedObject = JSON.parse(sessionStorage.getItem("myObject"));
console.log(retrievedObject);

sessionStorage.clear();
 */

// document.cookie = "myCookie=cookieValue; expires=7; path=/"; this will set a cookie named "myCookie" with the value "cookieValue" that expires in 7 days and is accessible from the root path of the website. You can also set additional attributes such as domain, secure, and HttpOnly to control the behavior of the cookie. To retrieve the value of a cookie, you can use document.cookie and parse the string to extract the desired value. To delete a cookie, you can set its expiration date to a past date.
