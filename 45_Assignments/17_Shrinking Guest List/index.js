/* 17_Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
var Guests = ["Abdul Basit", "Abdul Bari", "Abdul Haseeb"];
//Exercise 16
console.log("Good News i found a bigger dinner table.");
//Add element beginning of the array 
Guests.unshift("Shoaib Solangi");
// Add element middle of the array
Guests.splice(Guests.length / 2, 0, "Muhammad Usman");
// Add elelment end of the array
Guests.push("Shahzaib Solangi");
Guests.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, " You're invited for the dinner.."));
});
// print 17 answer
console.log("Unfortunately, I can invite only two people for dinner.");
while (Guests.length > 2) {
    var removeGuest = Guests.pop();
    console.log("Sorry Dear ".concat(removeGuest, ", I can't invite you to dinner.,"));
}
Guests.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, " You're invited for the dinner.."));
});
Guests.splice(0, Guests.length); //Remove all array print empity list.
console.log(Guests);
