import { useInView } from "@/hooks/use-in-view";

export function ContourDivider() {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="overflow-hidden">
      <svg
        viewBox="0 0 1200 40"
        className="w-full h-6 lg:h-8"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0,20 C150,6 300,34 500,16 C700,-2 900,32 1200,18"
          stroke="oklch(0.55 0.18 160)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.3"
          strokeDasharray="2000"
          style={{
            strokeDashoffset: isInView ? 0 : 2000,
            transition: "stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
        <path
          d="M0,24 C200,10 400,38 600,20 C800,-2 1000,34 1200,22"
          stroke="oklch(0.55 0.18 160)"
          strokeWidth="0.5"
          strokeLinecap="round"
          opacity="0.15"
          strokeDasharray="2000"
          style={{
            strokeDashoffset: isInView ? 0 : 2000,
            transition:
              "stroke-dashoffset 2.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
          }}
        />
      </svg>
    </div>
  );
}
