/*
Variables
 - Variables in JS can be declared using var, let, and const.
 - JS is dynamically typed, so variable types are determined at
   runtime without explicit type definitions.

Before ES6 (2015):
 - Variables were declared only with var.
 - var is function scoped or globally scoped, which caused issues
   like hoisting confusion and global namespace pollution.

ES6 Introduction:
 - let and const were introduced to provide safer alternatives
   for declaring variables.
 - let and const are block scoped (limited to { } blocks).
*/

// Variable declaration
var message = "Hi, my name is Swapnil";

// Non-const variable
let b = 20;

// Constant variable (cannot be reassigned)
const PI = 3.14;

console.log(message);
console.log(b);
console.log(PI);

/*
Rules for Naming Variables
 - Variable names must begin with a letter, underscore (_), or dollar sign ($).
 - Subsequent characters can be letters, digits, underscores, or dollar signs.
 - Variable names are case-sensitive (age and Age are different variables).
 - Reserved keywords cannot be used as variable names.
*/

let userName = "Swapnil";       // valid
// let ]username = "user123"; // invalid
let _age;                       // valid
// let *email;                // invalid
let $car;                       // valid

// var can be redeclared in the same scope
var s = 20;
var s = 10;

console.log("s:", s);

// let and const cannot be redeclared in the same scope

// const with objects and arrays
const obj = { a: 10 };
obj.a = 20;                 // allowed (object mutation)
// obj = { b: 50 };         // not allowed (reassignment)

const arr = [10, 20, 30];
arr[2] = 40;               // allowed (array mutation)
// arr = [20, 60];         // not allowed (reassignment)

console.log(obj);
console.log(arr);
