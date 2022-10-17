import { GuessingBoard } from "./GuessingBoard";
import { Keyboard } from "./Keyboard";
import { Score } from "./Score";

const App = () => {
  return (
    <div className="h-screen bg-zinc-900 flex flex-col items-center justify-center space-y-12">
      <Score />
      <GuessingBoard />
      <Keyboard />
    </div>
  );
};

export default App;
