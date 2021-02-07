const chai = require("chai");
const expect = chai.expect;

const Pawn = require("../engine/pawn");

describe("Pawn getNextMoves()", () => {
    it("should return the next possible moves", () => {
        const pawn = new Pawn("D5");
        expect(pawn.getNextMoves()).length.greaterThan(0);
    });
});