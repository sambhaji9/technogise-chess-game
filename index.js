const chalk = require('chalk');
const readline = require('readline');
const Prompt = require("./prompt");
const Message = require("./messages");
const Engine = require("./engine/engine");

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

/**
 * @name showPrompt
 * @description function prompting the question to use and asking for an input
 */
function showPrompt() {
    rl.question(message.promptMessage, line => {
        if (line !== "") {
            var result = new Prompt(line).verifyInputs();
            if (!result.valid) {
                console.log(chalk.red(result.message));
            } else {
                var moves = new Engine(result).getPossibleMoves();
                console.log(moves);
                print(moves, result);
            }
            rl.close();
        } else {
            showPrompt();
        }
    });
}

/**
 * @name print
 * @description function displaying the introduction and game rules
 * @param {array} possible moves for a piece
 */
function print(moves, result) {
    let rowNames = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];

    process.stdout.write(chalk.underline("\nLayout for ".concat(result.piece.toUpperCase().concat(" at ").concat(result.position.toUpperCase()))));

    for (let row = 8; row > 0; row--) {
        console.log("\n");
        for (let col = 0; col < 8; col++) {
            let colPos = 8 - (col + 1),
                cell = rowNames[colPos] + row;
            if (moves.indexOf(cell) > -1) {
                if (cell === result.position.toUpperCase()) {
                    process.stdout.write(" " + chalk.bold.red(cell + " "));
                } else {
                    process.stdout.write(" " + chalk.bold.blue(cell + " "));
                }
            } else {
                process.stdout.write(" " + cell + " ");
            }
        }
    }
}

/**
 * @name showIntroduction
 * @description function displaying the introduction and game rules
 */
function showIntroduction() {
    console.log(chalk.blue.underline.bold(message.title));
    console.log(chalk.green(message.introduction));
}