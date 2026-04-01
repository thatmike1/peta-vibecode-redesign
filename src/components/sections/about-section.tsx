import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useContent } from "@/hooks/use-content";

export function AboutSection() {
  const { about, ui } = useContent();

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading>{ui.sections.about}</SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl">
          {about.slice(0, 4).map((p, i) => (
            <Reveal key={i} delay={100 + i * 100}>
              <p className="text-muted-foreground leading-[1.8] text-[15px]">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={600}>
          <div className="mt-14 pl-6 border-l-2 border-terracotta/60 max-w-2xl">
            <p className="text-muted-foreground leading-[1.8] text-[15px] italic font-serif text-lg">
              {about[4]}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
