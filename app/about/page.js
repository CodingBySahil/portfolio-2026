import {
  FaAward,
  FaBrain,
  FaChalkboardTeacher,
  FaChartLine,
  FaCode,
  FaCloud,
  FaEye,
  FaGlobe,
  FaHeart,
  FaLaptopCode,
  FaLightbulb,
  FaMoon,
  FaRocket,
  FaShieldAlt,
  FaStar,
  FaSun,
  FaUsers,
  FaCoffee,
  FaPuzzlePiece,
} from "react-icons/fa";
import {
  HiAcademicCap,
  HiBadgeCheck,
  HiOutlineCheckCircle,
  HiOutlineCursorClick,
  HiOutlineInbox,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiGithub,
  SiGit,
  SiOpenaigym,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

const stats = [
  {
    label: "Years Experience",
    value: "8+",
    icon: FaChartLine,
    hue: "from-sky-500 to-indigo-500",
  },
  {
    label: "Projects Delivered",
    value: "75+",
    icon: FaLaptopCode,
    hue: "from-fuchsia-500 to-pink-500",
  },
  {
    label: "Students Trained",
    value: "1.2K+",
    icon: FaUsers,
    hue: "from-emerald-500 to-cyan-500",
  },
  {
    label: "Certifications",
    value: "18+",
    icon: FaAward,
    hue: "from-amber-500 to-orange-500",
  },
];

const careerTimeline = [
  {
    company: "Nova Labs",
    role: "Senior Full Stack Engineer",
    period: "2025 - Present",
    description:
      "Leading cross-functional teams to build scalable SaaS products, AI-enabled dashboards, and developer tooling with high performance and polished design.",
    icon: FaRocket,
  },
  {
    company: "CodeCraft Academy",
    role: "AI Instructor & Mentor",
    period: "2023 - Present",
    description:
      "Designing immersive AI courses, mentoring hundreds of students, and translating complex concepts into career-ready learnings.",
    icon: FaChalkboardTeacher,
  },
  {
    company: "ByteWave Solutions",
    role: "MERN Developer",
    period: "2021 - 2024",
    description:
      "Delivered end-to-end applications with React, Node.js, and MongoDB while improving architecture, testing, and deployment workflows.",
    icon: FaCode,
  },
  {
    company: "Frontier Learning",
    role: "Computer Science Teacher",
    period: "2019 - 2021",
    description:
      "Shaped curriculum for modern web development, data structures, and AI fundamentals for aspiring engineers.",
    icon: HiAcademicCap,
  },
];

const educationJourney = [
  {
    title: "Master of Computer Science",
    institution: "University of Technology",
    date: "2017 - 2019",
    icon: HiAcademicCap,
  },
  {
    title: "Full Stack Web Development",
    institution: "Professional Bootcamp",
    date: "2020",
    icon: FaCode,
  },
  {
    title: "AI & Machine Learning",
    institution: "Advanced Certification",
    date: "2022",
    icon: FaBrain,
  },
  {
    title: "Modern UX Design",
    institution: "Design Sprint Program",
    date: "2023",
    icon: HiOutlineSparkles,
  },
];

const philosophy = [
  {
    title: "Clean Code",
    description:
      "Readable, maintainable, and testable code that scales with teams.",
    icon: FaCode,
  },
  {
    title: "Performance",
    description: "Fast experiences that respect users and boost engagement.",
    icon: FaRocket,
  },
  {
    title: "Accessibility",
    description: "Inclusive interfaces designed for every user and device.",
    icon: FaEye,
  },
  {
    title: "Security",
    description: "Built with privacy, data protection, and trust in mind.",
    icon: FaShieldAlt,
  },
  {
    title: "Scalability",
    description: "Architecture that grows without compromise.",
    icon: FaCloud,
  },
  {
    title: "Modern UI",
    description: "Polished interactions, crisp layout, and delightful motion.",
    icon: HiOutlineCursorClick,
  },
];

const coreValues = [
  { title: "Integrity", icon: FaHeart },
  { title: "Innovation", icon: FaLightbulb },
  { title: "Collaboration", icon: FaUsers },
  { title: "Curiosity", icon: FaBrain },
  { title: "Leadership", icon: HiBuildingOffice2 },
  { title: "Growth", icon: HiBadgeCheck },
  { title: "Empathy", icon: FaSun },
  { title: "Discipline", icon: FaMoon },
];

const skillsData = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 92 },
  { name: "Node.js", level: 90 },
  { name: "MongoDB", level: 88 },
  { name: "TypeScript", level: 82 },
  { name: "Tailwind CSS", level: 96 },
  { name: "AI / ML", level: 84 },
  { name: "Git & GitHub", level: 96 },
];

