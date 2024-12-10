interface RatingProps {
  percentage: string;
  size?: string;
}

export default function Rating({ percentage, size="2xl" }: RatingProps) {
  return (
    <div className="relative inline-block text-slate-400">
      <p className={`text-${size}`}>★★★★★</p>
      <p
        className={`text-${size} bg-[#299800] bg-clip-text absolute inset-0 text-transparent`}
        style={{ width: percentage }}
      >
        ★★★★★
      </p>
    </div>
  );
}
