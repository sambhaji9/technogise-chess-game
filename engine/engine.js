const Rook = require("./rook");
const Bishop = require("./bishop");
const King = require("./king");
const Knight = require("./knight");
const Pawn = require("./pawn");
const Queen = require("./queen");

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
        switch (this.input.piece.toLowerCase()) {
            case "rook":
                moves = new Rook(this.input.position).getNextMoves();
                break;
            case "king":
                moves = new King(this.input.position).getNextMoves();
                break;
            case "queen":
                moves = new Queen(this.input.position).getNextMoves();
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