// 25_Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that  player just earnethed 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "Green";
alien_color = "Yellow";
alien_color = "Red";
// Version that passes:
if (alien_color === "Red") {
    console.log("you just earnethed 5 points.");
}
else {
    console.log("You lose 2 points");
}
// Version that fails (no output):
if (alien_color === "Yellow") {
    // No output because the condition is false
}
else {
}