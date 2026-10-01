"use client";
import { useState } from "react";
import { site } from "@/lib/config";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const ext = [["GitHub", site.github], ["LinkedIn", site.linkedin]].filter(([, h]) => h);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-semibold tracking-tight">Mariam<span className="text-accent">.</span>dev</a>
        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => <li key={l}><a className="transition-colors hover:text-ink" href={`#${l.toLowerCase()}`}>{l}</a></li>)}
          {ext.map(([n, h]) => <li key={n}><a className="rounded-md border border-line px-3 py-1.5 transition-colors hover:border-accent hover:text-ink" href={h} target="_blank" rel="noopener noreferrer">{n}</a></li>)}
        </ul>
        <button className="flex h-10 w-10 items-center justify-center rounded-md border border-line md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </nav>
      <div id="mobile-menu" className={`grid transition-[grid-template-rows] duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`} inert={!open}>
        <ul className="overflow-hidden bg-surface px-5">
          {[...links.map((l) => [l, `#${l.toLowerCase()}`]), ...ext].map(([n, h]) => (
            <li key={n} className="border-t border-line first:border-0">
              <a className="block py-3 text-muted hover:text-ink" href={h} onClick={() => setOpen(false)} {...(h.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{n}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
