interface GuessingCellProps {
  value: string;
}
export const GuessingCell = ({ value }: GuessingCellProps) => {
  return (
    <div className="h-12 w-12 rounded border border-white/10 text-white/80 text-2xl flex items-center justify-center font-semibold">
      {value}
    </div>
  );
};
