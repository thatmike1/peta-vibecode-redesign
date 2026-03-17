import { useInView } from "@/hooks/use-in-view";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

/**
 * animated skill bar that fills from 0 to the given level when scrolled into view.
 * uses IntersectionObserver via useInView hook for trigger.
 */
export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-neutral-700 group-hover:text-[oklch(0.65_0.20_160)] transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-neutral-400 tabular-nums">
          {level}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isInView ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
            background:
              "linear-gradient(90deg, oklch(0.65 0.20 160), oklch(0.55 0.18 180))",
          }}
        />
      </div>
    </div>
  );
}
