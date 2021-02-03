const Cell = require("../cell");

module.exports = class Bishop {
    constructor(position) {
        this.position = position;
        this.cell = new Cell(this.position).getCell();
    }

    getNextMoves() {
        console.log(this.cell);
        return [];
    }
};