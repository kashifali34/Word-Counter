#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Please Enter your sentence count the word"
    }
]);
let sentence_answer = answer.sentence.trim().split(" ");
console.log(sentence_answer);
console.log(`Your sentence word count is ${sentence_answer.length}`);
