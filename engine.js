const Rook = require("./rook");

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

                break;
            case "queen":

                break;
            case "horse":

                break;
            case "bishop":

                break;
            case "pawn":

                break;

            default:
                break;
        }
        return moves;
    }
};