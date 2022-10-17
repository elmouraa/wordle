import { GuessingCell } from "./GuessingCell";

const board = Array(25).fill("");

export const GuessingBoard = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-2">
      {board.map((value, index) => (
        <GuessingCell key={index} value={value} />
      ))}
    </div>
  );
};
