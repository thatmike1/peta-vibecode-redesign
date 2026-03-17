import { useEffect, useRef, useState } from "react";

interface CrosshairCursorProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

/**
 * container that renders an SVG "+" crosshair following the mouse within its bounds
 */
export function CrosshairCursor({
  children,
  className = "",
  style,
  id,
}: CrosshairCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    function handleMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }

    function handleEnter() {
      setVisible(true);
    }

    function handleLeave() {
      setVisible(false);
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ cursor: "none", ...style }}
      id={id}
    >
      {children}
      <svg
        className="pointer-events-none absolute top-0 left-0 w-full h-full z-50"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      >
        <line
          x1={pos.x - 16}
          y1={pos.y}
          x2={pos.x + 16}
          y2={pos.y}
          stroke="oklch(0.55 0.15 175)"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <line
          x1={pos.x}
          y1={pos.y - 16}
          x2={pos.x}
          y2={pos.y + 16}
          stroke="oklch(0.55 0.15 175)"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <circle
          cx={pos.x}
          cy={pos.y}
          r="4"
          fill="none"
          stroke="oklch(0.55 0.15 175)"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
