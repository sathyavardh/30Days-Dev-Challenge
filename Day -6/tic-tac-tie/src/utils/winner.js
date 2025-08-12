export const checkWinner = (board) => {
  const lines = [
    [0, 1, 2], //Top Row
    [3, 4, 5], //Middle Row
    [6, 7, 8], //Bottom Row

    [0, 3, 6], //Left Column
    [1, 4, 7], //Middle Column
    [2, 5, 8], //Right Column

    [0, 4, 8], //Top-Left to Bottom-Right Diagonal
    [2, 4, 6], //Top-Right to Bottom-Left Diagonal
  ];

  //Loop through each possible winning

  for (let line of lines) {
    const [a, b, c] = line;
    //check if
    //1. There is something in board[a] (not null)
    //2. board[a]==board[b]
    //3. board[a]==board[c]

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line };
    }
  }

  //If no winner, but all cells are filled its a draw

  // [ "X", "O", "X", "O", "O", "X", "X", "X", "O" ]
  // .every(cell => cell !== null) //  true (no empty spots)

  // [ "X", "O", "X", null, "O", "X", "X", "X", "O" ]
  // .every(cell => cell !== null) //  false (4th spot empty)

  if (board.every((cell) => cell !== null)) {
    return { winner: "Draw", line: [] };
  }

  //If now winner the board is not full yet, return null (game continues)
  return null;
};
