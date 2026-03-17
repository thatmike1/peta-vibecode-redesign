/**
 * animated SVG map with contour lines, pulsing pin, radar circles, crosshairs, and coordinate labels
 */
export function HeroMapSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={`w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes pulse-ring {
            0% { r: 8; opacity: 0.8; }
            100% { r: 60; opacity: 0; }
          }
          @keyframes pulse-ring-2 {
            0% { r: 8; opacity: 0.6; }
            100% { r: 90; opacity: 0; }
          }
          @keyframes pulse-pin {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.15); }
          }
          @keyframes slow-rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes dash-flow {
            to { stroke-dashoffset: -40; }
          }
          .radar-1 {
            animation: pulse-ring 3s ease-out infinite;
          }
          .radar-2 {
            animation: pulse-ring-2 3s ease-out 1s infinite;
          }
          .pin-pulse {
            animation: pulse-pin 2s ease-in-out infinite;
            transform-origin: 250px 230px;
          }
          .contour-rotate {
            animation: slow-rotate 60s linear infinite;
            transform-origin: 250px 250px;
          }
          .grid-dash {
            animation: dash-flow 4s linear infinite;
          }
        `}</style>
      </defs>

      {/* grid lines */}
      <g opacity="0.12" stroke="oklch(0.55 0.15 175)" strokeWidth="0.5">
        {[100, 150, 200, 250, 300, 350, 400].map((v) => (
          <g key={v}>
            <line
              x1={v}
              y1="0"
              x2={v}
              y2="500"
              strokeDasharray="4 6"
              className="grid-dash"
            />
            <line
              x1="0"
              y1={v}
              x2="500"
              y2={v}
              strokeDasharray="4 6"
              className="grid-dash"
            />
          </g>
        ))}
      </g>

      {/* contour ellipses */}
      <g className="contour-rotate" fill="none" stroke="oklch(0.55 0.15 175)">
        <ellipse
          cx="250"
          cy="250"
          rx="180"
          ry="120"
          strokeWidth="0.6"
          opacity="0.15"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="150"
          ry="100"
          strokeWidth="0.7"
          opacity="0.2"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="120"
          ry="80"
          strokeWidth="0.8"
          opacity="0.25"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="90"
          ry="60"
          strokeWidth="0.9"
          opacity="0.3"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="60"
          ry="40"
          strokeWidth="1"
          opacity="0.4"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="30"
          ry="20"
          strokeWidth="1.2"
          opacity="0.5"
        />
      </g>

      {/* crosshairs */}
      <g stroke="oklch(0.55 0.15 175)" strokeWidth="0.8" opacity="0.5">
        <line x1="230" y1="230" x2="270" y2="230" />
        <line x1="250" y1="210" x2="250" y2="250" />
        <text
          x="275"
          y="228"
          fill="oklch(0.55 0.15 175)"
          fontSize="8"
          fontFamily="monospace"
          opacity="0.6"
        >
          +
        </text>
      </g>

      {/* secondary crosshairs */}
      <g stroke="oklch(0.55 0.15 175)" strokeWidth="0.5" opacity="0.25">
        <line x1="130" y1="160" x2="150" y2="160" />
        <line x1="140" y1="150" x2="140" y2="170" />
        <line x1="360" y1="340" x2="380" y2="340" />
        <line x1="370" y1="330" x2="370" y2="350" />
      </g>

      {/* radar pulse circles */}
      <circle
        cx="250"
        cy="230"
        fill="none"
        stroke="oklch(0.55 0.15 175)"
        strokeWidth="1.5"
        className="radar-1"
      />
      <circle
        cx="250"
        cy="230"
        fill="none"
        stroke="oklch(0.55 0.15 175)"
        strokeWidth="1"
        className="radar-2"
      />

      {/* location pin */}
      <g className="pin-pulse">
        <circle cx="250" cy="230" r="6" fill="oklch(0.55 0.15 175)" />
        <circle cx="250" cy="230" r="3" fill="oklch(0.10 0.02 180)" />
      </g>

      {/* coordinate labels */}
      <text
        x="40"
        y="480"
        fill="oklch(0.55 0.15 175)"
        fontSize="9"
        fontFamily="monospace"
        opacity="0.5"
      >
        49.5167°N
      </text>
      <text
        x="390"
        y="480"
        fill="oklch(0.55 0.15 175)"
        fontSize="9"
        fontFamily="monospace"
        opacity="0.5"
      >
        18.3333°E
      </text>
      <text
        x="40"
        y="30"
        fill="oklch(0.55 0.15 175)"
        fontSize="8"
        fontFamily="monospace"
        opacity="0.3"
      >
        DATUM: WGS84
      </text>
      <text
        x="350"
        y="30"
        fill="oklch(0.55 0.15 175)"
        fontSize="8"
        fontFamily="monospace"
        opacity="0.3"
      >
        EPSG:4326
      </text>

      {/* decorative points */}
      {[
        [120, 300],
        [180, 380],
        [340, 150],
        [400, 280],
        [310, 400],
        [150, 120],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="2"
          fill="oklch(0.55 0.15 175)"
          opacity={0.2 + i * 0.05}
        />
      ))}
    </svg>
  );
}
