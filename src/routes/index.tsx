import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  CTASection,
  FeatureStrip,
  GalleryGrid,
  ProcessTimeline,
  ProductGrid,
  ProductShowcase,
  SectionHeading,
  ServiceGrid,
} from "@/components/sections";

import { media, posts } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Nexus Autocomps | Precision Engineering",
      },
      {
        name: "description",
        content:
          "Advanced precision engineering and automotive component manufacturing from Nexus Autocomps.",
      },
      {
        property: "og:title",
        content: "Nexus Autocomps | Precision Engineering",
      },
      {
        property: "og:description",
        content:
          "Advanced precision engineering and automotive component manufacturing.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <main>
      {/* ─────────────────────────────────────────
          HERO SECTION
      ───────────────────────────────────────── */}

      <section className="relative flex min-h-[94vh] items-end overflow-hidden bg-secondary text-secondary-foreground">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={media.hero}
          aria-label="Precision CNC machining in progress"
        >
          <source
            src="https://videos.pexels.com/video-files/4488706/4488706-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Hero overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/65 to-secondary/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-secondary/40" />

        {/* Hero content */}
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-36 lg:px-8 lg:pb-20">
          <div className="reveal-up text-xs font-bold uppercase text-primary">
            Precision Engineering
            <span className="mx-2 text-secondary-foreground/35">•</span>
            Advanced Manufacturing
          </div>

          <h1 className="reveal-up mt-5 max-w-5xl text-6xl font-extrabold uppercase leading-[.86] sm:text-8xl lg:text-[7.5rem]">
            Engineered for precision.
            <br />
            <span className="text-primary">
              Built for performance.
            </span>
          </h1>

          <p className="reveal-up mt-7 max-w-xl text-base leading-7 text-secondary-foreground/70">
            Advanced manufacturing and precision engineering solutions for
            demanding industrial and automotive applications.
          </p>

          <div className="reveal-up mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              variant="industrial"
              size="lg"
            >
              <Link to="/services">
                Explore Services
                <ArrowRight />
              </Link>
            </Button>

            <Button
              asChild
              variant="industrialOutline"
              size="lg"
            >
              <Link to="/contact">
                Enquire Now
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-3 text-[10px] font-bold uppercase text-secondary-foreground/50">
            <ArrowDown className="size-4 text-primary" />
            Scroll to explore
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          ABOUT / WHO WE ARE
      ───────────────────────────────────────── */}

      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          {/* Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            {/* Ambient industrial decorative frame */}
            <div className="pointer-events-none absolute -inset-3 border border-primary/20 transition-all duration-500 group-hover:-inset-4 group-hover:border-primary/50" />

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10">
              <img
                src={media.quality}
                alt="Nexus manufacturing quality inspection"
                width={1536}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Technical crosshair accents */}
              <div className="pointer-events-none absolute left-3 top-3 size-3 border-l-2 border-t-2 border-primary/80" />
              <div className="pointer-events-none absolute bottom-3 right-3 size-3 border-b-2 border-r-2 border-primary/80" />

              {/* Interactive subtle light overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-secondary/30 via-transparent to-primary/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Quality Badge with delayed spring pop & hover effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="absolute -bottom-6 right-0 cursor-default bg-primary px-6 py-5 text-primary-foreground shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/30"
            >
              <div className="flex items-center">
                <strong className="font-display text-4xl">
                  100%
                </strong>

                <div className="ml-3 flex flex-col">
                  <span className="flex items-center text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/80">
                    <span className="relative mr-1.5 flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-primary-foreground" />
                    </span>
                    Certified
                  </span>
                  <span className="text-xs font-bold uppercase tracking-tight">
                    Quality focused
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <SectionHeading
              label="Who we are"
              title="Precision manufacturing. Engineering excellence."
              copy="Nexus Autocomps combines modern machining, forming and fabrication capability with disciplined process control. We help customers translate demanding component requirements into repeatable production outcomes."
            />

            <motion.ul
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-8 grid gap-3 text-sm sm:grid-cols-2"
            >
              {[
                "Process-led manufacturing",
                "Application engineering",
                "Production repeatability",
                "Quality at every stage",
              ].map((x) => (
                <motion.li
                  key={x}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group/item flex items-center gap-3 rounded-sm border border-border/50 bg-background/60 p-3 shadow-xs transition-all duration-300 hover:border-primary/50 hover:bg-muted/40 hover:shadow-sm"
                >
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-primary-foreground">
                    <CheckCircle2 className="size-4 transition-transform duration-300 group-hover/item:rotate-12" />
                  </div>
                  <span className="font-medium text-foreground transition-colors duration-300 group-hover/item:text-primary">
                    {x}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-fit"
            >
              <Button
                asChild
                variant="industrial"
                size="lg"
                className="group/btn"
              >
                <Link to="/about">
                  Discover more
                  <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SERVICES
      ───────────────────────────────────────── */}

      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            label="Our services"
            title="Capability across the manufacturing cycle"
          />

          <ServiceGrid />
        </div>
      </section>

      {/* ─────────────────────────────────────────
          MANUFACTURING PROCESS
      ───────────────────────────────────────── */}

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            light
            label="Manufacturing process"
            title="From raw material to finished component"
            copy="A connected production pathway built around control, traceability and consistent execution."
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PRODUCTS (Scroll-Driven Interactive Showcase)
      ───────────────────────────────────────── */}

      <ProductShowcase />

      {/* ─────────────────────────────────────────
          GALLERY
      ───────────────────────────────────────── */}

      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            label="Manufacturing in action"
            title="Built on the factory floor"
          />

          <GalleryGrid compact />
        </div>
      </section>

      {/* ─────────────────────────────────────────
          WHY NEXUS
      ───────────────────────────────────────── */}

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            label="Why Nexus"
            title="Built around precision"
          />

          <FeatureStrip />
        </div>
      </section>

      {/* ─────────────────────────────────────────
          LATEST INSIGHTS / BLOG
      ───────────────────────────────────────── */}

      <section className="bg-secondary py-20 text-secondary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            light
            label="Latest insights"
            title="Ideas from the engineering floor"
          />

          <div className="mt-12 grid gap-px bg-secondary-foreground/15 md:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.title}
                className="group bg-secondary"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />

                <div className="p-6">
                  <div className="text-[10px] font-bold uppercase text-primary">
                    {p.category} · {p.date}
                  </div>

                  <h3 className="mt-3 text-2xl font-bold uppercase">
                    {p.title}
                  </h3>

                  <Link
                    to="/blog"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase text-primary"
                  >
                    Read more
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CTA
      ───────────────────────────────────────── */}

      <CTASection />
    </main>
  );
}