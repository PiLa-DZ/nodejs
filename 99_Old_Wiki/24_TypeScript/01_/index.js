"use strict";
// --------------------------------------------------
// *** TypeScript Basics ***
// *** 1. Basic Types ***
// Primitive types
let isDone = false;
let count = 10;
let name1 = 'TypeScript';
// Arrays
let numbers = [1, 2, 3];
let names = ['Alice', 'Bob'];
// Tuples
let user = ['Alice', 25];
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let color = Color.Green;
// Using the interface
function printUser(user) {
    console.log(`User: ${user.name}`);
}
