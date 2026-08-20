'use client'

import {
  ArrowUpRight,
  Mail,
  Link2,
  Code2,
  ChevronDown,
  Cpu,
  Factory,
  Plane,
  Wrench,
  Award,
  ExternalLink
} from 'lucide-react'

const projects = [
  {
    n: '01',
    title: 'Resin Intelligence',
    tag: 'INDUSTRY 4.0 · AI/NIR · PROCESS ENGINEERING',
    desc: 'AI/NIR-based real-time resin monitoring concept for wet filament winding, replacing manual verification with process intelligence, deviation detection and proposed closed-loop control.',
    stack: ['NIR Spectroscopy', 'Edge AI', 'PLC Control', 'Process Optimization']
  },
  {
    n: '02',
    title: 'Slotted Ducted Decelerator',
    tag: 'CFD · RE-ENTRY AERODYNAMICS',
    desc: 'CFD and experimental investigation of a slotted ducted decelerator, evaluating aerodynamic performance and drag characteristics for re-entry applications.',
    stack: ['ANSYS CFD', 'Experimental Validation', 'Aerodynamics']
  },
  {
    n: '03',
    title: 'RC Aircraft Design & Fabrication',
    tag: 'AERODYNAMICS · DESIGN · TESTING',
    desc: 'Designed, fabricated and tested an RC aircraft, applying aerodynamic design, practical manufacturing and flight-testing principles.',
    stack: ['Aerodynamic Design', 'Fabrication', 'Testing']
  },
  {
    n: '04',
    title: 'Piezoelectric Energy-Harvesting Shoes',
    tag: 'ENGINEERING INNOVATION · SUSTAINABILITY',
    desc: 'Developed and presented a practical energy-harvesting concept using piezoelectric elements, focused on sustainability, innovation and user needs.',
    stack: ['Design Thinking', 'Energy Harvesting', 'Sustainability']
  }
]

const skills = [
  'Process Engineering',
  'Manufacturing Operations',
  'Production Optimization',
  'Continuous Improvement',
  'Engineering Problem Solving',
  'Quality Control',
  'Process Monitoring',
  'Project Coordination',
  'ERP',
  'Industrial Automation',
  'Industry 4.0',
  'IIoT',
  'AI / Machine Learning',
  'CFD / ANSYS',
  'SOLIDWORKS',
  'MATLAB'
]

