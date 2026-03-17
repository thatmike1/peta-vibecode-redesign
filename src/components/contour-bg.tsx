import { cn } from "@/lib/utils";

const contourPaths = [
  "M-100,80 C50,60 200,130 450,75 C700,20 850,110 1050,65 C1250,20 1350,90 1500,60",
  "M-80,180 C120,155 300,215 500,170 C700,125 850,200 1050,160 C1250,120 1380,190 1500,165",
  "M-60,300 C150,275 320,340 530,295 C740,250 880,325 1060,285 C1240,245 1370,310 1500,290",
  "M-120,420 C80,395 270,455 480,410 C690,365 840,440 1020,400 C1200,360 1360,425 1500,405",
  "M-90,540 C110,515 290,575 500,530 C710,485 860,555 1040,520 C1220,485 1370,545 1500,525",
  "M-70,660 C130,635 310,695 520,650 C730,605 870,670 1050,640 C1230,610 1360,665 1500,650",
  "M-50,750 C140,725 300,775 510,740 C720,705 860,760 1040,735 C1220,710 1350,755 1500,740",
];

interface ContourBgProps {
  className?: string;
  animate?: boolean;
}

export function ContourBg({ className, animate = true }: ContourBgProps) {
  return (
    <svg
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none",
        className,
      )}
      viewBox="0 0 1400 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {contourPaths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth={0.8 + (i % 3) * 0.4}
          strokeLinecap="round"
          fill="none"
          opacity={0.06 + (i % 4) * 0.025}
          className={
            animate ? `contour-line contour-delay-${(i % 6) + 1}` : undefined
          }
        />
      ))}
    </svg>
  );
}
