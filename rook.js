const Cell = require("./cell");

module.exports = class Rook {
    constructor(position) {
        this.position = position;
        this.cell = new Cell(this.position).getCell();
    }

    /**
     * @name getNextMoves
     * @description function predicting the next available moves for a Rook
     * @returns {array} array containing next moves
     */
    getNextMoves() {
        var row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        var moves = [];
        for (let index = 0; index < 8; index++) {
            moves.push((this.cell.row.toUpperCase() + (index + 1)));
        }

        for (let index = 0; index < 8; index++) {
            moves.push(row[index] + this.cell.col);
        }
        return moves;
    }
};