export default function NexusMark({ className = "" }) {
  // Four discipline nodes converging into one bright core node.
  // This is literal to the brand name: Gold + Nexus + Media.
  const nodes = [
    { x: 40, y: 40, label: "Strategy" },
    { x: 360, y: 30, label: "Content" },
    { x: 30, y: 320, label: "Media" },
    { x: 370, y: 330, label: "Data" },
  ];
  const core = { x: 200, y: 185 };

  return (
    <svg
      viewBox="0 0 400 360"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Four disciplines converging into a single bright node, the Nexus mark"
    >
      {nodes.map((n, i) => (
        <line
          key={`l-${i}`}
          x1={n.x}
          y1={n.y}
          x2={core.x}
          y2={core.y}
          stroke="#C9A227"
          strokeWidth="1"
          strokeOpacity="0.55"
          className="nexus-line"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={`n-${i}`}>
          <circle cx={n.x} cy={n.y} r="4" fill="#9A988F" />
          <text
            x={n.x}
            y={n.y > 180 ? n.y + 22 : n.y - 14}
            textAnchor="middle"
            fontSize="11"
            fill="#9A988F"
            fontFamily="var(--font-inter)"
            letterSpacing="0.05em"
          >
            {n.label.toUpperCase()}
          </text>
        </g>
      ))}
      <circle cx={core.x} cy={core.y} r="7" fill="#E4C766" className="nexus-core" />
      <circle cx={core.x} cy={core.y} r="14" stroke="#E4C766" strokeOpacity="0.4" />
    </svg>
  );
}