export default function Home() {
  return (
    <main className="min-h-screen grid-bg">

      {/* NAVIGATION */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#070b12cc] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

          <a
            href="#top"
            className="font-mono text-sm tracking-[.28em] text-cyan-300"
          >
            ENIYAN.S
          </a>

          <nav className="hidden gap-7 text-xs uppercase tracking-[.18em] text-slate-400 md:flex">
            <a href="#experience" className="hover:text-white">
              Experience
            </a>

            <a href="#projects" className="hover:text-white">
              Projects
            </a>

            <a href="#skills" className="hover:text-white">
              Skills
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-cyan-300/30 px-4 py-2 text-xs font-semibold text-cyan-200 hover:bg-cyan-300/10"
          >
            LET'S CONNECT
          </a>

        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 pb-16 pt-28"
      >
        <div className="absolute right-[7%] top-[20%] hidden h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl md:block" />

        <div className="max-w-4xl">

          <p className="fade font-mono text-xs tracking-[.32em] text-cyan-300">
            AERONAUTICAL ENGINEER · CHENNAI, INDIA
          </p>

          <h1 className="fade delay-1 mt-5 text-5xl font-black leading-[.96] tracking-tight sm:text-7xl md:text-8xl">
            Engineering
            <br />
            <span className="text-slate-500">
              with intent.
            </span>
          </h1>

          <p className="fade delay-2 mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I work at the intersection of{' '}
            <strong className="text-white">
              aerospace manufacturing, process engineering and industrial technology
            </strong>{' '}
            — turning shop-floor problems into practical engineering solutions.
          </p>

          <div className="fade delay-3 mt-9 flex flex-wrap gap-3">

            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
            >
              Explore projects
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#experience"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              My experience
            </a>

          </div>

        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <ChevronDown className="animate-bounce" />
        </a>

      </section>

      {/* PROFILE */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-5 py-24"
      >
        <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr]">

          <div>

            <p className="font-mono text-xs tracking-[.25em] text-cyan-300">
              01 / PROFILE
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From aerospace floors to industrial systems.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              Final-year B.Tech Aeronautical Engineering student with hands-on
              exposure to LCA Tejas wing-component manufacturing at L&T and
              stainless-steel production at SAIL. My interests span production
              operations, continuous improvement, CFD, automation and Industry 4.0.
            </p>

          </div>

          <div className="glass glow rounded-3xl p-7">

            <div className="grid grid-cols-2 gap-6">

              <div>
                <div className="text-3xl font-bold">
                  8.2
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                  CGPA / 10
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold">
                  2
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                  Industrial internships
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold">
                  4
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                  Featured projects
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold">
                  01
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                  Industry recognition
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-y border-white/5 bg-white/[.015] py-24"
      >
        <div className="mx-auto max-w-6xl px-5">

          <p className="font-mono text-xs tracking-[.25em] text-cyan-300">
            02 / EXPERIENCE
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Industrial exposure
          </h2>

          <div className="mt-12 space-y-8">

            <article className="grid gap-5 border-t border-white/10 pt-7 md:grid-cols-[180px_1fr]">

              <div className="font-mono text-xs text-slate-500">
                MAY — JUN 2026
              </div>

              <div>

                <div className="flex flex-wrap items-center gap-3">

                  <h3 className="text-xl font-bold">
                    Project Management Intern — PMG Aero
                  </h3>

                  <span className="rounded-full border border-cyan-300/20 px-2 py-1 text-[10px] text-cyan-200">
                    L&T PES
                  </span>

                </div>

                <p className="mt-3 leading-7 text-slate-400">
                  Supported LCA Tejas wing-component production through production
                  tracking, job-timeline monitoring, ERP validation, cost tracking
                  and shop-floor coordination. Collaborated with engineering,
                  production, composite manufacturing and quality teams. Developed{' '}
                  <span className="text-slate-200">
                    Resin Intelligence
                  </span>
                  , an AI/NIR-based Industry 4.0 concept for real-time process
                  monitoring, optimization and continuous improvement.
                </p>

              </div>

            </article>

            <article className="grid gap-5 border-t border-white/10 pt-7 md:grid-cols-[180px_1fr]">

              <div className="font-mono text-xs text-slate-500">
                MAY — JUN 2025
              </div>

              <div>

                <div className="flex flex-wrap items-center gap-3">

                  <h3 className="text-xl font-bold">
                    Engineering Intern — Steel Manufacturing
                  </h3>

                  <span className="rounded-full border border-emerald-300/20 px-2 py-1 text-[10px] text-emerald-200">
                    SAIL
                  </span>

                </div>

                <p className="mt-3 leading-7 text-slate-400">
                  Gained hands-on exposure to stainless steel production through
                  hot rolling, cold rolling and heat-treatment operations. Supported
                  production and quality assurance activities and collaborated with
                  engineering teams on plant operations, industrial safety and
                  manufacturing process improvement.
                </p>

              </div>

            </article>

          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-5 py-24"
      >
        <div className="flex flex-wrap items-end justify-between gap-5">

          <div>

            <p className="font-mono text-xs tracking-[.25em] text-cyan-300">
              03 / PROJECTS
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Selected engineering work
            </h2>

          </div>

          <span className="font-mono text-xs text-slate-600">
            01—04
          </span>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {projects.map((p, i) => (

            <article
              key={p.n}
              className={`glass rounded-3xl p-7 transition hover:-translate-y-1 hover:border-cyan-300/20 ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >

              <div className="flex items-start justify-between">

                <span className="font-mono text-xs text-cyan-300">
                  {p.n}
                </span>

                <ExternalLink
                  size={17}
                  className="text-slate-600"
                />

              </div>

              <p className="mt-8 font-mono text-[10px] tracking-[.2em] text-slate-500">
                {p.tag}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {p.title}
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                {p.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {p.stack.map((s) => (

                  <span
                    key={s}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {s}
                  </span>

                ))}

              </div>

            </article>

          ))}

        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-y border-white/5 bg-white/[.015] py-24"
      >
        <div className="mx-auto max-w-6xl px-5">

          <div className="grid gap-10 md:grid-cols-[.65fr_1.35fr]">

            <div>

              <p className="font-mono text-xs tracking-[.25em] text-cyan-300">
                04 / CAPABILITIES
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Engineering toolkit
              </h2>

              <p className="mt-5 leading-7 text-slate-500">
                A practical mix of engineering fundamentals, manufacturing
                exposure and emerging industrial technologies.
              </p>

            </div>

            <div className="flex flex-wrap content-start gap-2">

              {skills.map((s) => (

                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-[#0b1119] px-4 py-2.5 text-sm text-slate-300 hover:border-cyan-300/30 hover:text-white"
                >
                  {s}
                </span>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* RECOGNITION */}
      <section className="mx-auto max-w-6xl px-5 py-24">

        <div className="grid gap-5 md:grid-cols-3">

          <div className="glass rounded-3xl p-7">

            <Award className="text-cyan-300" />

            <h3 className="mt-6 text-xl font-bold">
              L&T Recognition
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Letter of Appreciation from Head — Programme Management,
              Aeronautics for Resin Intelligence.
            </p>

          </div>

          <div className="glass rounded-3xl p-7">

            <Cpu className="text-cyan-300" />

            <h3 className="mt-6 text-xl font-bold">
              Shark Tank
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Runner-up for business innovation, problem-solving and technical presentation.
            </p>

          </div>

          <div className="glass rounded-3xl p-7">

            <Factory className="text-cyan-300" />

            <h3 className="mt-6 text-xl font-bold">
              Science Expo
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Runner-up for a piezoelectric energy-harvesting shoe concept
              focused on sustainability and user needs.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/5 py-24"
      >
        <div className="mx-auto max-w-6xl px-5">

          <p className="font-mono text-xs tracking-[.25em] text-cyan-300">
            05 / CONTACT
          </p>

          <h2 className="mt-3 max-w-3xl text-4xl font-black sm:text-6xl">
            Let’s build something
            <br />
            <span className="text-slate-500">
              useful.
            </span>
          </h2>

          <p className="mt-6 max-w-xl leading-7 text-slate-400">
            Open to engineering, manufacturing, operations and industrial
            technology opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <a
              className="flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950"
              href="mailto:YOUR_EMAIL@example.com"
            >
              <Mail size={17} />
              Email
            </a>

            <a
              className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm"
              href="https://linkedin.com/in/eniyan-sk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link2 size={17} />
              LinkedIn
            </a>

            <a
              className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 size={17} />
              GitHub
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-6">

        <div className="mx-auto flex max-w-6xl justify-between px-5 text-xs text-slate-600">

          <span>
            © 2026 Eniyan S
          </span>

          <span className="font-mono">
            ENGINEERING / INDUSTRY / AEROSPACE
          </span>

        </div>

      </footer>

    </main>
  )
}