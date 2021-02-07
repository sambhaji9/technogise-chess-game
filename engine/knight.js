const Cell = require("../cell");

module.exports = class Knight {
    constructor(position) {
        this.position = position;
        this.cell = new Cell(this.position);
    }

    /**
     * @name getNextMoves
     * @description function predicting the next available moves for a Knight
     * @returns {array} next moves
     */
    getNextMoves() {
        var moves = [],
            col = this.cell.getColIndex(),
            cell = this.cell.getCell();

        moves.push(this.position.toUpperCase());
        moves = this.getLeftMoves(moves, col, cell);
        moves = this.getRightMoves(moves, col, cell);
        moves = this.getLeftTopBottomMoves(moves, col, cell);
        moves = this.getRightTopBottomMoves(moves, col, cell);

        return moves;
    }

    /**
     * @name getLeftMoves
     * @description function predicting the next available moves on left side for a Knight
     * @param {array} moves, previous moves
     * @param {number} col, column index
     * @param {object} cell, cell object
     * @returns {array} next moves
     */
    getLeftMoves(moves, col, cell) {
        if (col > 1) {
            const element = this.cell.col[col - 2];

            var leftIndex = parseInt(cell.row) + 1;
            if (leftIndex <= 8) {
                moves.push(element + leftIndex);
            }

            var bottomIndex = parseInt(cell.row) - 1;
            if (bottomIndex > 0) {
                moves.push(element + bottomIndex);
            }
        }

        return moves;
    }

    /**
     * @name getRightMoves
     * @description function predicting the next available moves on right side for a Knight
     * @param {array} moves, previous moves
     * @param {number} col, column index
     * @param {object} cell, cell object
     * @returns {array} next moves
     */
    getRightMoves(moves, col, cell) {
        if (col < 6) {
            const element = this.cell.col[col + 2];

            var topIndex = parseInt(cell.row) + 1;
            if (topIndex <= 8) {
                moves.push(element + topIndex);
            }

            var bottomIndex = parseInt(cell.row) - 1;
            if (bottomIndex > 0) {
                moves.push(element + bottomIndex);
            }
        }
        return moves;
    }

    /**
     * @name getLeftTopBottomMoves
     * @description function predicting the next available moves on top left side for a Knight
     * @param {array} moves, previous moves
     * @param {number} col, column index
     * @param {object} cell, cell object
     * @returns {array} next moves
     */
    getLeftTopBottomMoves(moves, col, cell) {
        if (col > 0) {
            const element = this.cell.col[col - 1];

            var topIndex = parseInt(cell.row) + 2;
            if (topIndex <= 8) {
                moves.push(element + topIndex);
            }

            var bottomIndex = parseInt(cell.row) - 2;
            if (bottomIndex > 0) {
                moves.push(element + bottomIndex);
            }
        }
        return moves;
    }

    /**
     * @name getRightTopBottomMoves
     * @description function predicting the next available moves on top right side for a Knight
     * @param {array} moves, previous moves
     * @param {number} col, column index
     * @param {object} cell, cell object
     * @returns {array} next moves
     */
    getRightTopBottomMoves(moves, col, cell) {
        if (col < 7) {
            const element = this.cell.col[col + 1];

            var topIndex = parseInt(cell.row) + 2;
            if (topIndex <= 8) {
                moves.push(element + topIndex);
            }

            var bottomIndex = parseInt(cell.row) - 2;
            if (bottomIndex > 0) {
                moves.push(element + bottomIndex);
            }
        }
        return moves;
    }
};