type Player = "X" | "O";
type SquareValue = Player | null;

type SquareProps = {
  value: SquareValue;
  onClick: () => void;
};

const Square = ({ value, onClick }: SquareProps) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
