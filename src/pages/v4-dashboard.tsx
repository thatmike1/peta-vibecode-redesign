import { useState } from "react";
import {
  hero,
  about,
  education,
  experience,
  projects,
  skills,
  certifications,
  services,
  contact,
  footer,
} from "@/data/content";
import { Reveal } from "@/components/reveal";
import { HeroMapSvg } from "@/components/v4/hero-map-svg";
import { ContourDivider } from "@/components/v4/contour-divider";
import { TiltCard } from "@/components/v4/tilt-card";
import { SkillBar } from "@/components/v4/skill-bar";
import { CrosshairCursor } from "@/components/v4/crosshair-cursor";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  Globe,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  ChevronRight,
} from "lucide-react";

/** maps skill categories to approximate proficiency levels for bar display */
const skillLevels: Record<string, number> = {
  QGIS: 95,
  "ArcGIS Pro": 90,
  "GDAL/OGR": 85,
  GeoServer: 75,
  MapServer: 70,
  SNAP: 80,
  "Agisoft Metashape": 70,
  "OGC Standards": 80,
  CloudCompare: 65,
  Python: 92,
  JavaScript: 85,
  SQL: 90,
  Bash: 75,
  "C#": 55,
  HTML: 90,
  CSS: 88,
  "REST API": 90,
  WordPress: 75,
  YOOtheme: 70,
  PostgreSQL: 92,
  PostGIS: 95,
  MySQL: 70,
  GeoPandas: 88,
  Shapely: 85,
  NumPy: 82,
  Pandas: 85,
  Matplotlib: 80,
  YOLOv8: 80,
  OpenCV: 78,
  TensorFlow: 65,
  PyTorch: 60,
  "GitHub Copilot": 90,
  Claude: 85,
  Blender: 65,
  MeshLab: 60,
  Git: 90,
  GitHub: 90,
  Linux: 82,
  Ubuntu: 80,
  Docker: 70,
};

/** dark base colors — subtle alternation between sections */
const BG_PRIMARY = "oklch(0.09 0.02 180)";
const BG_SECONDARY = "oklch(0.11 0.02 180)";
const TEAL = "oklch(0.55 0.15 175)";
const TEXT_PRIMARY = "oklch(0.93 0.005 80)";
const TEXT_SECONDARY = "oklch(0.60 0.01 180)";
const TEXT_MUTED = "oklch(0.45 0.01 180)";

