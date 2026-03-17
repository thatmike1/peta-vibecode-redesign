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

export default function V4DashboardPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.007_75)]">
      {/* ── HERO ── */}
      <HeroSection />

      <ContourDivider />

      {/* ── ABOUT ── */}
      <AboutSection />

      <ContourDivider flip />

      {/* ── EDUCATION ── */}
      <EducationSection />

      <ContourDivider />

      {/* ── EXPERIENCE ── */}
      <ExperienceSection />

      <ContourDivider flip />

      {/* ── PROJECTS ── */}
      <ProjectsSection />

      <ContourDivider />

      {/* ── SKILLS ── */}
      <SkillsSection />

      <ContourDivider flip />

      {/* ── CERTIFICATIONS ── */}
      <CertificationsSection />

      <ContourDivider />

      {/* ── SERVICES ── */}
      <ServicesSection />

      <ContourDivider flip />

      {/* ── CONTACT ── */}
      <ContactSection />

      {/* ── FOOTER ── */}
      <FooterSection />
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════
   HERO
   ═════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[oklch(0.10_0.02_180)] overflow-hidden">
      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.55 0.15 175) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.15 175) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-center py-20">
        {/* left: text */}
        <div className="space-y-8">
          <Reveal>
            <p className="text-sm font-mono tracking-[0.3em] uppercase text-[oklch(0.55_0.15_175)]">
              {hero.coordinates}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-[oklch(0.95_0.005_80)] leading-[0.95]">
              {hero.name}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-[oklch(0.65_0.01_180)] max-w-lg">
              GIS Analyst & Geospatial Developer
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-2">
              {hero.specialties.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono rounded-full border border-[oklch(0.55_0.15_175_/_0.3)] text-[oklch(0.55_0.15_175)] bg-[oklch(0.55_0.15_175_/_0.08)]"
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[oklch(0.55_0.15_175)] text-[oklch(0.10_0.02_180)] font-semibold text-sm hover:bg-[oklch(0.60_0.15_175)] transition-colors"
              >
                <Download size={16} />
                Download CV
              </a>
              <a
                href={hero.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[oklch(0.55_0.15_175_/_0.4)] text-[oklch(0.55_0.15_175)] font-semibold text-sm hover:bg-[oklch(0.55_0.15_175_/_0.1)] transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={hero.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[oklch(0.55_0.15_175_/_0.4)] text-[oklch(0.55_0.15_175)] font-semibold text-sm hover:bg-[oklch(0.55_0.15_175_/_0.1)] transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </Reveal>
        </div>

        {/* right: animated SVG map */}
        <Reveal delay={200} className="hidden lg:block">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <HeroMapSvg />
          </div>
        </Reveal>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[oklch(0.55_0.15_175_/_0.5)]">
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[oklch(0.55_0.15_175_/_0.5)] to-transparent" />
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════════════════════════
   ABOUT
   ═════════════════════════════════════════════════════════════════ */
function AboutSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto"
      id="about"
    >
      <Reveal>
        <h2 className="font-serif text-4xl md:text-5xl text-[oklch(0.22_0.015_50)] mb-12">
          O mně
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <blockquote className="border-l-4 border-[oklch(0.55_0.15_175)] pl-6 mb-10">
          <p className="font-serif italic text-xl md:text-2xl text-[oklch(0.35_0.015_50)] leading-relaxed">
            {about[0]}
          </p>
        </blockquote>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8">
        {about.slice(1).map((paragraph, i) => (
          <Reveal key={i} delay={150 + i * 100}>
            <p className="text-[oklch(0.40_0.01_50)] leading-relaxed text-[15px]">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════════════════════════
   EDUCATION - timeline with animated vertical path
   ═════════════════════════════════════════════════════════════════ */
function EducationSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 bg-[oklch(0.96_0.006_75)]"
      id="education"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-14">
            <GraduationCap size={28} className="text-[oklch(0.55_0.15_175)]" />
            <h2 className="font-serif text-4xl md:text-5xl text-[oklch(0.22_0.015_50)]">
              Vzdělání
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* animated vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-[oklch(0.55_0.15_175_/_0.2)]">
            <div
              className="w-full bg-[oklch(0.55_0.15_175)] animate-[grow-line_2s_ease-out_forwards]"
              style={{
                height: "100%",
                transformOrigin: "top",
                animation: "none",
              }}
            />
          </div>

          <div className="space-y-12">
            {education.map((edu, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="flex gap-6 md:gap-8">
                  {/* dot on timeline */}
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[oklch(0.55_0.15_175)] bg-[oklch(0.96_0.006_75)] flex items-center justify-center z-10 relative">
                      <div className="w-3 h-3 rounded-full bg-[oklch(0.55_0.15_175)]" />
                    </div>
                  </div>

                  {/* content card */}
                  <div className="pb-2 flex-1">
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono tracking-wider uppercase text-[oklch(0.55_0.15_175)] hover:underline"
                    >
                      {edu.institution}
                    </a>
                    <h3 className="font-serif text-xl md:text-2xl text-[oklch(0.22_0.015_50)] mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-[oklch(0.50_0.01_50)] mt-1">
                      {edu.type} &middot; {edu.location}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {edu.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-[oklch(0.40_0.01_50)]"
                        >
                          <ChevronRight
                            size={14}
                            className="text-[oklch(0.55_0.15_175)] mt-0.5 flex-shrink-0"
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

/* ═════════════════════════════════════════════════════════════════
   EXPERIENCE - hover-highlighted cards
   ═════════════════════════════════════════════════════════════════ */
function ExperienceSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12" id="experience">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-14">
            <Briefcase size={28} className="text-[oklch(0.65_0.20_45)]" />
            <h2 className="font-serif text-4xl md:text-5xl text-[oklch(0.22_0.015_50)]">
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
                className="group relative rounded-xl border border-[oklch(0.90_0.008_75)] p-6 md:p-8 transition-all duration-300"
                style={{
                  backgroundColor:
                    hoveredIdx === i
                      ? "oklch(0.55 0.15 175 / 0.04)"
                      : "oklch(0.99 0.004 75)",
                  borderColor:
                    hoveredIdx === i ? "oklch(0.55 0.15 175 / 0.3)" : undefined,
                  transform:
                    hoveredIdx === i ? "translateX(8px)" : "translateX(0)",
                }}
              >
                {/* accent bar */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-1 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      i % 2 === 0
                        ? "oklch(0.55 0.15 175)"
                        : "oklch(0.65 0.20 45)",
                    opacity: hoveredIdx === i ? 1 : 0.3,
                  }}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-serif text-xl text-[oklch(0.22_0.015_50)]">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-[oklch(0.55_0.15_175)]">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono text-[oklch(0.50_0.01_50)]">
                      {exp.period}
                    </p>
                    <p className="text-xs text-[oklch(0.55_0.01_50)]">
                      {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-[oklch(0.40_0.01_50)]"
                    >
                      <ChevronRight
                        size={14}
                        className="text-[oklch(0.55_0.15_175_/_0.6)] mt-0.5 flex-shrink-0"
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

/* ═════════════════════════════════════════════════════════════════
   PROJECTS - 3D tilt cards
   ═════════════════════════════════════════════════════════════════ */
function ProjectsSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 bg-[oklch(0.12_0.02_180)]"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl text-[oklch(0.95_0.005_80)] mb-4">
            Projekty
          </h2>
          <p className="text-[oklch(0.55_0.01_180)] mb-14 max-w-xl">
            Vybrané projekty z oblasti WebGIS, prostorových databází, computer
            vision a IoT.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={i} delay={i * 80}>
              <TiltCard className="h-full">
                <div className="h-full rounded-xl border border-[oklch(0.55_0.15_175_/_0.15)] bg-[oklch(0.14_0.02_180)] p-6 flex flex-col group hover:border-[oklch(0.55_0.15_175_/_0.4)] transition-colors duration-300">
                  <h3 className="font-serif text-lg text-[oklch(0.90_0.005_80)] mb-2 group-hover:text-[oklch(0.55_0.15_175)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[oklch(0.50_0.01_180)] mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <ul className="space-y-1 mb-4">
                    {project.features.map((f, j) => (
                      <li
                        key={j}
                        className="text-xs text-[oklch(0.45_0.01_180)] flex items-start gap-1.5"
                      >
                        <span className="text-[oklch(0.55_0.15_175)] mt-0.5">
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
                        className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-[oklch(0.55_0.15_175_/_0.12)] text-[oklch(0.55_0.15_175)] border border-[oklch(0.55_0.15_175_/_0.2)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[oklch(0.55_0.15_175)] hover:text-[oklch(0.65_0.15_175)] transition-colors mt-auto"
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

/* ═════════════════════════════════════════════════════════════════
   SKILLS - animated bars data-viz style
   ═════════════════════════════════════════════════════════════════ */
function SkillsSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 bg-[oklch(0.10_0.02_180)]"
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl text-[oklch(0.95_0.005_80)] mb-4">
            Dovednosti
          </h2>
          <p className="text-[oklch(0.55_0.01_180)] mb-14 max-w-xl">
            Technické kompetence vizualizované jako data dashboard.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {skills.map((category, catIdx) => (
            <Reveal key={catIdx} delay={catIdx * 80}>
              <div>
                <h3 className="text-sm font-mono tracking-wider uppercase text-[oklch(0.55_0.15_175)] mb-5 pb-2 border-b border-[oklch(0.55_0.15_175_/_0.2)]">
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

/* ═════════════════════════════════════════════════════════════════
   CERTIFICATIONS
   ═════════════════════════════════════════════════════════════════ */
function CertificationsSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12" id="certifications">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-14">
            <Award size={28} className="text-[oklch(0.55_0.15_175)]" />
            <h2 className="font-serif text-4xl md:text-5xl text-[oklch(0.22_0.015_50)]">
              Certifikace
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="rounded-xl border border-[oklch(0.90_0.008_75)] p-6 hover:shadow-lg transition-shadow duration-300 bg-white relative overflow-hidden group">
                {/* teal top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[oklch(0.55_0.15_175)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <p className="text-xs font-mono text-[oklch(0.55_0.15_175)] mb-1">
                  {cert.issuer} &middot; {cert.date}
                </p>
                <h3 className="font-serif text-lg text-[oklch(0.22_0.015_50)] mb-3">
                  {cert.name}
                </h3>
                <p className="text-sm text-[oklch(0.45_0.01_50)] leading-relaxed">
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

/* ═════════════════════════════════════════════════════════════════
   SERVICES - numbered blocks, alternating
   ═════════════════════════════════════════════════════════════════ */
function ServicesSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 bg-[oklch(0.96_0.006_75)]"
      id="services"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl text-[oklch(0.22_0.015_50)] mb-14">
            Služby
          </h2>
        </Reveal>

        <div className="space-y-8">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className={`flex flex-col md:flex-row gap-6 md:gap-10 items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* number block */}
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[oklch(0.55_0.15_175_/_0.1)] border border-[oklch(0.55_0.15_175_/_0.2)] flex items-center justify-center">
                  <span className="font-serif text-2xl md:text-3xl text-[oklch(0.55_0.15_175)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* content */}
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl text-[oklch(0.22_0.015_50)] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm italic text-[oklch(0.55_0.15_175)] mb-3">
                    {service.question}
                  </p>
                  <p className="text-sm text-[oklch(0.40_0.01_50)] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-full bg-[oklch(0.55_0.15_175_/_0.08)] text-[oklch(0.55_0.15_175)] border border-[oklch(0.55_0.15_175_/_0.15)]"
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

/* ═════════════════════════════════════════════════════════════════
   CONTACT - dramatic dark section with crosshair cursor
   ═════════════════════════════════════════════════════════════════ */
function ContactSection() {
  return (
    <CrosshairCursor className="bg-[oklch(0.10_0.02_180)]" id="contact">
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[oklch(0.95_0.005_80)] mb-6">
              Kontakt
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-[oklch(0.55_0.01_180)] mb-14 max-w-lg text-lg">
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
                  className="group flex items-center gap-4 rounded-xl border border-[oklch(0.55_0.15_175_/_0.15)] bg-[oklch(0.55_0.15_175_/_0.05)] p-5 hover:border-[oklch(0.55_0.15_175_/_0.4)] hover:bg-[oklch(0.55_0.15_175_/_0.1)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-[oklch(0.55_0.15_175_/_0.15)] flex items-center justify-center group-hover:bg-[oklch(0.55_0.15_175_/_0.25)] transition-colors">
                    <item.icon
                      size={20}
                      className="text-[oklch(0.55_0.15_175)]"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[oklch(0.50_0.01_180)]">
                      {item.label}
                    </p>
                    <p className="text-sm text-[oklch(0.85_0.01_180)] group-hover:text-[oklch(0.55_0.15_175)] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* pulsing location dot */}
          <Reveal delay={600}>
            <div className="flex items-center gap-3 mt-14 text-[oklch(0.50_0.01_180)]">
              <div className="relative">
                <MapPin size={18} className="text-[oklch(0.55_0.15_175)]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[oklch(0.55_0.15_175)]">
                  <div className="absolute inset-0 rounded-full bg-[oklch(0.55_0.15_175)] animate-ping" />
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

/* ═════════════════════════════════════════════════════════════════
   FOOTER
   ═════════════════════════════════════════════════════════════════ */
function FooterSection() {
  return (
    <footer className="bg-[oklch(0.08_0.02_180)] border-t border-[oklch(0.55_0.15_175_/_0.1)] py-10 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[oklch(0.40_0.01_180)]">
        <div className="text-center md:text-left">
          <p className="font-medium text-[oklch(0.60_0.01_180)]">
            {footer.name}
          </p>
          <p>
            {footer.address} &middot; {footer.zip}
          </p>
          <p>IČO: {footer.ico}</p>
        </div>
        <p className="font-mono text-[oklch(0.35_0.01_180)]">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
