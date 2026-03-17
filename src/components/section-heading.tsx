import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  light?: boolean;
}

export function SectionHeading({ children, light }: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <h2
        className={cn(
          "font-serif text-4xl lg:text-5xl",
          light ? "text-hero-text" : "text-foreground",
        )}
      >
        {children}
      </h2>
      <div
        className={cn(
          "mt-4 w-16 h-0.5",
          light ? "bg-hero-text/30" : "bg-terracotta",
        )}
      />
    </div>
  );
}
