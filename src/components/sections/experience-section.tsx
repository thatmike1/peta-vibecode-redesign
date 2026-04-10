import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useContent } from "@/hooks/use-content";
import { ExternalLink } from "lucide-react";

export function ExperienceSection() {
  const { experience, ui } = useContent();

  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading>{ui.sections.experience}</SectionHeading>
        </Reveal>

        <div className="space-y-0 max-w-3xl">
          {experience.map((exp, i) => (
            <Reveal key={i} delay={100 + i * 100}>
              <div className="py-8 first:pt-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <div>
                    <p className="text-sm font-semibold text-topo">
                      {exp.company}
                    </p>
                    <h3 className="font-serif text-xl mt-1">{exp.role}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground flex items-start gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                {exp.links && exp.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-3">
                    {exp.links.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-topo transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
                {i < experience.length - 1 && (
                  <div className="mt-8 border-b border-border" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
