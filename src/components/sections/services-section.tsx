import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useContent } from "@/hooks/use-content";

export function ServicesSection() {
  const { services, ui } = useContent();

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading>{ui.sections.services}</SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {services.map((service, i) => (
            <Reveal key={i} delay={80 + i * 80}>
              <div className="group">
                <span className="text-xs font-mono text-terracotta/50 tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl mt-2 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-topo mb-3">
                  {service.question}
                </p>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-topo bg-topo-light rounded-full px-2.5 py-0.5"
                    >
                      {tag}
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
