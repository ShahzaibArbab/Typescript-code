// 23_Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Single (=) use for assigning.
var car = 'subaru';
// Test 1
// Double (==) use for comparision.
console.log("Test 1: Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2 including string upperCase() property
// triple (===) use for compare Data type or value both comparision. 
console.log("Test 2: Is car === 'SUBARU'? I predict True.");
console.log(car.toUpperCase() === 'SUBARU');
// Test 3
// ! Not Equal to sign
console.log("Test 3: Is car != 'SUBARU'? I predict True.");
console.log(car != 'SUBARU');
// Test 4
console.log("Test 4:Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru');
// Test 5
console.log("Test 5: Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru');
//False statements
console.log("\nFalse statements 6/10\n");
// Test 6
// Double (==) use for comparision.
console.log("Test 6: Is car == 'Honda'? I predict false.");
console.log(car == 'Honda');
// Test 7 including string upperCase() property
// triple (===) use for compare Data type or value both comparision. 
console.log("Test 7: Is car === 'subaru'? I predict false.");
console.log(car.toUpperCase() === 'subaru');
// Test 8
// ! Not Equal to sign
console.log("Test 8: Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');
// Test 9
console.log("Test 9:Is car >= 'subaru'? I predict false.");
console.log(car > 'subaru');
// Test 10
console.log("Test 10: Is car <= 'subaru'? I predict false.");
console.log(car < 'subaru');
