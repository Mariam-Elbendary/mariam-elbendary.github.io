import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import { site, projects, skills, experience } from "@/lib/config";

const Heading = ({ id, kicker, children }: { id: string; kicker: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <p className="text-xs font-semibold uppercase tracking-widest text-accent">{kicker}</p>
    <h2 id={id} className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{children}</h2>
  </div>
);
const section = "mx-auto max-w-6xl px-5 py-20 sm:py-24";
const btn = "inline-flex items-center justify-center rounded-md px-6 py-3 font-medium transition-all hover:-translate-y-0.5";

export default function Home() {
  const social = [["GitHub", site.github], ["LinkedIn", site.linkedin]].filter(([, h]) => h);
  return (
    <>
      <Nav />
      <main>
        <section id="home" aria-labelledby="hero-h" className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-5 pb-16 pt-28">
          <p className="rise text-sm font-medium text-accent-hi">Hi, I&apos;m</p>
          <h1 id="hero-h" className="rise mt-2 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">{site.name}</h1>
          <p className="rise rise-2 mt-3 text-2xl font-semibold text-pale sm:text-3xl">{site.role}</p>
          <p className="rise rise-2 mt-6 max-w-2xl text-lg text-muted sm:text-xl">I build modern, responsive web applications with React.js and Next.js.</p>
          <p className="rise rise-3 mt-4 text-sm text-muted">React • Next.js • JavaScript • TypeScript • Responsive UI • REST APIs</p>
          <div className="rise rise-3 mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className={`${btn} bg-accent text-bg hover:bg-accent-hi`}>View My Work</a>
            <a href="#contact" className={`${btn} border border-line hover:border-accent`}>Contact Me</a>
          </div>
          <p className="rise rise-3 mt-8 flex gap-5 text-sm text-muted">
            {social.map(([n, h]) => <a key={n} href={h} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-ink hover:underline">{n} ↗</a>)}
          </p>
        </section>

        <section id="about" aria-labelledby="about-h" className={section}>
          <Heading id="about-h" kicker="About">Building interfaces that work and feel good</Heading>
          <div className="grid gap-6 text-lg text-muted lg:grid-cols-2">
            <p>I&apos;m a frontend developer focused on React.js and Next.js. I like turning a design into a responsive, reusable set of components, and wiring it up to real data through REST APIs, authentication and forms that validate properly.</p>
            <p>I care about clean, maintainable code and interfaces that are both functional and polished. I enjoy solving problems as they come up, learning from each project, and working with a team in a collaborative Git workflow.</p>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-h" className={section}>
          <Heading id="skills-h" kicker="Skills">Tools I work with</Heading>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="rounded-xl border border-line bg-surface p-6">
                <h3 className="font-semibold text-pale">{s.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">{s.items.map((i) => <li key={i} className="rounded-md border border-line bg-bg px-2.5 py-1 text-sm text-muted">{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="exp-h" className={section}>
          <Heading id="exp-h" kicker="Experience & training">Where I&apos;ve been learning</Heading>
          <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
            {experience.map((e) => (
              <li key={e.org} className="relative">
                <span aria-hidden="true" className="absolute -left-[1.9rem] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-bg sm:-left-[2.4rem]" />
                {e.dates && <p className="text-sm font-medium text-accent-hi">{e.dates}</p>}
                <h3 className="mt-1 text-xl font-semibold">{e.title}</h3>
                <p className="text-muted">{e.org}</p>
                {e.highlight && <p className="mt-3 inline-block rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-sm font-medium text-pale">{e.highlight}</p>}
                <ul className="mt-4 space-y-1.5 text-muted">{e.points.map((p) => <li key={p} className="flex gap-2"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />{p}</li>)}</ul>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-sm text-muted"><span className="font-medium text-ink">Education:</span> B.Sc. Computer Science, Faculty of Computers and Information, Menoufia University (Jan 2021 – Jun 2026) — Very Good with Honor.</p>
        </section>

        <section id="projects" aria-labelledby="proj-h" className={section}>
          <Heading id="proj-h" kicker="Projects">Applications I&apos;ve built</Heading>
          <div className="space-y-8">{projects.map((p, i) => <ProjectCard key={p.title} p={p} featured={i === 0} />)}</div>
        </section>

        <section id="contact" aria-labelledby="contact-h" className={section}>
          <div className="rounded-2xl border border-line bg-surface p-8 sm:p-12">
            <Heading id="contact-h" kicker="Contact">Let&apos;s talk about your next project</Heading>
            <p className="max-w-xl text-muted">I&apos;m looking for a frontend role in a collaborative team. The quickest way to reach me is email.</p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              <div><dt className="text-xs uppercase tracking-widest text-muted">Email</dt><dd className="mt-1 break-all"><a className="text-pale hover:text-accent-hi" href={`mailto:${site.email}`}>{site.email}</a></dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-muted">Phone</dt><dd className="mt-1"><a className="text-pale hover:text-accent-hi" href={`tel:${site.phone}`}>{site.phone}</a></dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-muted">Location</dt><dd className="mt-1 text-pale">{site.location}</dd></div>
            </dl>
            <a href={`mailto:${site.email}?subject=Hello%20Mariam`} className={`${btn} mt-10 bg-accent text-bg hover:bg-accent-hi`}>Send me an email</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p><span className="font-medium text-ink">{site.name}</span> · {site.role}</p>
          <p className="flex flex-wrap gap-5">
            {social.map(([n, h]) => <a key={n} href={h} target="_blank" rel="noopener noreferrer" className="hover:text-ink">{n}</a>)}
            <a href={`mailto:${site.email}`} className="hover:text-ink">Email</a>
          </p>
          <p>© {new Date().getFullYear()} {site.name}</p>
        </div>
      </footer>
    </>
  );
}