const processSteps = [
  { title: "Research", color: "from-blue-500 to-cyan-500" },
  { title: "Planning", color: "from-fuchsia-500 to-pink-500" },
  { title: "Design", color: "from-emerald-500 to-lime-500" },
  { title: "Development", color: "from-orange-500 to-amber-500" },
  { title: "Testing", color: "from-sky-500 to-indigo-500" },
  { title: "Deployment", color: "from-violet-500 to-fuchsia-500" },
  { title: "Maintenance", color: "from-slate-500 to-slate-700" },
];

const funFacts = [
  {
    title: "Coffee Enthusiast",
    description: "Crafting ideas with a fresh brew and long coding sessions.",
    icon: FaCoffee,
    accent: "bg-amber-100 text-amber-700",
  },
  {
    title: "Problem Solver",
    description: "Turning complex requirements into clear solutions.",
    icon: FaPuzzlePiece,
    accent: "bg-sky-100 text-sky-700",
  },
  {
    title: "Night Coder",
    description: "Most creative work happens after sunset and quiet focus.",
    icon: FaMoon,
    accent: "bg-violet-100 text-violet-700",
  },
  {
    title: "Mentor",
    description: "Empowering learners with hands-on guidance and feedback.",
    icon: FaUsers,
    accent: "bg-emerald-100 text-emerald-700",
  },
];

const achievements = [
  { title: "AI Workshops", value: "35+", icon: FaChalkboardTeacher },
  { title: "Hackathon Awards", value: "12", icon: FaStar },
  { title: "Freelance Clients", value: "40+", icon: FaGlobe },
  { title: "Open Source", value: "28+", icon: SiGithub },
];

