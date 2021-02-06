const Message = require("./messages");
const Cell = require("./cell");

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

    /**
     * @name verifyInputs
     * @description function verifying the inputs from the user
     * @returns {object} this.result object
     */
    verifyInputs() {
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
            if (!validPosition) {
                this.result.message = this.result.message.concat("\n").concat(this.message.invalidPosition);
            }
            if (validName && validPosition) {
                this.result.valid = true;
                this.result.piece = splitter[0];
                this.result.position = splitter[1];
            }
        }
        return this.result;
    }

    /**
     * @name verifyPiece
     * @description function verifying the inputs from the user
     * @param {string} piece name
     * @returns {boolean} true or false
     */
    verifyPiece(pieceName) {
        let pieceNames = ["king", "queen", "bishop", "knight", "rook", "pawn"],
            valid = false;
        if (pieceNames.indexOf(pieceName.toLowerCase()) > -1) {
            valid = true;
        }
        return valid;
    }

    /**
     * @name verifyPosition
     * @description function verifying the inputs from the user
     * @param {string} position
     * @returns {boolean} true or false
     */
    verifyPosition(position) {
        let valid = false;
        var cell = new Cell(position).getCell();
        var charCode = cell.col.charCodeAt(0);
        if (charCode >= 97 && charCode <= 104 && cell.row >= 1 && cell.row <= 8) {
            valid = true;
        }
        return valid;
    }
};