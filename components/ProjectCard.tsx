import type { Project } from "@/lib/config";

function LinkBtn({ href, label, primary }: { href: string; label: string; primary?: boolean }) {
  const base = "inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-all";
  if (!href) return <span aria-disabled="true" title="Link not added yet" className={`${base} cursor-not-allowed border border-dashed border-line text-muted`}>{label} · soon</span>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${primary ? "bg-accent text-bg hover:bg-accent-hi" : "border border-line hover:border-accent"}`}>{label}</a>;
}

export default function ProjectCard({ p, featured }: { p: Project; featured?: boolean }) {
  return (
    <article className={`grid overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent/40 ${featured ? "lg:grid-cols-[2fr_3fr]" : "lg:grid-cols-[1fr_2fr]"}`}>
      <div aria-hidden="true" className="flex min-h-48 flex-col justify-between bg-gradient-to-br from-accent/15 via-bg to-bg p-6">
        <div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" /></div>
        <div>
          <p className="text-5xl font-bold tracking-tight text-pale">{p.badge}</p>
          <p className="mt-1 text-sm text-muted">{p.context ?? "Course project"}</p>
        </div>
      </div>
      <div className="p-6 sm:p-8">
        {featured && <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">Featured project</p>}
        <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
        <p className="mt-3 text-muted">{p.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full border border-line bg-bg px-3 py-1 text-xs text-pale">{t}</li>)}</ul>
        <details className="group mt-6">
          <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-accent-hi marker:hidden [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">View case study +</span><span className="hidden group-open:inline">Hide details −</span>
          </summary>
          <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
            {p.features.map((f) => <li key={f} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{f}</li>)}
          </ul>
        </details>
        <div className="mt-6 flex flex-wrap gap-3"><LinkBtn href={p.live} label="Live Demo" primary /><LinkBtn href={p.github} label="GitHub" /></div>
      </div>
    </article>
  );
}
