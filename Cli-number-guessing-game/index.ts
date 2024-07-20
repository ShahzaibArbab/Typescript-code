#!/usr/bin/env node

import inquirer from "inquirer";

const randomNum=Math.floor(Math.random() * 6 +1)

console.log(`WELCOME TO DICE NUMBER GUESSING GAME`);


const answers = await inquirer.prompt([{
name:"userGuessingnumber",
type:"number",

message:"Please Enter Your Guessing Dice Number"
}])


if(answers.userGuessingnumber>randomNum){
    console.log("Your Guess is too high..༼ つ ◕_◕ ༽つ");
    
}else if(answers.userGuessingnumber<randomNum){
    console.log("Your Guess is too low..(●'◡'●)");
}else if(answers.userGuessingnumber === randomNum){
    console.log("Congratulations! your Guess is Correct..(⌐■_■)");
}else{
    console.log("Other Characters are not allowed¯\_(ツ)_/¯");
    
}