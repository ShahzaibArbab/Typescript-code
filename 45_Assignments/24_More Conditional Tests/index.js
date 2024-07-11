"use strict";
// 24_More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Equality with strings
let apple = "apple";
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log(apple == "Apple"); // false
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical tests
console.log("Numerical </> tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
console.log("Numerical >= or <= tests:");
console.log(5 >= 5); // True
console.log(2 <= 1); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes('mango')); // True
