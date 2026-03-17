import { useCallback, useEffect, useRef, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

/**
 * interactive satellite coordinate grid that responds to mouse movement.
 * renders an SVG grid with UTM-style coordinate labels that subtly shifts
 * based on cursor position, creating a parallax-like effect.
 */
export function SatelliteGrid() {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const targetRef = useRef<MousePosition>({ x: 0, y: 0 });
  const currentRef = useRef<MousePosition>({ x: 0, y: 0 });
  const gridRef = useRef<SVGSVGElement>(null);

  const animate = useCallback(() => {
    const lerp = 0.06;
    currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lerp;
    currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lerp;

    setMouse({ ...currentRef.current });
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 2;
      const cy = (e.clientY / window.innerHeight - 0.5) * 2;
      targetRef.current = { x: cx, y: cy };
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  const offsetX = mouse.x * 12;
  const offsetY = mouse.y * 12;

  const gridSpacing = 80;
  const cols = Math.ceil(1920 / gridSpacing) + 4;
  const rows = Math.ceil(1080 / gridSpacing) + 4;

  const gridLines: React.ReactNode[] = [];

  for (let i = 0; i <= cols; i++) {
    const x = i * gridSpacing;
    gridLines.push(
      <line
        key={`v-${i}`}
        x1={x}
        y1={0}
        x2={x}
        y2={rows * gridSpacing}
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={i % 4 === 0 ? 1 : 0.5}
      />,
    );
  }

  for (let j = 0; j <= rows; j++) {
    const y = j * gridSpacing;
    gridLines.push(
      <line
        key={`h-${j}`}
        x1={0}
        y1={y}
        x2={cols * gridSpacing}
        y2={y}
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={j % 4 === 0 ? 1 : 0.5}
      />,
    );
  }

  const labels: React.ReactNode[] = [];
  for (let i = 0; i <= cols; i += 4) {
    for (let j = 0; j <= rows; j += 4) {
      const lat = (49.52 - j * 0.002).toFixed(3);
      const lon = (18.33 + i * 0.002).toFixed(3);
      labels.push(
        <text
          key={`lbl-${i}-${j}`}
          x={i * gridSpacing + 4}
          y={j * gridSpacing + 12}
          fill="rgba(255,255,255,0.12)"
          fontSize="9"
          fontFamily="monospace"
        >
          {lat}N {lon}E
        </text>,
      );
    }
  }

  return (
    <svg
      ref={gridRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
        willChange: "transform",
      }}
      viewBox={`0 0 ${cols * gridSpacing} ${rows * gridSpacing}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {gridLines}
      {labels}
    </svg>
  );
}
