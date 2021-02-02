module.exports = class Cell {
    constructor(position) {
        this.position = position;
        this.cell = {
            row: 0,
            col: 0
        };
    }

    /**
     * @name getCell
     * @description function predicting the next available moves for a Rook
     * @returns {object} object containing the row and col
     */
    getCell() {
        var splitter = this.position.split("");
        this.cell.row = splitter[0];
        this.cell.col = splitter[1];

        return this.cell;
    }
};