const chai = require("chai");
const expect = chai.expect;

const Rook = require("../engine/rook");

describe("Rook getMoves()", () => {
    it("should return array of possible moves", () => {
        let position = "d5",
            rook = new Rook(position);

        expect(rook.getNextMoves()).length.greaterThan(0);
    });
});