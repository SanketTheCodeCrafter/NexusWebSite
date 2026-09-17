import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections";
import { products } from "@/lib/site-data";

// Richer copy for the individual product showcase while remaining 100% data-driven
const productDescriptions: Record<string, string> = {
  "Precision Drive Shaft":
    "Close-tolerance transmission component engineered for high-torque automotive drivetrains. Built with high-strength alloy steel to ensure torsional rigidity and dependable fatigue resistance under continuous dynamic loads.",
  "Flanged Housing":
    "Rigid CNC-machined bearing enclosure designed for vibration dampening and precision alignment. Features micron-level bore geometry and machined mounting faces for heavy-duty powertrain assemblies.",
  "Structural Bracket":
    "Production-ready formed steel bracket manufactured with multi-stage hydraulic stamping. Delivers consistent geometric accuracy, structural rigidity, and optimized strength-to-weight performance.",
  "Chassis Assembly":
    "Heavy-duty welded load-bearing automotive assembly built with strict structural integrity. Qualified welding fixtures ensure precise coordinate repeatability and torsional stiffness across high-volume production.",
  "Precision Gear Blank":
    "Prepared precision blank for critical powertrain applications. Normalized, heat-treated, and turned to micron-level runout tolerances for quiet, high-efficiency gear meshing.",
  "Mounting Reinforcement":
    "Consistent high-volume stamped reinforcement part engineered for chassis stiffening and impact energy dispersion. Formed with high-strength sheet stock and pre-drilled locating points.",
};

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll tracking across the pinned container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const numProducts = products.length;
    // Map progress smoothly to active product index
    const index = Math.min(numProducts - 1, Math.max(0, Math.floor(latest * numProducts)));
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const activeProduct = products[activeIndex] ?? products[0];
  const description =
    productDescriptions[activeProduct.name] ??
    activeProduct.desc ??
    "Engineered with close-tolerance manufacturing and repeatable quality control.";

  // Scroll smoothly to any product when clicked
  const scrollToProduct = (index: number) => {
    setActiveIndex(index);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const containerTop = rect.top + scrollTop;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    if (totalScrollable > 0) {
      const target = containerTop + ((index + 0.5) / products.length) * totalScrollable;
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    const prev = Math.max(0, activeIndex - 1);
    scrollToProduct(prev);
  };

  const handleNext = () => {
    const next = Math.min(products.length - 1, activeIndex + 1);
    scrollToProduct(next);
  };

  return (
    <div
      ref={containerRef}
      className="relative bg-background"
      style={{
        // Give each individual product a dedicated scroll distance (approx 85vh per product)
        height: `${Math.max(products.length * 85, 300)}vh`,
      }}
    >
      {/* Pinned Sticky Section */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden py-8">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-between px-5 lg:px-8">
          {/* Section Header */}
          <div className="pt-4 lg:pt-8">
            <SectionHeading
              label="Our products"
              title="Components made for demanding applications"
            />
          </div>

          {/* ─────────────────────────────────────────────────────────────
              DESKTOP LAYOUT (3 Pinned Columns matching Reference Image)
          ───────────────────────────────────────────────────────────── */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 my-auto">
            {/* 1. LEFT COLUMN: Active product description + CTA + dashed divider */}
            <div className="lg:col-span-4 flex flex-col justify-center border-r border-dashed border-border/80 pr-8 xl:pr-12">
              <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                <span>Part 0{activeIndex + 1}</span>
                <span className="text-muted-foreground/40">/</span>
                <span className="text-muted-foreground/60">0{products.length}</span>
              </div>

              <div className="min-h-[190px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProduct.name}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  variant="industrial"
                  size="lg"
                  className="group/btn"
                >
                  <Link to="/products">
                    Explore catalogue
                    <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* 2. CENTER COLUMN: Vertical list of ALL individual product names */}
            <div className="lg:col-span-4 flex flex-col justify-center pl-2">
              <nav aria-label="Individual products list" className="flex flex-col gap-3">
                {products.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => scrollToProduct(idx)}
                      className={`group flex items-center text-left transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm py-1.5 cursor-pointer ${
                        isActive
                          ? "text-foreground font-extrabold text-3xl xl:text-4xl tracking-tight"
                          : "text-muted-foreground/40 hover:text-foreground/75 font-semibold text-xl xl:text-2xl"
                      }`}
                    >
                      {/* Active indicator dot matching reference image */}
                      <span
                        className={`inline-block shrink-0 rounded-full transition-all duration-300 ${
                          isActive
                            ? "mr-3.5 size-2.5 bg-primary shadow-[0_0_10px_rgba(249,115,22,0.8)] scale-100 opacity-100"
                            : "mr-0 size-0 bg-transparent scale-0 opacity-0"
                        }`}
                      />

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* 3. RIGHT COLUMN: Elevated Showcase Card with Large Active Product Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full aspect-[4/3] xl:aspect-[5/4] max-w-[460px] rounded-2xl border border-border/70 bg-card/60 p-7 xl:p-9 shadow-xl flex flex-col justify-between overflow-hidden backdrop-blur-xs group">
                {/* Subtle technical corner accents */}
                <div className="pointer-events-none absolute top-4 left-4 size-3 border-t-2 border-l-2 border-primary/40" />
                <div className="pointer-events-none absolute bottom-4 left-4 size-3 border-b-2 border-l-2 border-primary/40" />

                {/* Card Top: Active product title */}
                <div className="z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProduct.name}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-between"
                    >
                      <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                        {activeProduct.name}
                      </h4>
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-bold uppercase text-secondary-foreground">
                        OEM Spec
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Card Center: Large Image with coordinated scale/fade animation */}
                <div className="relative my-auto flex h-48 xl:h-56 w-full items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProduct.name}
                      initial={{ opacity: 0, scale: 0.92, y: 16 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.05, y: -16 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-full w-full items-center justify-center"
                    >
                      <img
                        src={activeProduct.image}
                        alt={activeProduct.name}
                        width={1536}
                        height={1024}
                        className="h-full w-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-103"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Card Bottom-Right: Circular Arrow Button matching reference */}
                <div className="z-10 flex items-center justify-between pt-2">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                    View part details
                  </span>

                  <Link
                    to="/products"
                    aria-label={`View details for ${activeProduct.name}`}
                    className="flex size-11 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              MOBILE & TABLET LAYOUT (Touch-friendly stacked experience)
          ───────────────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6 lg:hidden my-auto py-4">
            {/* Step selector pills for mobile */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {products.map((p, idx) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => scrollToProduct(idx)}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                    idx === activeIndex
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Mobile Product Showcase Card */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-card p-4 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase text-primary">
                  0{activeIndex + 1} / 0{products.length}
                </span>
                <span className="text-xs font-bold text-foreground truncate max-w-[200px]">
                  {activeProduct.name}
                </span>
              </div>

              <div className="relative h-40 w-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProduct.name}
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.35 }}
                    className="h-full w-full rounded-md object-cover"
                  />
                </AnimatePresence>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                    aria-label="Previous product"
                    className="flex size-8 items-center justify-center rounded-full border border-border bg-background disabled:opacity-30"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={activeIndex === products.length - 1}
                    aria-label="Next product"
                    className="flex size-8 items-center justify-center rounded-full border border-border bg-background disabled:opacity-30"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>

                <Link
                  to="/products"
                  className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground"
                >
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Mobile Description & CTA */}
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              <div className="mt-4">
                <Button asChild variant="industrial" size="default" className="w-full sm:w-auto">
                  <Link to="/products">
                    View full catalogue
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom helper info */}
          <div className="hidden lg:flex items-center justify-between border-t border-border/40 pt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Scroll down to navigate through individual products
            </span>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline"
            >
              Browse complete range
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
