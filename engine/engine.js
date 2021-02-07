const Rook = require("./rook");
const Bishop = require("./bishop");
const King = require("./king");
const Knight = require("./knight");
const Pawn = require("./pawn");

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
            case "knight":
                moves = new Knight(this.input.position).getNextMoves();
                break;
            case "bishop":
                moves = new Bishop(this.input.position).getNextMoves();
                break;
            case "pawn":
                moves = new Pawn(this.input.position).getNextMoves();
                break;
        }
        return moves;
    }
};