import { useCallback, useEffect, useState } from "react";
import { GuessingBoard } from "./GuessingBoard";
import { Keyboard } from "./Keyboard";
import { Score } from "./Score";

const App = () => {
  const [board, setBoard] = useState<string[][]>(
    Array(5)
      .fill(undefined)
      .map(() => Array(5).fill(""))
  );
  const [cursor, setCursor] = useState({
    row: 0,
    col: 0,
  });

  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    console.log(cursor);
  }, [cursor]);

  const updateBoard = useCallback(
    (letter: string) => {
      if (cursor.col < 5) {
        setBoard((prev) => {
          const nextBoard = [...prev];
          nextBoard[cursor.row][cursor.col] = letter;
          return nextBoard;
        });
        setCursor((prev) => ({
          ...prev,
          col: cursor.col + 1,
        }));
      }
    },
    [cursor]
  );

  // TODO: fix delete letter function

  const deleteLetter = useCallback(() => {
    let colToDelete = Math.min(cursor.col, 4);
    if (board[cursor.row][cursor.col] === "") {
      colToDelete = Math.max(0, colToDelete - 1);
      setCursor((prev) => ({
        ...prev,
        col: colToDelete,
      }));
    }
    setBoard((prev) => {
      const nextBoard = [...prev];
      nextBoard[cursor.row][colToDelete] = "";
      return nextBoard;
    });
  }, [cursor]);

  function validateWord() {
    if (cursor.col < 5) return;

    const word = board[cursor.row].join("");
    const result = word === "amine";

    if (result) {
      setScore((prev) => prev + 1);
    } else if (cursor.row >= 4) {
      setIsGameOver(true);
      setScore(0);
    } else {
      setCursor((prev) => ({ row: prev.row + 1, col: 0 }));
    }
  }

  return (
    <div className="h-screen bg-zinc-900 flex flex-col items-center justify-center space-y-12">
      <Score score={score} />
      <GuessingBoard board={board} />
      <Keyboard onKeyClick={updateBoard} onDelete={deleteLetter} />
      <button
        className="bg-red-500 rounded text-white px-4 py-2 hover:bg-red-400"
        onClick={validateWord}
      >
        Validate
      </button>
    </div>
  );
};

export default App;
