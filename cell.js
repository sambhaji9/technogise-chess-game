module.exports = class Cell {
    constructor(position) {
        this.position = position;
        this.cell = {
            row: 0,
            col: 0
        };
        
        this.col = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    }

    /**
     * @name getCell
     * @description function predicting the next available moves for a Rook
     * @returns {object} object containing the row and col
     */
    getCell() {
        var splitter = this.position.split("");
        this.cell.row = splitter[1];
        this.cell.col = splitter[0];

        return this.cell;
    }

    /**
     * @name getRowIndex
     * @description function returning the row index
     * @returns {number} Index of the row
     */
    getRowIndex() {
        var cell = this.getCell();
        return (8 - parseInt(cell.row));
    }

    /**
     * @name getColIndex
     * @description function returning the col index
     * @returns {number} Index of the col
     */
    getColIndex() {
        var cell = this.getCell();
        var col = this.col.indexOf(cell.col.toUpperCase());

        return col;
    }
};