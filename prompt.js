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
                this.result.piece = validName;
                this.result.position = validPosition;
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
        let pieceNames = ["king", "queen", "bishop", "horse", "rook", "pawn"],
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
        let splitter = position.split("");
        var charCode = splitter[0].charCodeAt(0);
        if (charCode >= 97 && charCode <= 104 && splitter[1] >= 1 && splitter[1] <= 8) {
            valid = true;
        }
        return valid;
    }
};