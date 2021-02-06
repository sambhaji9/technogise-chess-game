const Rook = require("./rook");
const Bishop = require("./bishop");
const King = require("./king");

module.exports = class Engine {
    constructor(input) {
        this.input = input;
    }

    /**
     * @name getPossibleMoves
     * @description function predicting the next available moves for pieces
     * @returns {array} array containing next moves
     */
    getPossibleMoves() {
        var moves;
        switch (this.input.piece) {
            case "rook":
                moves = new Rook(this.input.position).getNextMoves();
                break;
            case "king":
                moves = new King(this.input.position).getNextMoves();
                break;
            case "queen":

                break;
            case "horse":

                break;
            case "bishop":
                moves = new Bishop(this.input.position).getNextMoves();
                break;
            case "pawn":

                break;

            default:
                break;
        }
        return moves;
    }
};