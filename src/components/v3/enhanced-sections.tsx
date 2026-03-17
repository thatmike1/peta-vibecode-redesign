import { type ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { useInView } from "@/hooks/use-in-view";
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
  Award,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

/*
 * V3 SATELLITE — fully dark navy theme
 *
 * Palette:
 *   bg:      oklch(0.11 0.025 240)  — navy
 *   bg-alt:  oklch(0.09 0.020 240)  — deeper navy
 *   card:    oklch(0.14 0.030 240)  — card surface
 *   emerald: oklch(0.65 0.20 160)   — primary accent
 *   amber:   oklch(0.75 0.18 80)    — secondary
 */

const BG = "bg-[oklch(0.11_0.025_240)]";
const BG_ALT = "bg-[oklch(0.09_0.020_240)]";

function Heading({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-4 mb-1">
        <div className="w-10 h-[2px] bg-[oklch(0.65_0.20_160)]" />
        <span className="text-[10px] font-mono text-[oklch(0.65_0.20_160)]/50 tracking-[0.3em] uppercase">
          {label}
        </span>
      </div>
      <h2 className="font-serif text-4xl lg:text-5xl text-white/90 mt-3">
        {children}
      </h2>
    </div>
  );
}

function SkillBarInline({ level, delay }: { level: number; delay: number }) {
  const { ref, isInView } = useInView();
  return (
    <div ref={ref} className="h-1 bg-white/5 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{
          width: isInView ? `${level}%` : "0%",
          background:
            "linear-gradient(90deg, oklch(0.35 0.10 200), oklch(0.65 0.20 160))",
          transition: `width 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        }}
      />
    </div>
  );
}

function Divider() {
  return (
    <div className="bg-[oklch(0.10_0.022_240)]">
      <div className="flex items-center justify-center py-1 px-6 max-w-6xl mx-auto">
        <div className="flex-1 h-px bg-white/[0.04]" />
        <div className="px-4 text-white/[0.08] text-[10px] font-mono">+</div>
        <div className="flex-1 h-px bg-white/[0.04]" />
      </div>
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

const markerColors = [
  "oklch(0.65 0.20 160)",
  "oklch(0.75 0.18 80)",
  "oklch(0.60 0.22 30)",
  "oklch(0.55 0.18 280)",
  "oklch(0.70 0.20 140)",
  "oklch(0.65 0.15 50)",
  "oklch(0.58 0.20 200)",
  "oklch(0.72 0.16 100)",
  "oklch(0.62 0.18 320)",
];

const skillLevels: Record<string, number> = {
  QGIS: 92,
  "ArcGIS Pro": 85,
  "GDAL/OGR": 80,
  GeoServer: 70,
  MapServer: 65,
  SNAP: 72,
  "Agisoft Metashape": 68,
  "OGC Standards": 75,
  CloudCompare: 60,
  Python: 90,
  JavaScript: 82,
  SQL: 88,
  Bash: 70,
  "C#": 55,
  HTML: 90,
  CSS: 85,
  "REST API": 88,
  WordPress: 72,
  YOOtheme: 65,
  PostgreSQL: 88,
  PostGIS: 90,
  MySQL: 70,
  GeoPandas: 85,
  Shapely: 80,
  NumPy: 78,
  Pandas: 82,
  Matplotlib: 75,
  YOLOv8: 78,
  OpenCV: 75,
  TensorFlow: 60,
  PyTorch: 58,
  "GitHub Copilot": 85,
  Claude: 80,
  Blender: 65,
  MeshLab: 55,
  Git: 88,
  GitHub: 90,
  Linux: 78,
  Ubuntu: 75,
  Docker: 65,
};

/* ── ABOUT ── */

export function V3AboutSection() {
  return (
    <section id="about" className={`py-24 lg:py-28 ${BG}`}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <Heading label="About">O mně</Heading>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <Reveal delay={200}>
            <div className="lg:sticky lg:top-24">
              <blockquote className="border-l-[3px] border-[oklch(0.65_0.20_160)] pl-6 py-2">
                <p className="font-serif text-xl lg:text-2xl italic leading-relaxed text-white/50">
                  &ldquo;Propojuji GIS, vývoj a datovou analytiku do funkčních
                  geodatových řešení.&rdquo;
                </p>
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={hero.photo}
                  alt="Petr Mikeska"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-[oklch(0.65_0.20_160)]/20"
                />
                <div>
                  <p className="font-medium text-white/80 text-sm">
                    {hero.name}
                  </p>
                  <p className="text-xs text-white/30">
                    GIS Analyst & Geoinformatics
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {about.map((p, i) => (
              <Reveal key={i} delay={300 + i * 80}>
                <p className="text-white/50 leading-[1.8] text-[15px]">
                  {i === 0 && (
                    <span className="font-serif text-4xl text-[oklch(0.65_0.20_160)] float-left mr-3 mt-1 leading-[0.8]">
                      {p.charAt(0)}
                    </span>
                  )}
                  {i === 0 ? p.slice(1) : p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── EDUCATION ── */

export function V3EducationSection() {
  const dotColors = [
    "oklch(0.65 0.20 160)",
    "oklch(0.75 0.18 80)",
    "oklch(0.60 0.22 30)",
  ];

  return (
    <section id="education" className={`py-24 lg:py-28 ${BG_ALT}`}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <Heading label="Education">Vzdělání</Heading>
        </Reveal>

        <div className="relative max-w-3xl">
          <div className="absolute left-[18px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[oklch(0.65_0.20_160)]/30 via-[oklch(0.75_0.18_80)]/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <Reveal key={i} delay={100 + i * 150}>
                <div className="relative pl-12 md:pl-14">
                  <div
                    className="absolute left-2.5 md:left-[11px] top-1 w-[18px] h-[18px] rounded-full border-2"
                    style={{
                      borderColor: dotColors[i % 3],
                      boxShadow: `0 0 10px ${dotColors[i % 3]}30`,
                    }}
                  />
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[oklch(0.65_0.20_160)] hover:text-[oklch(0.75_0.22_160)] transition-colors"
                    >
                      {edu.institution}
                    </a>
                    <span className="text-[10px] font-mono text-white/20 whitespace-nowrap uppercase tracking-wider">
                      {edu.type.split("·")[0]?.trim()}
                    </span>
                  </div>
                  <p className="text-xs text-white/25 mb-1">{edu.location}</p>
                  <h3 className="font-serif text-lg text-white/85 mt-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-white/25 mt-1">{edu.type}</p>
                  <ul className="mt-4 space-y-1.5">
                    {edu.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-white/40 flex items-start gap-2"
                      >
                        <span
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ background: dotColors[i % 3] }}
                        />
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

/* ── EXPERIENCE ── */

export function V3ExperienceSection() {
  return (
    <section id="experience" className={`py-24 lg:py-28 ${BG}`}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <Heading label="Work">Praxe</Heading>
        </Reveal>

        <div className="max-w-3xl space-y-0">
          {experience.map((exp, i) => (
            <Reveal key={i} delay={100 + i * 80}>
              <div className="py-7 first:pt-0 last:pb-0 -mx-4 px-4 rounded-lg hover:bg-white/[0.02] transition-colors group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div>
                    <p className="text-sm font-semibold text-[oklch(0.65_0.20_160)]">
                      {exp.company}
                    </p>
                    <h3 className="font-serif text-xl text-white/85 mt-1">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/20">
                    <Calendar className="w-3 h-3" />
                    <span className="text-[11px] font-mono">{exp.period}</span>
                  </div>
                </div>
                <p className="text-xs text-white/20 mb-3">{exp.location}</p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm text-white/40 flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[oklch(0.75_0.18_80)] mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                {i < experience.length - 1 && (
                  <div className="mt-7 border-b border-white/[0.04]" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PROJECTS ── */

export function V3ProjectsSection() {
  return (
    <section id="projects" className={`py-24 lg:py-28 relative ${BG_ALT}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,oklch(0.65_0.20_160_/_0.02)_0%,transparent_50%)] pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <Heading label="Projects">Projekty</Heading>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-[10px] font-mono text-white/15 tracking-widest uppercase mb-8">
            Map Legend · {projects.length} entries
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <Reveal
              key={i}
              delay={60 + i * 50}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <div className="group bg-[oklch(0.13_0.025_240)] rounded-lg p-5 border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300 hover:shadow-[0_0_30px_oklch(0.65_0.20_160_/_0.04)] h-full flex flex-col">
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{
                      background: markerColors[i % markerColors.length],
                      boxShadow: `0 0 6px ${markerColors[i % markerColors.length]}40`,
                    }}
                  />
                  <h3 className="font-serif text-white/90 text-lg">
                    {project.title}
                  </h3>
                </div>
                <p className="text-[13px] text-white/35 leading-relaxed mb-4">
                  {project.description}
                </p>
                <ul className="space-y-1 mb-5 flex-1">
                  {project.features.map((f, j) => (
                    <li
                      key={j}
                      className="text-xs text-white/30 flex items-start gap-2"
                    >
                      <span className="text-[oklch(0.75_0.18_80)] mt-0.5 text-[8px]">
                        &#9670;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-white/[0.04]">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-[oklch(0.65_0.20_160)] bg-[oklch(0.65_0.20_160)]/8 border border-[oklch(0.65_0.20_160)]/12 rounded-full px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-white/25 hover:text-[oklch(0.65_0.20_160)] transition-colors"
                  >
                    {project.linkLabel}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SKILLS ── */

export function V3SkillsSection() {
  return (
    <section
      id="skills"
      className={`py-24 lg:py-28 ${BG}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <Heading label="Skills">Dovednosti</Heading>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-[10px] font-mono text-white/15 tracking-widest uppercase mb-10">
            Proficiency Index · {Object.keys(skillLevels).length} skills
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {skills.map((category, ci) => (
            <Reveal key={ci} delay={80 + ci * 50}>
              <div>
                <h3 className="text-[13px] font-semibold tracking-wide uppercase text-white/45 mb-5 flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: markerColors[ci % markerColors.length],
                    }}
                  />
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item, si) => {
                    const level = skillLevels[item] ?? 60;
                    return (
                      <div key={item}>
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="text-sm text-white/50">{item}</span>
                          <span className="text-[10px] font-mono text-[oklch(0.65_0.20_160)]/60">
                            {level}%
                          </span>
                        </div>
                        <SkillBarInline
                          level={level}
                          delay={ci * 80 + si * 40}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CERTIFICATIONS ── */

export function V3CertificationsSection() {
  return (
    <section id="certifications" className={`py-24 lg:py-28 ${BG_ALT}`}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <Heading label="Certs">Certifikace</Heading>
        </Reveal>

        <div className="max-w-3xl space-y-6">
          {certifications.map((cert, i) => (
            <Reveal key={i} delay={100 + i * 80}>
              <div className="flex gap-4 items-start py-5 first:pt-0 last:pb-0">
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.65_0.20_160)]/8 border border-[oklch(0.65_0.20_160)]/12 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-[oklch(0.65_0.20_160)]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="font-serif text-lg text-white/85">
                      {cert.name}
                    </h3>
                    <p className="text-[10px] font-mono text-white/20">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                  <p className="text-sm text-white/35 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
              {i < certifications.length - 1 && (
                <div className="border-b border-white/[0.04]" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES ── */

export function V3ServicesSection() {
  return (
    <section id="services" className={`py-24 lg:py-28 ${BG}`}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <Heading label="Services">Služby</Heading>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((service, i) => (
            <Reveal key={i} delay={60 + i * 70}>
              <div className="relative group">
                <span className="text-5xl font-serif text-white/[0.02] absolute -top-6 -left-2 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono text-[oklch(0.65_0.20_160)]/50 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-mono text-white/10 tracking-widest uppercase">
                    Service
                  </span>
                </div>
                <h3 className="font-serif text-xl text-white/85 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[oklch(0.75_0.18_80)]/60 italic mb-3">
                  {service.question}
                </p>
                <p className="text-[13px] text-white/35 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-[oklch(0.65_0.20_160)] bg-[oklch(0.65_0.20_160)]/8 border border-[oklch(0.65_0.20_160)]/12 rounded-full px-2 py-0.5"
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

/* ── CONTACT ── */

export function V3ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-28 bg-[oklch(0.07_0.02_240)] overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-[oklch(0.65_0.20_160)]" />
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[oklch(0.65_0.20_160)] animate-ping" />
            </div>
            <span className="text-[10px] font-mono text-white/15 tracking-[0.25em] uppercase">
              Signal Active · Dostupný pro spolupráci
            </span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-4xl lg:text-5xl text-white/90 mb-4">
            Pojďme
            <br />
            <span className="text-[oklch(0.65_0.20_160)]">spolupracovat</span>
          </h2>
          <div className="w-16 h-0.5 bg-[oklch(0.65_0.20_160)]/30 mb-14" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map(({ icon: Icon, label, href }, i) => (
            <Reveal key={label} delay={200 + i * 80}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="block p-5 rounded-lg bg-[oklch(0.10_0.025_240)] border border-white/[0.04] hover:border-[oklch(0.65_0.20_160)]/20 hover:shadow-[0_0_20px_oklch(0.65_0.20_160_/_0.06)] transition-all group"
              >
                <Icon className="w-5 h-5 text-[oklch(0.65_0.20_160)] mb-3" />
                <p className="text-xs text-white/25 mb-0.5">
                  {Icon === Mail
                    ? "Email"
                    : Icon === Phone
                      ? "Telefon"
                      : Icon === Globe
                        ? "Web"
                        : label.split("/").pop()}
                </p>
                <p className="text-sm text-white/60 group-hover:text-white transition-colors truncate">
                  {label}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Divider as V3Divider };
