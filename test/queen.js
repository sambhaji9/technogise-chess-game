const chai = require("chai");
const Queen = require("../engine/queen");
const expect = chai.expect;

const queen = require("../engine/queen");

describe("Queen getNextMoves()", () => {
    it("should return the array of next possible moves", () => {
        const queen = new Queen("H8");

        expect(queen.getNextMoves()).length.greaterThan(0);
    });
});