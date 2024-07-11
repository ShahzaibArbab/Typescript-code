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
    console.log("Your value is: ", answer.firstNumber + answer.secondNumber)
}else if (answer.operator === "Subtraction"){
    console.log("Your value is: ", answer.firstNumber - answer.secondNumber)
}else if (answer.operator === "Multiplication"){
    console.log("Your value is: ", answer.firstNumber * answer.secondNumber)
}if (answer.operator === "Division"){
    console.log("Your value is: ", answer.firstNumber / answer.secondNumber)
}if (answer.operator === "Modulus"){
    console.log("Your value is: ", answer.firstNumber % answer.secondNumber)
}