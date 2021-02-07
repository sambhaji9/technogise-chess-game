const Cell = require("../cell");

module.exports = class King {
    constructor(position) {
        this.position = position;
        this.cell = new Cell(this.position);
    }

    /**
     * @name getNextMoves
     * @description function predicting the next available moves for a King
     * @returns {array} next moves
     */
    getNextMoves() {
        var moves = [];

        moves.push(this.position.toUpperCase());
        moves = this.getTopMoves(moves);
        moves = this.getBottomMoves(moves);
        moves = this.getSideMoves(moves);

        return moves;
    }

    /**
     * @name getTopMoves
     * @description function predicting the next available moves for a King
     * @param {array} previous moves
     * @returns {array} next moves
     */
    getTopMoves(moves) {
        var cell = this.cell.getCell(),
            colIndex = this.cell.getColIndex(),
            startIndex = colIndex - 1;

        for (let index = 0; index < 3; index++) {
            const element = this.cell.col[startIndex + index];
            var rowIndex = parseInt(cell.row) + 1;
            if (typeof element !== "undefined" && rowIndex <= 8 && rowIndex > 0) {
                moves.push(element + rowIndex);
            }
        }

        return moves;
    }

    /**
     * @name getBottomMoves
     * @description function predicting the next available moves for a King
     * @param {array} previous moves
     * @returns {array} next moves
     */
    getBottomMoves(moves) {
        var cell = this.cell.getCell(),
            colIndex = this.cell.getColIndex(),
            startIndex = colIndex - 1;

        for (let index = 0; index < 3; index++) {
            const element = this.cell.col[startIndex + index];
            var rowIndex = parseInt(cell.row) - 1;
            if (typeof element !== "undefined" && rowIndex <= 8 && rowIndex > 0) {
                moves.push(element + rowIndex);
            }
        }

        return moves;
    }

    /**
     * @name getSideMoves
     * @description function predicting the next available moves for a King
     * @param {array} previous moves
     * @returns {array} next moves
     */
    getSideMoves(moves) {
        var cell = this.cell.getCell(),
            colIndex = this.cell.getColIndex(),
            startIndex = colIndex - 1;

        for (let index = 0; index < 3; index++) {
            const element = this.cell.col[startIndex + index];
            var rowIndex = parseInt(cell.row);
            if (typeof element !== "undefined" && rowIndex <= 8 && rowIndex > 0) {
                moves.push(element + rowIndex);
            }
        }

        return moves;
    }
};