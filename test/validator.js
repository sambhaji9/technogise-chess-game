const chai = require('chai');
const expect = chai.expect;

const Prompt = require('../prompt');

describe("Prompt verifyPiece()", () => {
    it("should return true for valid piece name", () => {
        let prompt = new Prompt("king d5");
        expect(prompt.verifyPiece("king")).to.be.true;
    });

    it("should return false for invalid piece name", () => {
        let prompt = new Prompt("lion d5");
        expect(prompt.verifyPiece("lion")).to.be.false;
    });
});

describe("Prompt verifyPosition()", () => {
    it("should return true for valid position", () => {
        let prompt = new Prompt("king d5");
        expect(prompt.verifyPosition("d5")).to.be.true;
    });

    it("should return false for invalid position", () => {
        let prompt = new Prompt("king i5");
        expect(prompt.verifyPosition("i5")).to.be.false;
    });
});

describe("Prompt verifyInputs()", () => {
    it("should return invalid piece message", () => {
        let prompt = new Prompt("lion d5"),
            outcome = prompt.verifyInputs();

        expect(outcome.message).to.equal("\nInvalid Piece name");
    });

    it("should return empty position message", () => {
        let prompt = new Prompt("lion"),
            outcome = prompt.verifyInputs();

        expect(outcome.message).to.equal("Expecting a position. Please enter one");
    });

    it("should return invalid position message", () => {
        let prompt = new Prompt("king r5"),
            outcome = prompt.verifyInputs();

        expect(outcome.message).to.equal("\nInvalid Position");
    });

    it("should return result object", () => {
        let prompt = new Prompt("king d5"),
            outcome = prompt.verifyInputs(),
            result = {
                piece: "king",
                position: "d5",
                valid: true,
                message: ""
            };

        expect(outcome).to.deep.equal(result);
    });
});