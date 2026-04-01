import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useContent } from "@/hooks/use-content";

export function SkillsSection() {
  const { skills, ui } = useContent();

  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading>{ui.sections.skills}</SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((category, i) => (
            <Reveal key={i} delay={80 + i * 60}>
              <div>
                <h3 className="text-[13px] font-semibold tracking-wide uppercase text-foreground/70 mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-[13px] text-muted-foreground border border-border rounded-full px-3.5 py-1 hover:border-topo/40 hover:text-topo transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
