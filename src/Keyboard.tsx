const letters: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

interface KeyProps {
  letter: string;
}

const Key = ({ letter }: KeyProps) => {
  return (
    <button className="h-8 w-8 flex items-center justify-center text-lg border border-white/10 rounded bg-white hover:bg-white/80">
      {letter}
    </button>
  );
};

interface KeyboardRowProps {
  letters: string;
}
const KeyboardRow = ({ letters }: KeyboardRowProps) => {
  return (
    <div className="flex space-x-2">
      {letters.split("").map((letter) => {
        return <Key key={letter} letter={letter} />;
      })}
    </div>
  );
};

export const Keyboard = () => {
  return (
    <div className="flex flex-col space-y-2 items-center">
      {letters.map((rowLetters) => {
        return <KeyboardRow key={rowLetters} letters={rowLetters} />;
      })}
    </div>
  );
};
