/*
## 16_More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

*/
//Exercise 15
var Guest = ["Shoaib", "Shuhab", "Sabir"];
Guest.forEach(function (invitation) {
    console.log("Dear ".concat(invitation, " you are invited for the dinner.\n"));
});
//unable to attend
var unableToAttend = Guest[2];
console.log("Dear ".concat(unableToAttend, " can't make it dinner.\n"));
//New guest
var NewGuest = "Basit";
Guest[Guest.indexOf(unableToAttend)] = NewGuest;
//forEach loop
Guest.forEach(function (invitation) {
    console.log("Dear ".concat(invitation, " you are invited for the dinner.\n"));
});
//Start exercise 16 here
console.log("I have a Good News for you we found a bigger dinner table three more people we invited for the dinner..\n");
Guest.unshift("Haseeb");
Guest.splice(Guest.length / 2, 0, "Fayaz");
Guest.push("Bari");
Guest.forEach(function (invitation) {
    console.log("Dear ".concat(invitation, " you are invited for the dinner.\n"));
});
