#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


let condition = true;
while (condition) {
  // computer will generate a random number
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  //user input for guessing number
  const answer = await inquirer.prompt([
    {
      name: "userGuessNumber",
      type: "number",
      message: "Please guess a number (1 to 6) ",
    },
  ]);
  if (answer.userGuessNumber === randomNumber) {
    console.log(
      chalk.bgBlueBright.black.underline(
        "congratulation! you guessed right number"
      )
    );
  } else {
    console.log(chalk.red.bold.underline("you guessed a wrong number"));
  }

  let con = await inquirer.prompt({
    name: "continue",
    type: "confirm",
    message: "Do you wnat to continue",
    default: "false",
  });
  condition = con.continue;
  console.log(condition);
}
