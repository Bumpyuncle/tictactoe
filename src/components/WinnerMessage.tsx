type Player = "X" | "O";
type Winner = Player | "Draw" | null;

type WinnerMessageProps = {
  winner: Winner;
};

const WinnerMessage = ({ winner }: WinnerMessageProps) => {
  if (!winner) return null;

 return (
  <div className="winner-message">
    {winner === "Draw" ? "Oavgjort!" : `Vinnare: ${winner}`}
  </div>
);

};

export default WinnerMessage;
