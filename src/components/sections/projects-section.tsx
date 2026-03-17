import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects, type Project } from "@/data/content";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-parchment-dark">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading>Projekty</SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <Reveal
              key={i}
              delay={80 + i * 60}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard project={project} featured={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "group bg-card rounded-lg p-6 border border-border hover:border-topo/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col",
        featured && "lg:flex-row lg:gap-10",
      )}
    >
      <div className="flex-1 flex flex-col">
        <h3
          className={cn(
            "font-serif mb-2 text-foreground",
            featured ? "text-2xl" : "text-lg",
          )}
        >
          {project.title}
        </h3>
        <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>
        <ul className="space-y-1.5 mb-6 flex-1">
          {project.features.map((f, i) => (
            <li
              key={i}
              className="text-xs text-muted-foreground flex items-start gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-terracotta mt-1.5 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={cn("mt-auto", featured && "lg:mt-0 lg:self-end lg:min-w-40")}
      >
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium text-topo bg-topo-light rounded-full px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-topo transition-colors group-hover:text-topo"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          {project.linkLabel}
        </a>
      </div>
    </div>
  );
}
