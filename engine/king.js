const Cell = require("../cell");

module.exports = class King {
    constructor(position) {
        this.position = position;
        this.cell = new Cell(this.position).getCell();
    }

    getNextMoves() {
        var colIndex = 8 - this.cell.col,
            moves = [],
            previousRow,
            nextRow;

        if (rowIndex - 1 >= 0 && colIndex >= 0) {
            previousRow = this.row[rowIndex - 1];
            for (let previousIndex = (colIndex - 1); previousIndex < (colIndex + 3); previousIndex++) {
                if (colIndex > 0 && colIndex < 8) {
                    moves.push(previousRow.concat(previousIndex));
                }
            }
        }

        // if (rowIndex + 1 < 8) {
        //     nextRow = this.row[rowIndex + 1];
        // }





        // for (let nextIndex = rowIndex; nextIndex < (rowIndex + 3); nextIndex++) {
        //     moves.push(nextRow.concat(nextIndex + 1));
        // }

        // for (let index = rowIndex; index < (rowIndex + 3); index++) {
        //     moves.push(this.cell.row.toUpperCase().concat(index + 1));
        // }

        return moves;
    }

};