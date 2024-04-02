#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin:",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "quick cash"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount:",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        if (amountAns.amount > myBalance.toLocaleString()) {
            console.log("Insufficient Balance");
        }
        else {
            console.log("Your remaining balance is:" + myBalance);
        }
    }
    else {
        operationAns.operation === "check balance";
        console.log("Your balance is: " + myBalance);
    }
    {
        if (operationAns.operation === "quick cash") {
            let amount = await inquirer.prompt([
                {
                    name: "cash",
                    message: "select one option",
                    type: "list",
                    choices: ["2500", "5000", "7500"],
                },
            ]);
            if (amount.cash === "2500")
                myBalance -= amount.cash;
            if (amount.cash === "5000")
                myBalance -= amount.cash;
            if (amount.cash === "7500")
                myBalance -= amount.cash;
            console.log("Your remaining balance is:" + myBalance);
        }
    }
}
else {
    console.log("Incorrect pin number");
}
