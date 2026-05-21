import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  ExternalLink,
  MapPin,
  Phone,
  Award,
  GraduationCap,
  Sparkles,
  Code2,
  Database,
  Brain,
  Heart,
  Wrench,
  ArrowDown,
} from "lucide-react";
import avatar from "../assets/avatar.jpeg";
import doodle from "../assets/doodle1.png";
import heroBg from "../assets/hero.png";
import falls from "../assets/falls.jpg";
import githubIcon from "../assets/git.png";
import travel from "../assets/share.jpeg";
import ecommerce from "../assets/ecom.png";
import leeds from "../assets/lead.jpeg";
import plants from "../assets/p.png";
import meshbg from "../assets/gradient-mesh.jpg";
import workspace from "../assets/workspace.jpg";
import linkedinIcon from "../assets/linkedin.png";
import cv from "../assets/sansalacv1.pdf";
import cod from "../assets/cod.svg";
import topSvg from "../assets/search.svg";

// export const Route = createFileRoute("/")({
//   component: Portfolio,
// });

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll(".fade-in-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const experience = [
  {
    role: "Software Engineer (Remote)",
    company: "2xDev",
    location: "California, USA",
    period: "Nov 2025 — Present",
    accent: "from-indigo-500 to-violet-500",
    points: [
      "Built a scalable Next.js travel management app with improved performance and responsive design.",
      "Shipped frontend and backend features that lifted engagement and usability.",
      "Optimized performance with code splitting and efficient rendering patterns.",
    ],
  },
  {
    role: "Junior Full Stack Developer (Contract)",
    company: "Mazz Digital LLC",
    location: "UAE",
    period: "Jun 2025 — Nov 2025",
    accent: "from-pink-500 to-rose-500",
    points: [
      "Developed and maintained full-stack features using React and Laravel across client platforms.",
      "Built and optimized RESTful APIs supporting order processing and real-time data flow.",
      "Improved e-commerce performance, responsiveness, and reliability.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Amerck Inc",
    location: "Colombo, Sri Lanka",
    period: "Sep 2024 — Apr 2025",
    accent: "from-amber-500 to-orange-500",
    points: [
      "Developed responsive, reusable UI components in React for scalable web apps.",
      "Improved UI consistency, usability, and overall performance.",
      "Collaborated with backend teams to ensure seamless API integration.",
    ],
  },
];

const projects = [
  {
    title: "Travel Booking System",
    description:
      "Full-stack travel platform with dynamic search, filtering, and secure auth powered by Supabase.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    image: travel,
    tone: "from-sky-500/20 to-cyan-500/20",
    github: "https://github.com/sansala752/sharetravellerV1",
  },
  {
    title: "E-commerce Handling System",
    description:
      "Full-stack e-commerce platform for products, orders, and customers with React + Laravel via Inertia.js.",
    tags: ["React", "Laravel", "Inertia.js", "MySQL"],
    image: ecommerce,
    tone: "from-orange-500/20 to-pink-500/20",
    github: "https://github.com/sansala752/e-comhanding",
  },
   {
    title: "Lead Finding System Landing Page",
    description:
      "Modern landing page for a lead generation system built using React, TypeScript, and Tailwind CSS with responsive UI and clean UX design.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: leeds,
    tone: "from-indigo-500/20 to-purple-500/20",
    github: "https://github.com/sansala752/LeadsAppLandingPage1",
  },
   {
    title: "Plant Selling Website",
    description:
      "E-commerce website for selling plants, with product listing, UI interactions, and cart-style layout.",
    tags: ["HTML", "CSS", "JavaScript", "SQL"],
    image: plants,
    tone: "from-indigo-500/20 to-purple-500/20",
    github: "https://github.com/sansala752/PlantShop-MerryBotanics-",
  },
];

const skills = [
  {
    label: "Languages",
    icon: Code2,
    accent: "from-indigo-500 to-violet-500",
    items: ["JavaScript", "TypeScript", "PHP", "Java", "Python", "C / C++"],
  },
  {
    label: "Frameworks & Libraries",
    icon: Sparkles,
    accent: "from-pink-500 to-rose-500",
    items: ["React", "Next.js", "Laravel", "Express.js", "Tailwind CSS", "TensorFlow"],
  },
  {
    label: "Databases",
    icon: Database,
    accent: "from-emerald-500 to-teal-500",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    label: "AI & Tools",
    icon: Brain,
    accent: "from-amber-500 to-orange-500",
    items: ["TensorFlow", "FastAPI", "Git", "Figma", "Vercel", "Android Studio"],
  },
];

const stats = [
  { label: "Years coding", value: "3+" },
  { label: "Shipped projects", value: "10+" },
  { label: "Companies worked with", value: "3" },
  { label: "Model accuracy", value: "~90%" },
];

function Portfolio() {
  const ref = useReveal();
 const videoLink = "https://drive.google.com/drive/folders/14bOrYdGZl5xLOpe33XDCWBPC2Ne25fEq?usp=sharing";
  return (
    <div ref={ref} className="min-h-screen bg-background text-foreground antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
           <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
              sansala<span className="text-gradient">.dev</span>
            </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#experience" className="transition-colors hover:text-foreground">Experience</a>
            <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
            <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-gradient-brand hidden rounded-full px-4 py-2 text-xs font-medium text-white shadow-lg shadow-indigo-500/20 transition-transform hover:scale-105 sm:inline-flex"
          >
            Get in touch
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* gradient blobs */}
          <div
            aria-hidden
            className="animate-blob absolute -top-32 -left-24 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-indigo-400/40 via-violet-400/30 to-transparent blur-3xl"
          />
          <div
            aria-hidden
            className="animate-blob absolute -top-20 right-[-10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-pink-400/40 via-rose-400/30 to-transparent blur-3xl"
            style={{ animationDelay: "-6s" }}
          />
          <div
            aria-hidden
            className="animate-blob absolute bottom-[-15%] left-[20%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-amber-300/40 via-orange-300/30 to-transparent blur-3xl"
            style={{ animationDelay: "-12s" }}
          />

          <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-6 sm:pt-16 sm:pb-16">
            <div className="grid items-center gap-14 md:grid-cols-[1.4fr_1fr]">
              <div className="fade-in-up">
                <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  Sansala<br />
                  <span className="text-gradient">Ranasinghe.</span>
                </h1>
                <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                  Full-Stack Developer · AI &amp; Machine Learning Enthusiast
                </p>
                <p className="mt-3 max-w-xl text-pretty text-lg text-foreground/80 sm:text-xl">
                  I build scalable web applications and AI-powered systems with React, Next.js, Laravel, and TensorFlow.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-indigo-500" /> Colombo, Sri Lanka</span>
                  <span className="inline-flex items-center gap-1.5"><Phone className="h-4 w-4 text-pink-500" /> +94 70 119 1596</span>
                </div>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="bg-gradient-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-105"
                  >
                    View Projects
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <a
                    href={cv}
                    download="Sansala_Ranasinghe_CV.pdf"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-accent"
                  >
                    Download CV
                    <ArrowDown className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="fade-in-up justify-self-center md:justify-self-end">
                <div className="relative">
                  <div className="bg-gradient-brand absolute -inset-2 rounded-full opacity-70 blur-2xl" aria-hidden />
                 <div className="relative">
                    {/* Doodle background */}
                    <img
                      src={doodle}
                      alt="Decorative doodle"
                      className="absolute -top-11 -right-16 w-32 h-32 opacity-80 pointer-events-none z-0 
             brightness-0 invert sepia hue-rotate-180 saturate-200"
                    />

                    {/* Gradient border */}
                    <div className="p-[3px] rounded-full bg-gradient-to-br from-indigo-500 via-pink-500 to-amber-500">
                      
                      {/* Avatar */}
                      <img
                        src={avatar}
                        alt="Portrait of Sansala Ranasinghe"
                        className="relative z-10 h-64 w-64 sm:h-80 sm:w-80 rounded-full object-cover ring-4 ring-background"
                      />
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>

            {/* stats */}
            <div className="fade-in-up mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-card/70 p-5 backdrop-blur"
                >
                  <p className="text-gradient text-3xl font-semibold tracking-tight">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       <section id="experience" className="border-t border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-24">

            <div className="fade-in-up mb-12 relative">

              <p className="text-xs font-medium uppercase tracking-widest text-indigo-500">
                Experience
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Where I’ve worked
              </h2>

            </div>
            <div className="space-y-5">
              {experience.map((job) => (
                <article
                  key={job.role + job.company}
                  className="fade-in-up relative grid gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 md:grid-cols-[220px_1fr] md:p-8"
                >
                  <div
                    aria-hidden
                    className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${job.accent}`}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{job.company}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{job.location}</p>
                    <span
                      className={`mt-3 inline-block rounded-full bg-gradient-to-r ${job.accent} bg-clip-text px-0 text-xs font-medium text-transparent`}
                    >
                      {job.period}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${job.accent}`} />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section id="projects" className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="fade-in-up mb-10">
              <p className="text-xs font-medium uppercase tracking-widest text-emerald-500">Featured Project</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                AI Waterfall Detection
              </h2>
            </div>

            <div className="fade-in-up group overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              <div className="relative aspect-[16/8] w-full overflow-hidden">
                <img
                  src={falls}
                  alt="Featured project preview"
                  width={1536}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-white/80">Sri Lanka · AI</p>
                    <h3 className="mt-1 text-2xl font-semibold sm:text-3xl">Waterfall Explorer</h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur">
                    <Award className="h-3.5 w-3.5" /> 2nd Place — Annual Research Conference SLIIT 2025
                  </span>
                </div>
              </div>
              <div className="grid gap-6 p-8 md:grid-cols-[1.6fr_1fr] md:p-10">
                <div>
                  <p className="text-base leading-relaxed text-foreground/80">
                    AI-powered web app that detects and classifies Sri Lankan waterfalls from a
                    single image. A TensorFlow model served via FastAPI reaches ~90% accuracy,
                    with a React + Node.js frontend that surfaces location and visitor info instantly.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["React", "Node.js", "Express", "MongoDB", "TensorFlow", "FastAPI"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-start gap-3 md:justify-end">
                  <a
                    href={videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-brand inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                 <a
                    href="https://github.com/sansala752/FallsExplorerSL"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                  >
                    <img
                      src={githubIcon}
                      alt="GitHub"
                      className="w-4 h-4"
                    />
                    GitHub
                  </a>

                  
                </div>
              </div>
            </div>

            {/* Other projects */}
            <div className="mt-20">
              <div className="fade-in-up mb-8">
                <p className="text-xs font-medium uppercase tracking-widest text-amber-500">More work</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Selected projects</h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {projects.map((p) => (
                  <article
                    key={p.title}
                    className="fade-in-up group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.tone} opacity-60 mix-blend-multiply`} />
                      <img
                        src={p.image || heroBg}
                        alt={`${p.title} preview`}
                        width={1280}
                        height={960}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="text-lg font-semibold tracking-tight">{p.title}</h4>
                        <div className="flex shrink-0 gap-2 text-muted-foreground">
                          {p.github ? (
                            <a href={p.github} target="_blank" rel="noopener noreferrer">
                              <img src={githubIcon} className="w-4 h-4" alt="GitHub" />
                            </a>
                          ) : null}
                        </div>
                      </div>
                      <p className="mt-1.5 text-sm text-muted-foreground">{p.description}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
          <section
              id="skills"
              className="relative overflow-hidden border-t border-border/60"
              style={{
                backgroundImage: `url(${meshbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
          <div
            aria-hidden
            className="absolute right-[-10%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-400/20 to-pink-400/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-24">
            <div className="fade-in-up mb-10">
              <p className="text-xs font-medium uppercase tracking-widest text-pink-800">Skills</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Tools I build with</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((g, i) => (
            <div
              key={g.label}
              className="reveal card-hover p-5 rounded-xl border border-border bg-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {g.label}
              </p>
              <ul className="mt-4 space-y-2">
                {g.items.map((i) => (
                  <li key={i} className="text-sm flex items-center gap-2 group/item">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand group-hover/item:scale-150 transition-transform" />
                    <span className="group-hover/item:text-primary transition-colors">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* About / Education */}
        <section id="about" className="border-t border-border/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_1fr] md:items-center">
            <div className="fade-in-up relative">
              <div className="bg-gradient-brand absolute -inset-2 rounded-3xl opacity-30 blur-2xl" aria-hidden />
              <img
                src={workspace}
                alt="Developer workspace"
                width={1536}
                height={1024}
                loading="lazy"
                className="relative rounded-3xl border border-border object-cover shadow-xl"
              />
            </div>
            <div className="fade-in-up">
              <p className="text-xs font-medium uppercase tracking-widest text-violet-500">About</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Building at the intersection of <span className="text-gradient">web &amp; AI</span>.
              </h2>
              <p className="mt-6 text-pretty text-base leading-relaxed text-foreground/80">
                I&rsquo;m a Computer Science undergraduate from Sri Lanka with hands-on experience
                shipping full-stack web apps and AI-powered systems across teams in the US, UAE,
                and Sri Lanka. I care about clean architecture, scalable systems, and shipping
                products that feel fast and reliable.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-indigo-500">
                    <GraduationCap className="h-4 w-4" /> Education
                  </div>
                  <p className="mt-2 text-sm font-semibold">BSc (Hons) Computer Science</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    University of Bedfordshire, UK — offered by SLIIT City Uni
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-pink-500">
                    <Award className="h-4 w-4" /> Achievement
                  </div>
                  <p className="mt-2 text-sm font-semibold">2nd Place — Research Poster Presentation</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    4th Annual Research Conference of SLIIT City Uni, 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden border-t border-border/60">
          <div aria-hidden className="bg-gradient-brand absolute inset-0 opacity-10" />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-400/30 via-pink-400/30 to-amber-400/30 blur-3xl"
          />
           {/* Bottom Left SVG */}
          <img
            src={cod}
            alt="Decoration"
            className="absolute -bottom-6 left-6 w-[24rem] opacity-60 pointer-events-none"
          />

          {/* Top Right SVG */}
          <img
            src={topSvg}
            alt="Decoration"
            className="absolute top-0 right-10 w-[19rem] opacity-50 pointer-events-none scale-x-[-1]"
          />
          <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
            <p className="fade-in-up text-xs font-medium uppercase tracking-widest text-indigo-500">Contact</p>
            <h2 className="fade-in-up mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&rsquo;s build <span className="text-gradient">something</span>.
            </h2>
            <p className="fade-in-up mt-4 text-muted-foreground">
              Open to full-time roles, freelance projects, and interesting collaborations.
            </p>
            <div className="fade-in-up mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:sansalaranasinghe715@gmail.com"
                className="bg-gradient-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-105"
              >
                <Mail className="h-4 w-4" /> sansalaranasinghe715@gmail.com
              </a>
              <a
                  href="https://github.com/sansala752"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="w-4 h-4"
                  />
                  GitHub
                </a>
               <a
                  href="https://github.com/sansala752"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="w-4 h-4"
                  />
                  LinkedIn
                </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
          <p className="flex items-center gap-2">
            © {new Date().getFullYear()} Sansala Ranasinghe
          </p>
          <p>Designed and built with <Heart className="inline h-3 w-3" /> &amp; care. | <Wrench className="inline h-3 w-3" /> React + Tailwind</p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
