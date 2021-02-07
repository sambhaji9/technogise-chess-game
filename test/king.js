const chai = require("chai");
const King = require("../engine/king");
const spies = require("chai-spies");
chai.use(spies);
const expect = chai.expect;

describe("King getNextMoves()", () => {
    it("should return the next possible moves", () => {
        const king = new King("D5");
        expect(king.getNextMoves()).length.greaterThan(0);
    });
});

describe("King getTopMoves()", () => {
    it("should call the getTopMoves", () => {
        const king = new King("D4");

        var spy = chai.spy.on(king, "getTopMoves");
        king.getTopMoves([]);

        expect(spy).length.greaterThan(0);
    });
});

describe("King getBottomMoves()", () => {
    it("should call the getBottomMoves", () => {
        const king = new King("D4");

        var spy = chai.spy.on(king, "getBottomMoves");
        king.getBottomMoves([]);

        expect(spy).length.greaterThan(0);
    });
});
