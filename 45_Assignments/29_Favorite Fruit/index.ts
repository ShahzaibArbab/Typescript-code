// ## 29_Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

if (favorite_fruits.includes("bananas")) {
  console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
  console.log("You really like apples!");
}
if (favorite_fruits.includes("cherries")) {
  console.log("You really like cherries!");
}
if (favorite_fruits.unshift("Mangos")) {
  console.log("You really like Mangos!");
}
if (favorite_fruits.push("Orange")) {
  console.log("You really like Orange!");
}
