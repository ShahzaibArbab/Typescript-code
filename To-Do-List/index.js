#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let TodoQuestions = await inquirer.prompt([
        {
            name: "Question",
            type: "input",
            message: "What would you like to add in your Todos?",
        },
        {
            name: "SecondQuestion",
            type: "confirm",
            message: "Would you like to add more in your todos?",
            default: "true"
        }
    ]);
    todos.push(TodoQuestions.Question);
    condition = TodoQuestions.SecondQuestion;
    console.log(todos);
}
;
