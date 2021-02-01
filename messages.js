module.exports = class Message {
    constructor() {
        this.title = "\nChessboard\n";
        this.invalidPiece = "Invalid Piece name";
        this.invalidPosition = "Invalid Position";
        this.emptyPosition = "Expecting a position. Please enter one";
        this.emptyInput = "Empty inputs";
        this.introduction = "Simulate movement of each unique chess piece on chessboard\n" +
        "Choose chess piece and its position e.g., 'King D5'";
        this.promptMessage = "\nEnter your piece and position: ";
    }
};