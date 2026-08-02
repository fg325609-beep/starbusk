type WavyLinesProps = {
  className?: string;
  color?: string;
  lines?: number;
};


export default function WavyLines({
  className = "h-40 w-64",
  color = "currentColor",
  lines = 3,
}: WavyLinesProps) {
  const paths = Array.from({ length: lines }, (_, i) => {
    const y = 20 + i * 22;
    return `M0 ${y} C 40 ${y - 14}, 60 ${y + 24}, 100 ${y + 4} S 160 ${y - 20}, 200 ${y + 8} S 250 ${y - 10}, 264 ${y}`;
  });

  return (
    <svg viewBox="0 0 264 140" fill="none" className={className} aria-hidden="true">
      {paths.map((d, i) => (
        <path
          key={i}
          className="wavy-line"
          d={d}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={0.5 - i * 0.08}
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
    </svg>
  );
}
