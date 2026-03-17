import { useEffect, useRef } from "react";

interface ContourDividerProps {
  className?: string;
  flip?: boolean;
}

/**
 * animated SVG contour divider that draws its stroke on scroll
 */
export function ContourDivider({
  className = "",
  flip = false,
}: ContourDividerProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const path = svg.querySelector("path");
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          path.style.transition = "stroke-dashoffset 2s ease-out";
          path.style.strokeDashoffset = "0";
          observer.unobserve(svg);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`w-full h-16 md:h-20 ${className}`}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <path
        d="M0,40 C120,10 240,70 360,40 C480,10 600,70 720,40 C840,10 960,70 1080,40 C1200,10 1320,70 1440,40"
        fill="none"
        stroke="oklch(0.55 0.15 175 / 0.3)"
        strokeWidth="1.5"
      />
      <path
        d="M0,50 C160,20 320,80 480,50 C640,20 800,80 960,50 C1120,20 1280,80 1440,50"
        fill="none"
        stroke="oklch(0.55 0.15 175 / 0.15)"
        strokeWidth="1"
      />
    </svg>
  );
}