export default function V4DashboardPage() {
  return (
    <div
      className={`min-h-screen bg-[${BG_PRIMARY}]`}
      style={{ background: BG_PRIMARY }}
    >
      <HeroSection />
      <ContourDivider />
      <AboutSection />
      <ContourDivider flip />
      <EducationSection />
      <ContourDivider />
      <ExperienceSection />
      <ContourDivider flip />
      <ProjectsSection />
      <ContourDivider />
      <SkillsSection />
      <ContourDivider flip />
      <CertificationsSection />
      <ContourDivider />
      <ServicesSection />
      <ContourDivider flip />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — glass panel + parallax SVG map
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: BG_PRIMARY }}
    >
      {/* ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, oklch(0.55 0.15 175 / 0.06) 0%, transparent 70%)`,
        }}
      />

      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${TEAL} 1px, transparent 1px), linear-gradient(90deg, ${TEAL} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-center py-20">
        {/* left: text in glass panel */}
        <div className="space-y-8">
          <Reveal>
            <p
              className="text-sm font-mono tracking-[0.3em] uppercase"
              style={{ color: TEAL }}
            >
              {hero.coordinates}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95]"
              style={{ color: TEXT_PRIMARY }}
            >
              {hero.name}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p
              className="text-lg md:text-xl max-w-lg"
              style={{ color: TEXT_SECONDARY }}
            >
              GIS Analyst & Geospatial Developer
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-2">
              {hero.specialties.map((tag) => (
                <span
                  key={tag}
                  className="glass-card-subtle px-3 py-1.5 text-xs font-mono rounded-full"
                  style={{ color: TEAL }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={hero.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 glow-teal-sm hover:scale-[1.03]"
                style={{
                  background: TEAL,
                  color: BG_PRIMARY,
                }}
              >
                <Download size={16} />
                Download CV
              </a>
              <a
                href={hero.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm"
                style={{ color: TEAL }}
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={hero.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm"
                style={{ color: TEAL }}
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </Reveal>
        </div>

        {/* right: animated SVG map with glow */}
        <Reveal delay={200} className="hidden lg:block">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div
              className="absolute inset-0 rounded-full opacity-40 blur-3xl pointer-events-none"
              style={{
                background: `radial-gradient(circle, oklch(0.55 0.15 175 / 0.2), transparent 70%)`,
              }}
            />
            <HeroMapSvg />
          </div>
        </Reveal>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: `oklch(0.55 0.15 175 / 0.5)` }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8"
          style={{
            background: `linear-gradient(to bottom, oklch(0.55 0.15 175 / 0.5), transparent)`,
          }}
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ABOUT — glass blockquote + frosted paragraph cards
   ═══════════════════════════════════════════════════════════════ */
function AboutSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto"
      id="about"
    >
      <Reveal>
        <h2
          className="font-serif text-4xl md:text-5xl mb-12 scroll-slide-left"
          style={{ color: TEXT_PRIMARY }}
        >
          O mně
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <blockquote
          className="glass-card rounded-2xl p-8 mb-10 border-l-4 scroll-reveal"
          style={{ borderLeftColor: TEAL }}
        >
          <p
            className="font-serif italic text-xl md:text-2xl leading-relaxed"
            style={{ color: "oklch(0.80 0.01 180)" }}
          >
            {about[0]}
          </p>
        </blockquote>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {about.slice(1).map((paragraph, i) => (
          <Reveal key={i} delay={150 + i * 100}>
            <div className="glass-card rounded-xl p-6 h-full scroll-reveal">
              <p
                className="leading-relaxed text-[15px]"
                style={{ color: TEXT_SECONDARY }}
              >
                {paragraph}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EDUCATION — glowing timeline dots + glass cards
   ═══════════════════════════════════════════════════════════════ */
function EducationSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: BG_SECONDARY }}
      id="education"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-14 scroll-slide-left">
            <GraduationCap size={28} style={{ color: TEAL }} />
            <h2
              className="font-serif text-4xl md:text-5xl"
              style={{ color: TEXT_PRIMARY }}
            >
              Vzdělání
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* glowing vertical line */}
          <div
            className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px"
            style={{
              background: `linear-gradient(to bottom, ${TEAL}, oklch(0.55 0.15 175 / 0.1))`,
              boxShadow: `0 0 8px oklch(0.55 0.15 175 / 0.3)`,
            }}
          />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <Reveal key={i} delay={i * 150}>
                <div
                  className={`flex gap-6 md:gap-8 ${i % 2 === 0 ? "scroll-slide-left" : "scroll-slide-right"}`}
                >
                  {/* glowing dot */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-10 relative glow-teal-sm"
                      style={{
                        border: `2px solid ${TEAL}`,
                        background: BG_SECONDARY,
                      }}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ background: TEAL }}
                      />
                    </div>
                  </div>

                  {/* glass content card */}
                  <div className="glass-card rounded-xl p-6 flex-1">
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono tracking-wider uppercase hover:underline"
                      style={{ color: TEAL }}
                    >
                      {edu.institution}
                    </a>
                    <h3
                      className="font-serif text-xl md:text-2xl mt-1"
                      style={{ color: TEXT_PRIMARY }}
                    >
                      {edu.degree}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: TEXT_MUTED }}>
                      {edu.type} &middot; {edu.location}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {edu.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: TEXT_SECONDARY }}
                        >
                          <ChevronRight
                            size={14}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: TEAL }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCE — glass cards with glowing accent bars
   ═══════════════════════════════════════════════════════════════ */
function ExperienceSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: BG_PRIMARY }}
      id="experience"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-14 scroll-slide-left">
            <Briefcase size={28} style={{ color: "oklch(0.65 0.20 45)" }} />
            <h2
              className="font-serif text-4xl md:text-5xl"
              style={{ color: TEXT_PRIMARY }}
            >
              Zkušenosti
            </h2>
          </div>
        </Reveal>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="glass-card relative rounded-xl p-6 md:p-8 scroll-reveal"
                style={{
                  borderColor:
                    hoveredIdx === i ? "oklch(0.55 0.15 175 / 0.3)" : undefined,
                  transform:
                    hoveredIdx === i ? "translateX(8px)" : "translateX(0)",
                  boxShadow:
                    hoveredIdx === i
                      ? "0 0 40px oklch(0.55 0.15 175 / 0.1)"
                      : undefined,
                }}
              >
                {/* glowing accent bar */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-1 rounded-full transition-all duration-400"
                  style={{
                    backgroundColor: i % 2 === 0 ? TEAL : "oklch(0.65 0.20 45)",
                    opacity: hoveredIdx === i ? 1 : 0.4,
                    boxShadow:
                      hoveredIdx === i
                        ? `0 0 12px ${i % 2 === 0 ? "oklch(0.55 0.15 175 / 0.5)" : "oklch(0.65 0.20 45 / 0.5)"}`
                        : "none",
                  }}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3
                      className="font-serif text-xl"
                      style={{ color: TEXT_PRIMARY }}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: TEAL }}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className="text-xs font-mono"
                      style={{ color: TEXT_MUTED }}
                    >
                      {exp.period}
                    </p>
                    <p className="text-xs" style={{ color: TEXT_MUTED }}>
                      {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: TEXT_SECONDARY }}
                    >
                      <ChevronRight
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: `oklch(0.55 0.15 175 / 0.6)` }}
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
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROJECTS — tilt cards with glass effect
   ═══════════════════════════════════════════════════════════════ */
function ProjectsSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: BG_SECONDARY }}
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2
            className="font-serif text-4xl md:text-5xl mb-4 scroll-slide-left"
            style={{ color: TEXT_PRIMARY }}
          >
            Projekty
          </h2>
          <p className="mb-14 max-w-xl" style={{ color: TEXT_MUTED }}>
            Vybrané projekty z oblasti WebGIS, prostorových databází, computer
            vision a IoT.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={i} delay={i * 80}>
              <TiltCard className="h-full scroll-reveal">
                <div className="glass-card h-full rounded-xl p-6 flex flex-col group">
                  <h3
                    className="font-serif text-lg mb-2 transition-colors"
                    style={{ color: "oklch(0.90 0.005 80)" }}
                  >
                    <span className="group-hover:text-[oklch(0.55_0.15_175)]">
                      {project.title}
                    </span>
                  </h3>
                  <p
                    className="text-sm mb-4 leading-relaxed flex-1"
                    style={{ color: TEXT_MUTED }}
                  >
                    {project.description}
                  </p>

                  <ul className="space-y-1 mb-4">
                    {project.features.map((f, j) => (
                      <li
                        key={j}
                        className="text-xs flex items-start gap-1.5"
                        style={{ color: TEXT_MUTED }}
                      >
                        <span style={{ color: TEAL }} className="mt-0.5">
                          &#9656;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-full"
                        style={{
                          background: "oklch(0.55 0.15 175 / 0.1)",
                          color: TEAL,
                          border: "1px solid oklch(0.55 0.15 175 / 0.2)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm transition-colors mt-auto hover:brightness-125"
                    style={{ color: TEAL }}
                  >
                    <ExternalLink size={14} />
                    {project.linkLabel}
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SKILLS — animated bars with glow
   ═══════════════════════════════════════════════════════════════ */
function SkillsSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: BG_PRIMARY }}
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2
            className="font-serif text-4xl md:text-5xl mb-4 scroll-slide-left"
            style={{ color: TEXT_PRIMARY }}
          >
            Dovednosti
          </h2>
          <p className="mb-14 max-w-xl" style={{ color: TEXT_MUTED }}>
            Technické kompetence vizualizované jako data dashboard.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {skills.map((category, catIdx) => (
            <Reveal key={catIdx} delay={catIdx * 80}>
              <div className="scroll-reveal">
                <h3
                  className="text-sm font-mono tracking-wider uppercase mb-5 pb-2"
                  style={{
                    color: TEAL,
                    borderBottom: `1px solid oklch(0.55 0.15 175 / 0.2)`,
                  }}
                >
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <SkillBar
                      key={item}
                      name={item}
                      level={skillLevels[item] ?? 70}
                      delay={itemIdx * 80}
                    />
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

/* ═══════════════════════════════════════════════════════════════
   CERTIFICATIONS — glass cards with glow accent
   ═══════════════════════════════════════════════════════════════ */
function CertificationsSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: BG_SECONDARY }}
      id="certifications"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-14 scroll-slide-left">
            <Award size={28} style={{ color: TEAL }} />
            <h2
              className="font-serif text-4xl md:text-5xl"
              style={{ color: TEXT_PRIMARY }}
            >
              Certifikace
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="glass-card rounded-xl p-6 relative overflow-hidden group scroll-reveal">
                {/* glowing top accent on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{
                    background: `linear-gradient(90deg, ${TEAL}, oklch(0.65 0.12 175))`,
                    boxShadow: `0 0 10px oklch(0.55 0.15 175 / 0.5)`,
                  }}
                />

                <p className="text-xs font-mono mb-1" style={{ color: TEAL }}>
                  {cert.issuer} &middot; {cert.date}
                </p>
                <h3
                  className="font-serif text-lg mb-3"
                  style={{ color: TEXT_PRIMARY }}
                >
                  {cert.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: TEXT_SECONDARY }}
                >
                  {cert.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SERVICES — glass number blocks with glow
   ═══════════════════════════════════════════════════════════════ */
function ServicesSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: BG_PRIMARY }}
      id="services"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2
            className="font-serif text-4xl md:text-5xl mb-14 scroll-slide-left"
            style={{ color: TEXT_PRIMARY }}
          >
            Služby
          </h2>
        </Reveal>

        <div className="space-y-8">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className={`flex flex-col md:flex-row gap-6 md:gap-10 items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                } ${i % 2 === 0 ? "scroll-slide-left" : "scroll-slide-right"}`}
              >
                {/* glowing number block */}
                <div
                  className="glass-card flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center group-hover:glow-teal"
                  style={{
                    boxShadow: "0 0 20px oklch(0.55 0.15 175 / 0.08)",
                  }}
                >
                  <span
                    className="font-serif text-2xl md:text-3xl"
                    style={{ color: TEAL }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* content */}
                <div className="flex-1">
                  <h3
                    className="font-serif text-xl md:text-2xl mb-1"
                    style={{ color: TEXT_PRIMARY }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm italic mb-3" style={{ color: TEAL }}>
                    {service.question}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: TEXT_SECONDARY }}
                  >
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="glass-card-subtle px-2.5 py-1 text-xs font-mono rounded-full"
                        style={{ color: TEAL }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT — crosshair cursor + glowing contact cards
   ═══════════════════════════════════════════════════════════════ */
function ContactSection() {
  return (
    <CrosshairCursor
      className=""
      style={{ background: BG_SECONDARY }}
      id="contact"
    >
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2
              className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 scroll-slide-left"
              style={{ color: TEXT_PRIMARY }}
            >
              Kontakt
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mb-14 max-w-lg text-lg" style={{ color: TEXT_MUTED }}>
              Zaujala vás moje práce? Ozvěte se a pojďme spolupracovat.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Mail,
                label: "Email",
                value: contact.email,
                href: `mailto:${contact.email}`,
              },
              {
                icon: Phone,
                label: "Telefon",
                value: contact.phone,
                href: `tel:${contact.phone}`,
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Petr Mikeska",
                href: contact.linkedin,
              },
              {
                icon: Github,
                label: "GitHub",
                value: "MetrPikeska",
                href: contact.github,
              },
              {
                icon: Globe,
                label: "Web",
                value: "petrmikeska.cz",
                href: contact.website,
              },
            ].map((item, i) => (
              <Reveal key={i} delay={150 + i * 80}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="glass-card group flex items-center gap-4 rounded-xl p-5 scroll-reveal"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "oklch(0.55 0.15 175 / 0.12)",
                      boxShadow: "none",
                    }}
                  >
                    <item.icon size={20} style={{ color: TEAL }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-mono"
                      style={{ color: TEXT_MUTED }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm transition-colors group-hover:text-[oklch(0.55_0.15_175)]"
                      style={{ color: "oklch(0.85 0.01 180)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* pulsing location dot */}
          <Reveal delay={600}>
            <div
              className="flex items-center gap-3 mt-14"
              style={{ color: TEXT_MUTED }}
            >
              <div className="relative">
                <MapPin size={18} style={{ color: TEAL }} />
                <div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                  style={{ background: TEAL }}
                >
                  <div
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ background: TEAL }}
                  />
                </div>
              </div>
              <span className="text-sm font-mono">
                {hero.coordinates} &middot; Beskydy, CZ
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </CrosshairCursor>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════ */
function FooterSection() {
  return (
    <footer
      className="py-10 px-6 md:px-12"
      style={{
        background: "oklch(0.06 0.02 180)",
        borderTop: `1px solid oklch(0.55 0.15 175 / 0.08)`,
      }}
    >
      <div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
        style={{ color: TEXT_MUTED }}
      >
        <div className="text-center md:text-left">
          <p className="font-medium" style={{ color: TEXT_SECONDARY }}>
            {footer.name}
          </p>
          <p>
            {footer.address} &middot; {footer.zip}
          </p>
          <p>IČO: {footer.ico}</p>
        </div>
        <p className="font-mono" style={{ color: "oklch(0.35 0.01 180)" }}>
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
