/*
12_Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
*/
var Greet = ["Shoaib", "Shuhab", "Ali"];
// for loop
for (var _i = 0, Greet_1 = Greet; _i < Greet_1.length; _i++) {
    var Greets = Greet_1[_i];
    console.log("Nice to meet you Mr ".concat(Greets, ".."));
}
