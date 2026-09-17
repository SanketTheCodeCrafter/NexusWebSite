import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Gauge, Layers3, ShieldCheck, Timer, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gallery, products, services } from "@/lib/site-data";

export function SectionHeading({ label, title, copy, light = false }: { label: string; title: string; copy?: string; light?: boolean }) {
  return <div className="max-w-3xl"><div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-primary"><span className="h-px w-8 bg-primary" />{label}</div><h2 className={`text-4xl font-bold uppercase leading-none sm:text-5xl lg:text-6xl ${light ? "text-secondary-foreground" : "text-foreground"}`}>{title}</h2>{copy && <p className={`mt-5 max-w-2xl text-base leading-7 ${light ? "text-secondary-foreground/65" : "text-muted-foreground"}`}>{copy}</p>}</div>;
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="industrial-grid bg-secondary pt-36 text-secondary-foreground"><div className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-24"><div className="mb-7 text-xs font-bold uppercase text-primary">{eyebrow}</div><h1 className="max-w-5xl text-5xl font-extrabold uppercase leading-[.9] sm:text-7xl lg:text-8xl">{title}</h1><p className="mt-7 max-w-2xl text-base leading-7 text-secondary-foreground/65">{copy}</p></div><div className="h-1 bg-primary" /></section>;
}

export function ServiceGrid({ limit }: { limit?: number }) {
  const shown = limit ? services.slice(0, limit) : services;
  return <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">{shown.map((s, i) => <article key={s.title} className="group bg-background"><div className="relative aspect-[16/10] overflow-hidden"><img src={s.image} alt={s.title} width={1536} height={1024} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><span className="absolute left-4 top-4 bg-secondary px-2 py-1 text-xs font-bold text-secondary-foreground">0{i+1}</span></div><div className="p-6"><h3 className="text-2xl font-bold uppercase">{s.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{s.desc}</p><Link to="/services" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase text-primary">Explore capability <ArrowRight className="size-4 transition group-hover:translate-x-1"/></Link></div></article>)}</div>;
}

const processSteps = [
  ["Raw Material", "Certified metal stock is verified for grade, dimensions and traceability."],
  ["Press Shop", "Controlled forming creates consistent production geometry."],
  ["CNC Turning", "Rotational features are machined to close tolerances."],
  ["VMC Machining", "Complex faces and features are milled with repeatable accuracy."],
  ["Fabrication", "Qualified joining builds strong, dimensionally stable assemblies."],
  ["Inspection", "Critical characteristics are measured and documented."],
  ["Dispatch", "Protected, identified components move to the customer on schedule."],
] as const;

export function ProcessTimeline() {
  const [active, setActive] = useState(0);
  return <div className="mt-12"><div className="grid gap-px bg-secondary-foreground/15 md:grid-cols-7">{processSteps.map(([title],i) => <button key={title} onClick={() => setActive(i)} className={`min-h-20 border-l-2 px-4 py-4 text-left text-xs font-bold uppercase transition ${active===i ? "border-primary bg-primary text-primary-foreground" : "border-transparent bg-secondary text-secondary-foreground/55 hover:text-secondary-foreground"}`}><span className="mb-2 block text-[10px] opacity-55">0{i+1}</span>{title}</button>)}</div><div className="grid items-stretch bg-secondary-foreground/5 md:grid-cols-2"><div className="p-8 lg:p-12"><div className="text-xs font-bold uppercase text-primary">Current stage / 0{active+1}</div><h3 className="mt-4 text-4xl font-bold uppercase text-secondary-foreground">{processSteps[active][0]}</h3><p className="mt-5 max-w-md leading-7 text-secondary-foreground/65">{processSteps[active][1]}</p></div><img src={active < 2 ? services[0].image : active < 5 ? services[1].image : services[5].image} alt={`${processSteps[active][0]} process`} width={1536} height={1024} loading="lazy" className="h-72 w-full object-cover md:h-full"/></div></div>;
}

