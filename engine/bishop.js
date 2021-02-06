const Cell = require("../cell");

module.exports = class Bishop {
    constructor(position) {
        this.position = position;
        this.cell = new Cell(this.position);
        
        this.col = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        this.DIRECTION = {
            TOP_LEFT: "topLeft",
            TOP_RIGHT: "topRight",
            BOTTOM_LEFT: "bottomLeft",
            BOTTOM_RIGHT: "bottomRight"
        };
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
        var topLeft = this.getMovesAndIndex(this.DIRECTION.TOP_LEFT);
        
        for (let index = 0; index < topLeft.possibleMoves; index++) {
            const element = this.col[topLeft.startIndex - index];
            moves.push(element + (parseInt(topLeft.cell.row) + (index + 1)));
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
        var topRight = this.getMovesAndIndex(this.DIRECTION.TOP_RIGHT);

        for (let index = 0; index < topRight.possibleMoves; index++) {
            const element = this.col[topRight.startIndex + index];
            moves.push(element + (parseInt(topRight.cell.row) + (index + 1)));
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
        var bottomLeft = this.getMovesAndIndex(this.DIRECTION.BOTTOM_LEFT);
        
        for (let index = 0; index < bottomLeft.possibleMoves; index++) {
            const element = this.col[bottomLeft.startIndex - index];
            moves.push(element + (parseInt(bottomLeft.cell.row) - (index + 1)));
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
        var bottomRight = this.getMovesAndIndex(this.DIRECTION.BOTTOM_RIGHT);
   
        for (let index = 0; index < bottomRight.possibleMoves; index++) {
            const element = this.col[bottomRight.startIndex + index];
            moves.push(element + (parseInt(bottomRight.cell.row) - (index + 1)));
        }

        return moves;
    }

    getMovesAndIndex(direction) {
        var possibleMoves = 0,
            startIndex = 0,
            col = this.cell.getColIndex(),
            row = this.cell.getRowIndex();

        switch (direction) {
            case this.DIRECTION.TOP_LEFT:
                possibleMoves = Math.min(row + 1, col + 1) - 1;
                startIndex = col - 1;
                break;
            case this.DIRECTION.TOP_RIGHT:
                possibleMoves = Math.min(row + 1, 9 - (col + 1)) - 1;
                startIndex = col + 1;
                break;
            case this.DIRECTION.BOTTOM_LEFT:
                possibleMoves = 8 - Math.max(row + 1, 9 - (col + 1));
                startIndex = col - 1;
                break;
            case this.DIRECTION.BOTTOM_RIGHT:
                possibleMoves = 8 - Math.max(row + 1, col + 1);
                startIndex = col + 1;
                break;
        }

        return {
            col: col,
            row: row,
            possibleMoves: possibleMoves,
            startIndex: startIndex,
            cell: this.cell.getCell()
        };
    }
};