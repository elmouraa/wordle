interface GuessingCellProps {
  value: string;
}
const GuessingCell = ({ value }: GuessingCellProps) => {
  return (
    <div className="h-12 w-12 rounded border border-white/10 text-white/80 text-2xl flex items-center justify-center font-semibold">
      {value}
    </div>
  );
};

interface GuessingRowProps {
  row: string[];
}

const GuessingRow = ({ row }: GuessingRowProps) => {
  return (
    <div className="flex space-x-2">
      {row.map((value, index) => {
        return <GuessingCell key={index} value={value} />;
      })}
    </div>
  );
};

interface GuessingBoardProps {
  board: string[][];
}

export const GuessingBoard = ({ board }: GuessingBoardProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {board.map((row, index) => (
        <GuessingRow key={index} row={row} />
      ))}
    </div>
  );
};
