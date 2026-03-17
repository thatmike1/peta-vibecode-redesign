import { type ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { ContourBg } from "@/components/contour-bg";
import { useInView } from "@/hooks/use-in-view";
import { TiltCard } from "./tilt-card";
import {
  about,
  education,
  experience,
  projects,
  skills,
  certifications,
  services,
  contact,
  hero,
} from "@/data/content";
import {
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * FULLY DARK THEME — matches terrain hero energy.
 *
 * Palette:
 *   bg-dark:    oklch(0.12 0.02 165)
 *   bg-darker:  oklch(0.10 0.018 165)
 *   card:       oklch(0.15 0.02 165)
 *   emerald:    oklch(0.55 0.18 160)
 *   amber:      oklch(0.72 0.16 70)
 *   text:       white/70
 *   muted:      white/40
 *   heading:    white/90
 */

const DARK = "bg-[oklch(0.12_0.02_165)]";
const DARKER = "bg-[oklch(0.10_0.018_165)]";

/* ── helpers ─────────────────────────────────────────── */

function Heading({ children, num }: { children: ReactNode; num: string }) {
  return (
    <div className="mb-14">
      <span className="text-[10px] font-mono text-[oklch(0.55_0.18_160)]/40 tracking-[0.3em] uppercase block mb-3">
        SEC.{num}
      </span>
      <h2 className="font-serif text-4xl lg:text-5xl text-white/90">
        {children}
      </h2>
      <div className="mt-4 w-16 h-0.5 bg-[oklch(0.72_0.16_70)]" />
    </div>
  );
}

function SkillBar({ level, delay }: { level: number; delay: number }) {
  const { ref, isInView } = useInView();
  return (
    <div ref={ref} className="h-1.5 bg-white/5 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{
          width: isInView ? `${level}%` : "0%",
          background:
            "linear-gradient(90deg, oklch(0.28 0.06 165), oklch(0.55 0.18 160))",
          transition: `width 1.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        }}
      />
    </div>
  );
}

const contactLinks = [
  { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: contact.phone, href: `tel:${contact.phone}` },
  { icon: Linkedin, label: "LinkedIn", href: contact.linkedin },
  { icon: Github, label: "GitHub", href: contact.github },
  { icon: Globe, label: "petrmikeska.cz", href: contact.website },
];

const skillLevels: Record<string, number> = {
  "GIS & Spatial Tools": 95,
  "Programming Languages": 88,
  "Web Technologies": 78,
  Databases: 92,
  "Geospatial & Data Libraries": 85,
  "Computer Vision & AI": 75,
  "AI Nástroje": 70,
  "3D & Visualization": 65,
  "DevOps & Infrastructure": 78,
};

/* ── ABOUT ──────────────────────────────────────────── */

export function V2AboutSection() {
  return (
    <section id="about" className={cn("py-24 lg:py-32", DARK)}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <Heading num="01">O mně</Heading>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <Reveal delay={200}>
            <img
              src={hero.photo}
              alt="Petr Mikeska"
              className="w-28 h-28 rounded-lg object-cover border border-white/8 shadow-xl flex-shrink-0"
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-6 flex-1">
            {about.slice(0, 4).map((p, i) => (
              <Reveal key={i} delay={150 + i * 100}>
                <p className="text-white/55 leading-[1.85] text-[15px]">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={650}>
          <div className="mt-14 pl-6 border-l-2 border-[oklch(0.55_0.18_160)]/50 max-w-2xl relative">
            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[oklch(0.55_0.18_160)]" />
            <p className="text-white/50 leading-[1.85] text-lg font-serif italic">
              {about[4]}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── EDUCATION ──────────────────────────────────────── */

export function V2EducationSection() {
  return (
    <section id="education" className={cn("py-24 lg:py-32", DARKER)}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <Heading num="02">Vzdělání</Heading>
        </Reveal>

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-[oklch(0.55_0.18_160)] via-[oklch(0.55_0.18_160)]/30 to-transparent" />

          <div className="space-y-14">
            {education.map((edu, i) => (
              <Reveal key={i} delay={100 + i * 150}>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[oklch(0.55_0.18_160)] bg-[oklch(0.10_0.018_165)] shadow-[0_0_8px_oklch(0.55_0.18_160)/0.3]" />

                  <a
                    href={edu.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[oklch(0.55_0.18_160)] hover:text-[oklch(0.65_0.20_160)] transition-colors"
                  >
                    {edu.institution}
                  </a>
                  <p className="text-xs text-white/30 mt-1">{edu.location}</p>
                  <h3 className="font-serif text-xl text-white/85 mt-3">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-white/30 mt-1">{edu.type}</p>

                  <ul className="mt-4 space-y-2">
                    {edu.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-white/45 flex items-start gap-3"
                      >
                        <span className="w-1 h-1 rounded-full bg-[oklch(0.72_0.16_70)] mt-2 flex-shrink-0" />
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

/* ── EXPERIENCE ─────────────────────────────────────── */

export function V2ExperienceSection() {
  return (
    <section id="experience" className={cn("py-24 lg:py-32", DARK)}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <Heading num="03">Praxe</Heading>
        </Reveal>

        <div className="max-w-3xl">
          {experience.map((exp, i) => (
            <Reveal key={i} delay={100 + i * 100}>
              <div className="py-8 first:pt-0 last:pb-0 -mx-4 px-4 rounded-lg hover:bg-white/[0.02] transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <div>
                    <p className="text-sm font-semibold text-[oklch(0.55_0.18_160)]">
                      {exp.company}
                    </p>
                    <h3 className="font-serif text-xl text-white/85 mt-1">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-xs text-white/25 whitespace-nowrap font-mono">
                    {exp.period}
                  </p>
                </div>
                <p className="text-xs text-white/25 mb-4">{exp.location}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm text-white/45 flex items-start gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-[oklch(0.72_0.16_70)] mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                {i < experience.length - 1 && (
                  <div className="mt-8 border-b border-white/5" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PROJECTS ───────────────────────────────────────── */

export function V2ProjectsSection() {
  return (
    <section id="projects" className={cn("py-24 lg:py-32 relative", DARKER)}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,oklch(0.55_0.18_160_/_0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <Heading num="04">Projekty</Heading>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <Reveal
              key={i}
              delay={60 + i * 50}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <TiltCard className="h-full">
                <div
                  className={cn(
                    "group bg-[oklch(0.15_0.02_165)] rounded-lg p-6 border border-white/5 hover:border-[oklch(0.55_0.18_160)]/20 transition-all duration-300 hover:shadow-[0_0_40px_oklch(0.55_0.18_160_/_0.06)] h-full flex flex-col",
                    i === 0 && "lg:flex-row lg:gap-10",
                  )}
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[oklch(0.55_0.18_160)] shadow-[0_0_6px_oklch(0.55_0.18_160_/_0.5)]" />
                      <h3
                        className={cn(
                          "font-serif text-white/90",
                          i === 0 ? "text-2xl" : "text-lg",
                        )}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-[13px] text-white/40 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <ul className="space-y-1.5 mb-6 flex-1">
                      {project.features.map((f, j) => (
                        <li
                          key={j}
                          className="text-xs text-white/35 flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-[oklch(0.72_0.16_70)] mt-1.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={cn(
                      "mt-auto",
                      i === 0 && "lg:mt-0 lg:self-end lg:min-w-40",
                    )}
                  >
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium text-[oklch(0.55_0.18_160)] bg-[oklch(0.55_0.18_160)]/10 border border-[oklch(0.55_0.18_160)]/15 rounded-full px-2.5 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-white/30 hover:text-[oklch(0.55_0.18_160)] transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {project.linkLabel}
                    </a>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SKILLS ─────────────────────────────────────────── */

export function V2SkillsSection() {
  return (
    <section
      id="skills"
      className={cn("py-24 lg:py-32 relative", DARK)}
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <Heading num="05">Dovednosti</Heading>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
          {skills.map((category, i) => {
            const level = skillLevels[category.name] ?? 70;
            return (
              <Reveal key={i} delay={80 + i * 60}>
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-[13px] font-semibold tracking-wide uppercase text-white/50">
                      {category.name}
                    </h3>
                    <span className="text-[11px] font-mono text-[oklch(0.55_0.18_160)]">
                      {level}%
                    </span>
                  </div>
                  <SkillBar level={level} delay={i * 100} />
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-white/35 border border-white/8 rounded-full px-3 py-0.5 hover:border-[oklch(0.55_0.18_160)]/30 hover:text-[oklch(0.55_0.18_160)] transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── CERTIFICATIONS ─────────────────────────────────── */

export function V2CertificationsSection() {
  return (
    <section id="certifications" className={cn("py-24 lg:py-32", DARKER)}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <Heading num="06">Certifikace</Heading>
        </Reveal>

        <div className="max-w-3xl">
          {certifications.map((cert, i) => (
            <Reveal key={i} delay={100 + i * 100}>
              <div className="py-6 first:pt-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="font-serif text-lg text-white/85">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-white/25 whitespace-nowrap font-mono">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
                <p className="text-sm text-white/40 leading-relaxed">
                  {cert.description}
                </p>
                {i < certifications.length - 1 && (
                  <div className="mt-6 border-b border-white/5" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES ───────────────────────────────────────── */

export function V2ServicesSection() {
  return (
    <section id="services" className={cn("py-24 lg:py-32", DARK)}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <Heading num="07">Služby</Heading>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {services.map((service, i) => (
            <Reveal key={i} delay={80 + i * 80}>
              <div className="group relative">
                <span className="text-5xl font-serif text-white/[0.03] absolute -top-4 -left-2 select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-mono text-[oklch(0.55_0.18_160)]/40 tracking-wider relative">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl text-white/85 mt-2 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-[oklch(0.55_0.18_160)]/70 mb-3">
                  {service.question}
                </p>
                <p className="text-[13px] text-white/40 leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-[oklch(0.55_0.18_160)] bg-[oklch(0.55_0.18_160)]/8 border border-[oklch(0.55_0.18_160)]/12 rounded-full px-2.5 py-0.5"
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

/* ── CONTACT ────────────────────────────────────────── */

export function V2ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-[oklch(0.08_0.025_165)] overflow-hidden"
    >
      <ContourBg className="text-white" animate={false} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-[oklch(0.55_0.18_160)]" />
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[oklch(0.55_0.18_160)] animate-ping" />
            </div>
            <span className="text-[10px] font-mono text-white/20 tracking-[0.25em] uppercase">
              49.5167°N, 18.3333°E · Online
            </span>
          </div>
        </Reveal>

        <Reveal>
          <Heading num="08">Kontakt</Heading>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal delay={200}>
            <p className="font-serif text-2xl lg:text-3xl text-white/35 leading-relaxed max-w-md">
              Pokud máte zájem o spolupráci, neváhejte mě kontaktovat.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="space-y-5">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-4 text-white/40 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg border border-white/6 flex items-center justify-center group-hover:border-[oklch(0.55_0.18_160)]/40 group-hover:bg-[oklch(0.55_0.18_160)]/10 group-hover:shadow-[0_0_15px_oklch(0.55_0.18_160_/_0.1)] transition-all">
                    <Icon className="w-4 h-4 text-[oklch(0.55_0.18_160)]" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
