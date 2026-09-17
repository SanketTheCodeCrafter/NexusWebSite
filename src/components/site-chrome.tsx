import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  ["/", "Home"], ["/about", "About Us"], ["/services", "Services"],
  ["/products", "Products"], ["/gallery", "Gallery"], ["/blog", "Blog"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [path]);
  const overlay = path === "/" && !scrolled;
  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${overlay ? "border-transparent bg-transparent text-primary-foreground" : "border-border bg-background/95 text-foreground shadow-sm backdrop-blur"}`}>
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
      <Link to="/" className="flex items-center gap-3" aria-label="Nexus Autocomps home"><span className="grid size-9 place-items-center border border-primary bg-primary font-display text-xl font-extrabold text-primary-foreground">N</span><span className="font-display text-xl font-bold uppercase">Nexus <span className="text-primary">Autocomps</span></span></Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">{links.map(([to,label]) => <Link key={to} to={to} className="text-xs font-bold uppercase transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>{label}</Link>)}</nav>
      <div className="hidden lg:block"><Button asChild variant="industrial" size="lg"><Link to="/contact">Enquire Now <ArrowUpRight /></Link></Button></div>
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="border-t border-border bg-background px-5 py-5 text-foreground lg:hidden">{links.map(([to,label]) => <Link key={to} to={to} className="block border-b border-border py-3 font-display text-2xl font-semibold uppercase">{label}</Link>)}<Button asChild variant="industrial" size="lg" className="mt-5 w-full"><Link to="/contact">Enquire Now</Link></Button></nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="bg-secondary text-secondary-foreground"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8"><div><div className="font-display text-3xl font-bold uppercase">Nexus <span className="text-primary">Autocomps</span></div><p className="mt-4 max-w-sm text-sm leading-7 text-secondary-foreground/65">Precision engineering and advanced manufacturing for demanding automotive and industrial applications.</p></div><div><h3 className="text-sm font-bold uppercase text-primary">Navigate</h3><div className="mt-4 grid grid-cols-2 gap-3 text-sm">{links.slice(1).map(([to,label]) => <Link key={to} to={to} className="hover:text-primary">{label}</Link>)}<Link to="/contact" className="hover:text-primary">Contact</Link></div></div><div className="space-y-3 text-sm text-secondary-foreground/70"><h3 className="text-sm font-bold uppercase text-primary">Connect</h3><p className="flex gap-3"><MapPin className="size-4 text-primary"/> India</p><p className="flex gap-3"><Mail className="size-4 text-primary"/> enquiries@nexusautocomps.com</p><p className="flex gap-3"><Phone className="size-4 text-primary"/> +91 00000 00000</p></div></div><div className="border-t border-secondary-foreground/15 px-5 py-5 text-center text-xs text-secondary-foreground/45">© 2026 Nexus Autocomps. Engineering confidence into every component.</div></footer>;
}