export function ProductGrid({ compact = false }: { compact?: boolean }) {
  const [filter,setFilter] = useState("All");
  const cats = ["All", ...new Set(products.map(p=>p.category))];
  const shown = products.filter(p=>filter==="All" || p.category===filter).slice(0,compact?4:products.length);
  return <><div className="mt-8 flex flex-wrap gap-2">{cats.map(c=><Button key={c} variant={filter===c?"industrial":"outline"} onClick={()=>setFilter(c)}>{c}</Button>)}</div><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{shown.map(p=><article key={p.name} className="group border border-border bg-card"><div className="aspect-[4/3] overflow-hidden bg-muted"><img src={p.image} alt={p.name} width={1536} height={1024} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/></div><div className="p-6"><span className="text-[10px] font-bold uppercase text-primary">{p.category}</span><h3 className="mt-2 text-2xl font-bold uppercase">{p.name}</h3><p className="mt-2 text-sm text-muted-foreground">{p.desc}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase">View details <ArrowRight className="size-4"/></span></div></article>)}</div></>;
}

export function GalleryGrid({ compact = false }: { compact?: boolean }) {
  const [filter,setFilter] = useState("All"); const [selected,setSelected] = useState<(typeof gallery)[number] | null>(null);
  const cats = ["All", ...new Set(gallery.map(g=>g.category))];
  const shown = gallery.filter(g=>filter==="All" || g.category===filter).slice(0,compact?4:gallery.length);
  return <><div className="mt-8 flex flex-wrap gap-2">{cats.map(c=><Button key={c} variant={filter===c?"industrial":"outline"} onClick={()=>setFilter(c)}>{c}</Button>)}</div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{shown.map((g,i)=><button key={`${g.title}-${i}`} onClick={()=>setSelected(g)} className={`${i===0&&!compact?"sm:col-span-2":""} group relative min-h-72 overflow-hidden text-left`}><img src={g.image} alt={g.title} width={1536} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent"/><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-secondary-foreground"><div><span className="text-[10px] font-bold uppercase text-primary">{g.category}</span><h3 className="mt-1 text-xl font-bold uppercase">{g.title}</h3></div><ZoomIn className="size-5"/></div></button>)}</div>{selected&&<div role="dialog" aria-modal="true" aria-label={selected.title} className="fixed inset-0 z-[70] grid place-items-center bg-secondary/95 p-5" onClick={()=>setSelected(null)}><Button variant="ghost" size="icon" className="absolute right-5 top-5 text-secondary-foreground" aria-label="Close image"><X/></Button><img src={selected.image} alt={selected.title} width={1536} height={1024} className="max-h-[82vh] max-w-6xl object-contain"/></div>}</>;
}

export function FeatureStrip() {
  const items = [[Gauge,"Engineering Precision"],[Layers3,"Manufacturing Capability"],[ShieldCheck,"Consistent Quality"],[Timer,"Reliable Delivery"]] as const;
  return <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{items.map(([Icon,title],i)=><div key={title} className="bg-background p-7"><Icon className="size-7 text-primary"/><div className="mt-8 text-xs text-muted-foreground">0{i+1}</div><h3 className="mt-2 text-2xl font-bold uppercase">{title}</h3></div>)}</div>;
}

export function CTASection() { return <section className="bg-primary"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 py-16 lg:flex-row lg:items-end lg:px-8"><div><p className="text-xs font-bold uppercase text-primary-foreground/65">Start a conversation</p><h2 className="mt-3 text-5xl font-extrabold uppercase leading-none text-primary-foreground lg:text-7xl">Let's build something precise.</h2><p className="mt-4 text-primary-foreground/70">Have a manufacturing requirement? Let's discuss your project.</p></div><Button asChild variant="secondary" size="lg" className="shrink-0"><Link to="/contact">Send an enquiry <ArrowRight/></Link></Button></div></section> }