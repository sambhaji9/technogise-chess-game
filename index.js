const chalk = require('chalk');
const readline = require('readline');
const Prompt = require("./prompt");
const Message = require("./messages");

var message = new Message();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

showIntroduction();

showPrompt();

rl.on("close", () => {
    console.log("\nClosing game");
    process.exit(0);
});

function showPrompt() {
    rl.question(message.promptMessage, line => {
        if (line !== "") {
            var result = new Prompt(line).verifyInputs();
            if (!result.valid) {
                console.log(chalk.red(result.message));
                rl.close();
            }
        } else {
            showPrompt();
        }
    });
}

function showIntroduction() {
    console.log(chalk.blue.underline.bold(message.title));
    console.log(chalk.green(message.introduction));
}