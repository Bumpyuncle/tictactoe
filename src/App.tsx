import { useState } from "react";
import "./App.css";
import Board from "./components/board";
import WinnerMessage from "./components/WinnerMessage";


type Player = "X" | "O";
type SquareValue = Player | null;

const App = () => {
  const [board, setBoard] = useState<SquareValue[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | "Draw" | null>(null);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6],             
  ];

  const checkWinner = (newBoard: SquareValue[]) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    if (newBoard.every((square) => square !== null)) {
      return "Draw";
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] !== null || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className="container">
      <div className="game">
        <h1>Tic Tac Toe</h1>
        <Board board={board} onSquareClick={handleClick} />
        <WinnerMessage winner={winner} />
        <button className="restart" onClick={restartGame}>
          Starta om spelet
        </button>
      </div>
    </div>
  );
};

export default App;