const techStack = [
  { label: "React", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Express", icon: SiExpress },
  { label: "MongoDB", icon: SiMongodb },
  { label: "JavaScript", icon: SiJavascript },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Tailwind", icon: SiTailwindcss },
  { label: "Git", icon: SiGit },
  { label: "GitHub", icon: SiGithub },
  { label: "OpenAI", icon: SiOpenaigym },
];

const testimonials = [
  {
    quote:
      "Sahil designs systems with rare clarity, balancing speed, scale, and refinement. His mentorship accelerated our team in weeks.",
    name: "Ayesha Khan",
    role: "Product Lead",
  },
  {
    quote:
      "From architecture to teaching, he demonstrates an elevated level of craft. His solutions are purpose-driven and beautifully executed.",
    name: "Omar Farooq",
    role: "CTO",
  },
  {
    quote:
      "My students consistently praise his ability to explain AI concepts with confidence and energy. His courses are transformative.",
    name: "Sara Malik",
    role: "Learning Director",
  },
];

const interests = [
  "Reading",
  "Teaching",
  "AI Research",
  "Fitness",
  "Learning",
  "Problem Solving",
  "Travel",
  "Product Strategy",
];

function StatCard({ icon: Icon, label, value, hue }) {
  return (
    <div className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/90 p-6 shadow-glow transition duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-slate-800/95 sm:p-8">
      <div
        className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${hue} text-white shadow-xl shadow-slate-900/20`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <p className="text-4xl font-semibold text-white">{value}</p>
      <p className="mt-3 max-w-[16rem] text-sm text-slate-300">{label}</p>
      <div className="pointer-events-none absolute -right-10 top-6 h-32 w-32 rounded-full bg-white/10 blur-3xl opacity-30 transition duration-500 group-hover:opacity-60" />
    </div>
  );
}

function TimelineItem({ icon: Icon, title, subtitle, description, date }) {
  return (
    <li className="group relative pl-12 sm:pl-16">
      <div className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white ring-4 ring-slate-950/80 shadow-glow sm:h-12 sm:w-12">
        <Icon className="h-5 w-5" />
      </div>
      <span className="mb-2 inline-flex rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-1 text-xs uppercase tracking-[0.32em] text-sky-100 shadow-lg shadow-sky-500/20">
        {date}
      </span>
      <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-1 text-sm font-medium text-slate-400">{subtitle}</p>
      <p className="mt-4 text-slate-300 leading-relaxed">{description}</p>
    </li>
  );
}

function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-[1.85rem] border border-slate-800/80 bg-slate-950/80 p-6 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-slate-500/40 hover:bg-slate-900/95">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-sky-300 shadow-xl shadow-sky-500/10">
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}

function SkillMeter({ name, level }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm font-semibold text-slate-200">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function TechLogo({ icon: Icon, label }) {
  return (
    <div className="group flex items-center justify-center rounded-3xl border border-slate-800/80 bg-slate-950/80 px-5 py-4 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/95">
      <Icon className="h-6 w-6 text-cyan-400 transition duration-300 group-hover:text-cyan-200" />
      <span className="ml-3 text-sm font-medium">{label}</span>
    </div>
  );
}

function TestimonialCard({ quote, name, role }) {
  return (
    <div className="group relative rounded-[2rem] border border-white/10 bg-slate-950/85 p-8 shadow-glow backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30">
      <div className="absolute -right-6 top-8 hidden h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl md:block" />
      <p className="text-lg leading-8 text-slate-300">“{quote}”</p>
      <div className="mt-6 border-t border-slate-800 pt-5">
        <p className="font-semibold text-white">{name}</p>
        <p className="mt-1 text-sm text-slate-400">{role}</p>
      </div>
    </div>
  );
}

function InterestCard({ label }) {
  return (
    <div className="group rounded-[1.6rem] border border-slate-800/80 bg-slate-950/80 px-5 py-6 text-center text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900/95">
      <p className="text-base font-semibold">{label}</p>
      <span className="mt-3 block h-1.5 w-16 rounded-full bg-gradient-to-r from-sky-400 to-purple-500 opacity-0 transition duration-300 group-hover:opacity-100" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden bg-[#030712] px-6 pb-24 pt-24 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_20%),linear-gradient(180deg,rgba(15,23,42,.95),rgba(15,23,42,.9))]" />
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-10 top-28 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute left-8 bottom-20 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90">
                  About
                </p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  Building digital products with clarity, speed, and trust.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  I’m Muhammad Sahil — a premium Full Stack MERN developer, AI
                  instructor, and computer science teacher delivering modern
                  experiences, elegant systems, and impactful learning journeys.
                </p>
              </div>

              <div className="space-y-5">
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-3 text-sm text-slate-300 shadow-lg shadow-slate-900/30">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
                    01
                  </span>
                  <span>
                    Premium expertise in full stack, AI, and teaching.
                  </span>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-3 text-sm text-slate-300 shadow-lg shadow-slate-900/30">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white">
                    02
                  </span>
                  <span>
                    Design systems with performance, accessibility, and polish.
                  </span>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-3 text-sm text-slate-300 shadow-lg shadow-slate-900/30">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-500 text-white">
                    03
                  </span>
                  <span>
                    Teach teams and students to build with confidence and
                    consistency.
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  className="btn-primary inline-flex items-center gap-2 rounded-3xl px-8 py-4 text-sm font-semibold shadow-xl shadow-cyan-500/20 hover:-translate-y-0.5"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-3xl border border-slate-700/80 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-slate-800/90"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="relative mx-auto flex max-w-lg items-center justify-center">
              <div className="absolute -left-12 top-12 h-44 w-44 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="absolute -right-10 bottom-10 h-28 w-28 rounded-full bg-pink-500/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow backdrop-blur-xl">
                <div className="absolute inset-x-6 top-6 h-24 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 to-blue-500/0 blur-2xl" />
                <div className="absolute inset-6 rounded-[2rem] border border-white/10" />
                <div className="relative z-10 flex h-[420px] flex-col items-center justify-center gap-6 rounded-[2rem] bg-slate-950/75 p-8 text-center shadow-2xl shadow-slate-950/30">
                  <div className="h-40 w-40 rounded-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 shadow-[0_25px_80px_rgba(0,0,0,0.45)]" />
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">
                      Signature Profile
                    </p>
                    <p className="text-2xl font-semibold text-white">
                      Muhammad Sahil
                    </p>
                    <p className="max-w-md text-sm leading-6 text-slate-400">
                      Creative engineer crafting AI-enabled products, teaching
                      future developers, and building systems that scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr]">
          <div className="space-y-8 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-10 shadow-glow">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
                My Story
              </p>
              <h2 className="text-4xl font-semibold text-white">
                A journey from curiosity to code and classroom.
              </h2>
            </div>
            <div className="space-y-6 text-slate-300">
              <p>
                My story began with a fascination for how software shapes
                experiences. I started programming to understand the logic
                behind the products I admired and quickly realized the
                transformational power of building with code.
              </p>
              <p>
                Over time, that curiosity grew into a purpose: creating elegant
                web products, teaching others how to think like engineers, and
                delivering AI-driven solutions that help teams move faster and
                make smarter decisions.
              </p>
              <p>
                Today, I blend development, design, and education in every
                project. I build systems that feel premium, teach concepts that
                feel intuitive, and mentor learners so they can thrive in modern
                engineering teams.
              </p>
              <p>
                Looking ahead, I’m focused on shaping scalable products,
                empowering the next generation of developers, and bringing
                meaningful AI experiences to everyday users.
              </p>
            </div>
          </div>

          <div className="grid gap-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glow">
            <div className="rounded-[1.8rem] bg-slate-900/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.4)]">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Milestone
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                From classroom lessons to premium product launches.
              </h3>
              <p className="mt-4 text-slate-300 leading-7">
                I take complex systems, simplify their structure, and bring them
                to life with interactive, accessible interfaces that feel
                effortless.
              </p>
            </div>
            <div className="grid gap-4">
              {["Why I started?", "What drives me?", "Where I’m headed?"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-[1.6rem] border border-slate-800/90 bg-slate-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30"
                  >
                    <h4 className="font-semibold text-white">{item}</h4>
                    <p className="mt-3 text-slate-400 leading-7">
                      {item === "Why I started?"
                        ? "I saw software as a tool to solve real problems and build experiences that matter."
                        : item === "What drives me?"
                          ? "A desire to create clarity, efficiency, and delight for teams and learners."
                          : "A future where technology is intelligent, inclusive, and intentionally designed."}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="grid gap-8">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">
              Professional highlights
            </p>
            <h2 className="text-4xl font-semibold text-white">
              Premium metrics that tell the story.
            </h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              A modern engineer and educator who delivers polished systems,
              proven outcomes, and measurable impact.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <StatCard key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-10 shadow-glow">
            <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white shadow-lg shadow-sky-500/20">
              Mission
            </div>
            <h3 className="text-3xl font-semibold text-white">
              Design systems that inspire trust and accelerate delivery.
            </h3>
            <p className="text-slate-300 leading-7">
              I help teams move from ambitious ideas to well-engineered products
              by combining clear architecture, user-first design, and continuous
              learning.
            </p>
            <ul className="space-y-4 text-slate-400">
              {[
                "Build products with clarity.",
                "Keep interfaces accessible and delightful.",
                "Deliver value with speed and precision.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-10 shadow-glow">
            <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white shadow-lg shadow-fuchsia-500/20">
              Vision
            </div>
            <h3 className="text-3xl font-semibold text-white">
              Empower teams and learners with modern, meaningful technology.
            </h3>
            <p className="text-slate-300 leading-7">
              I envision software that is intuitive, intelligent, and
              inclusive—built for humans, powered by data, and maintained with
              pride.
            </p>
            <ul className="space-y-4 text-slate-400">
              {[
                "Create products people love.",
                "Teach concepts that stick.",
                "Advance engineering with integrity.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-fuchsia-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">
            Career timeline
          </p>
          <h2 className="text-4xl font-semibold text-white">
            Experience shaped by impact, teaching, and growth.
          </h2>
        </div>
        <div className="relative mt-12 before:absolute before:left-5 before:top-14 before:h-[calc(100%-4rem)] before:w-px before:bg-gradient-to-b before:from-cyan-500 before:to-transparent before:opacity-40 sm:before:left-6 lg:before:left-10">
          <ul className="space-y-10">
            {careerTimeline.map((item) => (
              <TimelineItem key={item.company} {...item} />
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-10 shadow-glow">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
                Education journey
              </p>
              <h2 className="text-4xl font-semibold text-white">
                A balanced path of study, certifications, and applied learning.
              </h2>
            </div>
            <div className="space-y-5">
              {educationJourney.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.85rem] border border-slate-800/80 bg-slate-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 shadow-lg shadow-cyan-500/10">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-10 shadow-glow">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
              Teaching journey
            </p>
            <h2 className="text-4xl font-semibold text-white">
              A teaching philosophy rooted in clarity, creativity, and outcome.
            </h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Computer Science Instructor",
                  detail:
                    "Build core computing skills, algorithmic thinking, and confident problem solving with modern pedagogy.",
                },
                {
                  title: "Web Development Trainer",
                  detail:
                    "Teach full stack workflows, component architecture, and production-grade tooling from day one.",
                },
                {
                  title: "AI Instructor",
                  detail:
                    "Translate machine learning concepts into practical applications, experiments, and ethical practices.",
                },
                {
                  title: "Mentor",
                  detail:
                    "Support learners through personalized guidance, feedback, and career-focused projects.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] border border-slate-800/80 bg-slate-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-500/30"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-400 leading-7">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">
            Technical philosophy
          </p>
          <h2 className="text-4xl font-semibold text-white">
            Principles that shape every line of code.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {philosophy.map((item) => (
            <ValueCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">
            Core values
          </p>
          <h2 className="text-4xl font-semibold text-white">
            Values that guide collaboration and growth.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {coreValues.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-800/80 bg-gradient-to-br from-slate-950 to-slate-900 p-6 text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-cyan-300 transition duration-300 group-hover:bg-cyan-500/15">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Create trust, momentum, and quality in every project and
                interaction.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">
            Skills snapshot
          </p>
          <h2 className="text-4xl font-semibold text-white">
            Capabilities across frontend, backend, AI, and dev tools.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_0.65fr]">
          <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-10 shadow-glow">
            {skillsData.slice(0, 4).map((skill) => (
              <SkillMeter key={skill.name} {...skill} />
            ))}
          </div>
          <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-10 shadow-glow">
            {skillsData.slice(4).map((skill) => (
              <SkillMeter key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">
            Development process
          </p>
          <h2 className="text-4xl font-semibold text-white">
            A refined workflow from discovery to delivery.
          </h2>
        </div>
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-6 shadow-glow">
          <div className="flex min-w-full gap-4 px-2 py-6 sm:justify-between">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="min-w-[12rem] rounded-[1.75rem] border border-slate-800/80 bg-slate-900/85 p-6 text-center shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-1"
              >
                <div
                  className={`mx-auto mb-4 h-12 w-12 rounded-full bg-gradient-to-br ${step.color} shadow-xl shadow-slate-950/20`}
                />
                <p className="text-base font-semibold text-white">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">
            Fun facts
          </p>
          <h2 className="text-4xl font-semibold text-white">
            Small stories that reveal creative perspective.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {funFacts.map((item) => (
            <div
              key={item.title}
              className={`group rounded-[1.75rem] border border-slate-800/80 bg-slate-950/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900/95`}
            >
              <div
                className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl ${item.accent}`}
              >
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-400 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">
            Achievements
          </p>
          <h2 className="text-4xl font-semibold text-white">
            Recognition across teaching, development, and community.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="group rounded-[1.75rem] border border-slate-800/80 bg-slate-950/90 p-8 text-white transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900/95"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-cyan-300 shadow-lg shadow-cyan-500/10">
                <item.icon className="h-6 w-6" />
              </div>
              <p className="text-5xl font-semibold">{item.value}</p>
              <p className="mt-4 text-sm text-slate-400">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">
            Technologies I love
          </p>
          <h2 className="text-4xl font-semibold text-white">
            Modern tools that power premium products.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {techStack.map((item) => (
            <TechLogo key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">
            Testimonials preview
          </p>
          <h2 className="text-4xl font-semibold text-white">
            Trusted by product leaders, teams, and learners.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">
            Personal interests
          </p>
          <h2 className="text-4xl font-semibold text-white">
            More than code: curiosity, teaching, and growth.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {interests.map((item) => (
            <InterestCard key={item} label={item} />
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-950/90 to-fuchsia-500/10 px-6 py-16 sm:px-10 lg:px-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_12%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.14),_transparent_20%)] opacity-80" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-6 text-white">
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/80">
                Let’s build something amazing together
              </p>
              <h2 className="text-5xl font-semibold leading-tight">
                Create modern digital experiences with confidence.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-200">
                If you’re looking for a partner who can lead product strategy,
                build elegant systems, and help teams grow, let’s connect.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:codingbysahil@gmail.com"
                className="btn-primary inline-flex items-center justify-center rounded-3xl px-8 py-4 text-sm font-semibold shadow-xl shadow-cyan-500/20"
              >
                Hire Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-3xl border border-white/15 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white/15"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
