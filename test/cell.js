const chai = require("chai");
const expect = chai.expect;

const Cell = require("../cell");

describe("Cell getCell()", () => {
    it("should return the cell with row and col", () => {
        let cell = new Cell("D5").getCell();
        const result = {
            row: "5",
            col: "D"
        };
        expect(cell).to.deep.equal(result);
    });
});

describe("Cell getRowIndex()", () => {
    it("should return the index of position", () => {
        const cell = new Cell("D6");
        const rowIndex = cell.getRowIndex();
        expect(rowIndex).to.be.equal(2);
    });
});

describe("Cell getCellIndex()", () => {
    it("should return the index of position", () => {
        const cell = new Cell("D5");
        const col = cell.getColIndex();

        expect(col).to.be.equal(3);
    });
});