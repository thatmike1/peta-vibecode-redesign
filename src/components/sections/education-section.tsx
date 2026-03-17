import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/data/content";

export function EducationSection() {
  return (
    <section id="education" className="py-24 lg:py-32 bg-parchment-dark">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading>Vzdělání</SectionHeading>
        </Reveal>

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border" />

          <div className="space-y-14">
            {education.map((edu, i) => (
              <Reveal key={i} delay={100 + i * 150}>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-topo bg-parchment-dark" />

                  <a
                    href={edu.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-topo hover:text-terracotta transition-colors"
                  >
                    {edu.institution}
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">
                    {edu.location}
                  </p>
                  <h3 className="font-serif text-xl mt-3">{edu.degree}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {edu.type}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {edu.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground flex items-start gap-3"
                      >
                        <span className="w-1 h-1 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
