const Cell = require("../cell");

module.exports = class Bishop {
    constructor(position) {
        this.position = position;
        this.cell = new Cell(this.position);
        
        this.col = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    }

    /**
     * @name getNextMoves
     * @description function predicting the next available moves for a Bishop
     * @returns {array} next moves
     */
    getNextMoves() {
        var moves = [];
        moves.push(this.position.toUpperCase());
        moves = this.getTopLeftMoves(moves);
        moves = this.getTopRightMoves(moves);
        moves = this.getBottomLeftMoves(moves);
        moves = this.getBottomRightMoves(moves);
        
        return moves;
    }

    /**
     * @name getTopLeftMoves
     * @description function predicting the moves in top left direction
     * @returns {array} array containing the next moves in top left direction
     * @param {array} 
     */
    getTopLeftMoves(moves) {
        var col = this.cell.getColIndex(),
            row = this.cell.getRowIndex(),
            possibleMoves = Math.min(row + 1, col + 1) - 1,
            startIndex = col - 1,
            cell = this.cell.getCell();

        
        for (let index = 0; index < possibleMoves; index++) {
            const element = this.col[startIndex - index];
            moves.push(element + (parseInt(cell.row) + (index + 1)));
        }

        return moves;
    }

    /**
     * @name getTopRightMoves
     * @description function predicting the moves in top right direction
     * @returns {array} array containing the next moves in top right direction
     * @param {array} 
     */
    getTopRightMoves(moves) {
        var col = this.cell.getColIndex(),
            row = this.cell.getRowIndex(),
            possibleMoves = Math.min(row + 1, 9 - (col + 1)) - 1,
            startIndex = col + 1,
            cell = this.cell.getCell();

        
        for (let index = 0; index < possibleMoves; index++) {
            const element = this.col[startIndex + index];
            moves.push(element + (parseInt(cell.row) + (index + 1)));
        }

        return moves;
    }

    /**
     * @name getBottomLeftMoves
     * @description function predicting the moves in bottom left direction
     * @returns {array} array containing the next moves in bottom left direction
     * @param {array} 
     */
    getBottomLeftMoves(moves) {
        var col = this.cell.getColIndex(),
            row = this.cell.getRowIndex(),
            possibleMoves = 8 - Math.max(row + 1, 9 - (col + 1)),
            startIndex = col - 1,
            cell = this.cell.getCell();

        
        for (let index = 0; index < possibleMoves; index++) {
            const element = this.col[startIndex - index];
            moves.push(element + (parseInt(cell.row) - (index + 1)));
        }

        return moves;
    }

    /**
     * @name getBottomRightMoves
     * @description function predicting the moves in bottom right direction
     * @returns {array} array containing the next moves in bottom right direction
     * @param {array} 
     */
    getBottomRightMoves(moves) {
        var col = this.cell.getColIndex(),
            row = this.cell.getRowIndex(),
            possibleMoves = 8 - Math.max(row + 1, col + 1),
            startIndex = col + 1,
            cell = this.cell.getCell();

        
        for (let index = 0; index < possibleMoves; index++) {
            const element = this.col[startIndex + index];
            moves.push(element + (parseInt(cell.row) - (index + 1)));
        }

        return moves;
    }
};