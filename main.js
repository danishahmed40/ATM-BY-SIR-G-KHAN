import inquirer from "inquirer";
let DefaultBalance = 10000;
let DefaultPin = "12345";
do {
    let UserAnswer = await inquirer.prompt([
        {
            name: "UserPin",
            message: "Enter your ATM pin",
            type: "string",
        },
    ]);
    console.log(`Your Pin is ${UserAnswer.UserPin}`);
    if (UserAnswer.UserPin == DefaultPin) {
        console.log("Congrates ! Machine has activated your account");
        let UserOperations = await inquirer.prompt([
            {
                name: "operation",
                message: "Enter the choice of operation",
                type: "list",
                choices: ["withdraw", "deposit", "balance check", "Fast-Cash"],
            },
        ]);
        //balanec check
        if (UserOperations.operation == "balance check") {
            console.log(`your balance is ${DefaultBalance}`);
        }
        //withdraw section
        else if (UserOperations.operation == "withdraw") {
            let UserAmount = await inquirer.prompt([
                {
                    name: "Amount",
                    message: "Enter the amount to withdraw",
                    type: `number`
                }
            ]);
            if (DefaultBalance >= UserAmount.Amount) {
                DefaultBalance = DefaultBalance - UserAmount.Amount;
                console.log("Your new balance is " + DefaultBalance);
            }
            else {
                console.log("you have insufficient balance, plz! enter the proper amount");
            }
        }
        //deposit section
        else if (UserOperations.operation == "deposit") {
            let UserAmount = await inquirer.prompt([
                {
                    name: "Amount",
                    message: "Enter the amount to deposit",
                    type: `number`
                }
            ]);
            DefaultBalance = DefaultBalance + UserAmount.Amount;
            console.log("Your new balance is " + DefaultBalance);
        }
        //fast cash
        else if (UserOperations.operation == "Fast-Cash") {
            let UserAmount = await inquirer.prompt([
                {
                    name: "Amount",
                    message: "select the amount to withdraw by given list",
                    type: "list",
                    choices: ["1000", "5000", "10000", "20000"]
                }
            ]);
            if (DefaultBalance >= UserAmount.Amount) {
                DefaultBalance = DefaultBalance - UserAmount.Amount;
                console.log("Your new balance is " + DefaultBalance);
            }
            else {
                console.log("you have insufficient balance, plz! enter the proper amount");
            }
        }
        //wrong pin else
    }
    else {
        console.log("Plz enter the correct pin again....");
    }
    //do while for re run.
    var RunAgain = await inquirer.prompt([
        {
            name: "Run",
            message: "do you want to run the code press Y/N ? ",
            type: "string",
        },
    ]);
} while (RunAgain.Run === "y" || RunAgain.Run === "Y");
