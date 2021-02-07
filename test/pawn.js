const chai = require("chai");
const Pawn = require("../engine/pawn");
const spies = require("chai-spies");
chai.use(spies);
const expect = chai.expect;

describe("Pawn getNextMoves()", () => {
    it("should return the next possible moves", () => {
        const pawn = new Pawn("D5");
        expect(pawn.getNextMoves()).length.greaterThan(0);
    });
});

describe("Pawn getTopMoves()", () => {
    it("should call the getTopMoves", () => {
        const pawn = new Pawn("D4");

        var spy = chai.spy.on(pawn, "getTopMoves");
        pawn.getTopMoves([]);

        expect(spy).length.greaterThan(0);
    });
});

describe("Pawn getBottomMoves()", () => {
    it("should call the getBottomMoves", () => {
        const pawn = new Pawn("D4");

        var spy = chai.spy.on(pawn, "getBottomMoves");
        pawn.getBottomMoves([]);

        expect(spy).length.greaterThan(0);
    });
});
