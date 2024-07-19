#! /usr/bin/env node
// #! it's SHABANG

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number:", type: "number", name: "firstNumber" },
  { message: "Enter your second number:", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division","Modulus"],
  },
]);

// Conditiona statement
if (answer.operator === "Addition"){
    console.log("Your Addition value is: ", answer.firstNumber + answer.secondNumber)
}else if (answer.operator === "Subtraction"){
    console.log("Your Subtraction value is: ", answer.firstNumber - answer.secondNumber)
}else if (answer.operator === "Multiplication"){
    console.log("Your Multiplication value is: ", answer.firstNumber * answer.secondNumber)
}if (answer.operator === "Division"){
    console.log("Your Division value is: ", answer.firstNumber / answer.secondNumber)
}if (answer.operator === "Modulus"){
    console.log("Your Modulus value is: ", answer.firstNumber % answer.secondNumber)
}

console.log(`THANK YOU FOR USING THE mrx-simple-calculator`)