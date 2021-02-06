const chai = require("chai");
const Bishop = require("../engine/bishop");
const expect = chai.expect;

const bishop = require("../engine/bishop");

describe("Bishop getNextMoves()", () => {
    it("should return the array of next possible moves", () => {
        const bishop = new Bishop("H8");

        expect(bishop.getNextMoves()).length.greaterThan(0);
    });
});

describe("Bishop getTopLeftMoves()", () => {
    it("should return the top left moves for bishop", () => {
        const bishop = new Bishop("D5");
        const moves = [];

        expect(bishop.getTopLeftMoves(moves)).length.greaterThan(0);
    });
});

describe("Bishop getTopRightMoves()", () => {
    it("should return the top right moves for Bishop", () => {
        const bishop = new Bishop("F5");
        const moves = [];

        expect(bishop.getTopRightMoves(moves)).length.greaterThan(0);
    });
});

describe("Bishop getBottomRightMoves()", () => {
    it("should return the bottom right moves for Bishop", () => {
        const bishop = new Bishop("A5");
        const moves = [];

        expect(bishop.getBottomRightMoves(moves)).length.greaterThan(0);
    });
});