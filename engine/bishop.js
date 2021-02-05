const Cell = require("../cell");

module.exports = class Bishop {
    constructor(position) {
        this.position = position;
        this.cell = new Cell(this.position);
        
        this.row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    }

    getNextMoves() {
        var rowIndex = this.cell.getRowIndex();
        // for (let index = 0; index < row.length; index++) {
        //     const element = array[index];
            
        // }
        return [];
    }
};