const chai = require("chai");
const Knight = require("../engine/knight");
const Cell = require("../cell");
const spies = require("chai-spies");

chai.use(spies);
const expect = chai.expect;

describe("Knight getMoves()", () => {
    it("should return the next possible moves for knight", () => {
        const knight = new Knight("D5");

        expect(knight.getNextMoves()).length.greaterThan(0);
    });
});

describe("Knight getLeftMoves()", () => {
    it("should call the getLeftMoves", () => {
        const knight = new Knight("D4");
        const cell = new Cell("D4");


        var spy = chai.spy.on(knight, "getLeftMoves");
        knight.getNextMoves();

        expect(spy).length.greaterThan(0);
    });
});

describe("Knight getRightMoves()", () => {
    it("should call the getRightMoves", () => {
        const knight = new Knight("D4");
        const cell = new Cell("D4");

        var spy = chai.spy.on(knight, "getRightMoves");
        knight.getNextMoves();

        expect(spy).length.greaterThan(0);
    });
});

describe("Knight getLeftTopBottomMoves()", () => {
    it("should call the getLeftTopBottomMoves", () => {
        const knight = new Knight("D4");
        const cell = new Cell("D4");

        var spy = chai.spy.on(knight, "getLeftTopBottomMoves");
        knight.getNextMoves();

        expect(spy).length.greaterThan(0);
    });
});

describe("Knight getRightTopBottomMoves()", () => {
    it("should call the getRightTopBottomMoves", () => {
        const knight = new Knight("D4");
        const cell = new Cell("D4");

        var spy = chai.spy.on(knight, "getLeftTopBottomMoves");
        knight.getNextMoves();

        expect(spy).length.greaterThan(0);
    });
});
