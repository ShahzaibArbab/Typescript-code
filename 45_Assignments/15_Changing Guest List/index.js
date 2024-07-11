/*## 15_Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

    • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

    • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

    • Print a second set of invitation messages, one for each person who is still in your list.
*/
var guestList = ["Shahbaz Ali", "Noor muhammad", "Sabir Ali"];
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, " you are invited for the dinner.."));
});
// Who can't make it
var unableToAttend = guestList[2];
console.log("Dear ".concat(unableToAttend, " can't make it dinner.."));
//  Replace the unavailable guest with a new guest
var newGuest = "Khair Muhammad";
guestList[guestList.indexOf(unableToAttend)] = newGuest;
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, " you are invited for the dinner.."));
});
