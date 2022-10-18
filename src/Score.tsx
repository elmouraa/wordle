interface ScoreProps {
  score: number;
}
export const Score = ({ score }: ScoreProps) => {
  return (
    <p className="text-white text-6xl font-bold">
      {score.toString().padStart(3, "0")}
    </p>
  );
};
