const Message = require("./messages");

module.exports = class Prompt {
    constructor(input) {
        this.input = input;
        this.result = {
            piece: "",
            position: "",
            valid: false,
            message: ""
        };
        this.message = new Message();
    }

    verifyInputs() {
        console.log(this.input);
        var splitter = this.input.split(" "),
            validName,
            validPosition;
        if (splitter.length === 1) {
            this.result.message = this.message.emptyPosition;
        } else if (splitter.length > 1) {
            validName = this.verifyPiece(splitter[0]);
            validPosition = this.verifyPosition(splitter[1]);
            if (!validName) {
                this.result.message = this.result.message.concat("\n").concat(this.message.invalidPiece);
            }
        }
        return this.result;
    }

    verifyPiece(pieceName) {
        let pieceNames = ["King", "Queen", "Bishop", "Horse", "Rook", "Pawn"],
            valid = false;
        if (pieceNames.indexOf(pieceName) > -1) {
            valid = true;
        }
        return valid;
    }
};