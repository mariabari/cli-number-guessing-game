#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log("Welcome to number guessing game!");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-5:"
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation you have guessed correct number");
}
else {
    console.log("Sorry! You have guessed wrong number");
}
