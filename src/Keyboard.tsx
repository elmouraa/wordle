import { useCallback, useEffect } from "react";

const letters: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

interface KeyProps {
  letter: string;
  onKeyClick: (letter: string) => void;
}

const Key = ({ letter, onKeyClick }: KeyProps) => {
  return (
    <button
      className="h-8 w-8 flex items-center justify-center text-lg border border-white/10 rounded bg-white hover:bg-white/80"
      onClick={() => {
        onKeyClick(letter);
      }}
    >
      {letter}
    </button>
  );
};

interface KeyboardRowProps {
  letters: string;
  onKeyClick: (letter: string) => void;
}

const KeyboardRow = ({ letters, onKeyClick }: KeyboardRowProps) => {
  return (
    <div className="flex space-x-2">
      {letters.split("").map((letter) => {
        return <Key key={letter} letter={letter} onKeyClick={onKeyClick} />;
      })}
    </div>
  );
};

interface KeyboardProps {
  onKeyClick: (letter: string) => void;
  onDelete: () => void;
}

export const Keyboard = ({ onKeyClick, onDelete }: KeyboardProps) => {
  useKeyboard(onKeyClick, onDelete);

  return (
    <div className="flex flex-col space-y-2 items-center">
      {letters.map((rowLetters) => {
        return (
          <KeyboardRow
            key={rowLetters}
            letters={rowLetters}
            onKeyClick={onKeyClick}
          />
        );
      })}
    </div>
  );
};

const useKeyboard = (
  callback: (letter: string) => void,
  deleteCallback?: () => void
) => {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const pressedKey = event.key;
      if (pressedKey === "Backspace") {
        deleteCallback?.();
      } else if (pressedKey.length === 1 && pressedKey.match(/[a-z]/i)) {
        callback(pressedKey);
      }
    },
    [callback, deleteCallback]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyPress, false);
    return () => document.removeEventListener("keyup", handleKeyPress);
  }, [handleKeyPress]);
};
