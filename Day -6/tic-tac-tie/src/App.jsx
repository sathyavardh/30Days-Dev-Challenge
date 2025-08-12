import { useEffect, useState } from "react";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import GameBoard from "./components/GameBoard";
import { getAiMoveFromOpenRouter } from "./utils/aiOpenRouter";
import { checkWinner } from "./utils/winner";

function App() {
  //State for the board 3x3 board (9 cells)
  const [board, setBoard] = useState(Array(9).fill(null));

  //Is it the player turn?
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  //Who won? "X" or "O" or "Draw"
  const [winner, setWinner] = useState(null);

  //Score Tracking
  const [score, setScore] = useState({ X: 0, O: 0 });

  //when player clicks a square
  const handleClick = (i) => {
    if (!isPlayerTurn || winner || board[i]) return;
    const newBoard = [...board];
    newBoard[i] = "X";
    setBoard(newBoard);
    console.log(newBoard);
    setIsPlayerTurn(false);
  };

  useEffect(() => {
    // 1. Check winner first
    const result = checkWinner(board);
    if (result?.winner) {
      setWinner(result.winner);
      if (result.winner === "X" || result.winner === "O") {
        setScore((prev) => ({
          ...prev,
          [result.winner]: prev[result.winner] + 1,
        }));
      }
      return; // stop here, game ended
    }

    // 2. If AI's turn, let it play
    if (!isPlayerTurn) {
      const aiTurn = async () => {
        const move = await getAiMoveFromOpenRouter(board);
        if (move !== null && board[move] === null) {
          const newBoard = [...board];
          newBoard[move] = "O";
          setBoard(newBoard);
          setIsPlayerTurn(true);
        }
      };
      aiTurn();
    }
  }, [board, isPlayerTurn]);

  //Restart Game

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setWinner(null);
  };

  return (
    <>
      <div className="bg-[#0F172A] min-h-screen text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Tic Tac TAi 🤖</h1>
        <ScoreBoard score={score} />
        <GameBoard board={board} handleClick={handleClick} />

        {winner && (
          <div className="mt-4 text-xl">
            {winner === "Draw" ? "It's a Draw match" : `${winner} Wins!`}
            <button
              className="ml-4 px-4 py-2 bg-[#388df8] text-black rounded hover:bg-[#0ea5e9]"
              onClick={restartGame}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
