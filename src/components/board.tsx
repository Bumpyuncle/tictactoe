import Square from "./square";
type Player = "X" | "O";
type SquareValue = Player | null;

type BoardProps = {
  board: SquareValue[];
  onSquareClick: (index: number) => void;
};

const Board = ({ board, onSquareClick }: BoardProps) => {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
