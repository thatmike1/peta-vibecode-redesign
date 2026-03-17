import { useInView } from "@/hooks/use-in-view";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

/**
 * animated horizontal bar that fills from 0 to level% when scrolled into view
 */
export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-[oklch(0.85_0.01_180)]">
          {name}
        </span>
        <span className="text-xs font-mono text-[oklch(0.55_0.15_175)]">
          {isInView ? `${level}%` : "0%"}
        </span>
      </div>
      <div className="h-2.5 rounded-full bg-[oklch(0.15_0.02_180)] overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: isInView ? `${level}%` : "0%",
            transition: `width 1.2s ease-out ${delay}ms`,
            background:
              "linear-gradient(90deg, oklch(0.55 0.15 175), oklch(0.65 0.12 175))",
          }}
        />
      </div>
    </div>
  );
}
