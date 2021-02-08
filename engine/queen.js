const Cell = require("../cell");
const Bishop = require("./bishop");
const Rook = require("./rook");

module.exports = class Queen {
    constructor(position) {
        this.position = position;
        this.cell = new Cell(this.position);
        this.rook = new Rook(this.position);
        this.bishop = new Bishop(this.position);
    }

    /**
     * @name getNextMoves
     * @description function predicting the next available moves for a Queen
     * @returns {array} next moves
     */
    getNextMoves() {
        var rookMoves = [],
            bishopMoves = [],
            moves = [],
            set;
        
        rookMoves = this.rook.getNextMoves();
        bishopMoves = this.bishop.getNextMoves();

        moves = rookMoves.concat(bishopMoves);
        set = new Set(moves);

        moves = Array.from(set);
        
        return moves;
    }
};