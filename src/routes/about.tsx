import { createFileRoute } from "@tanstack/react-router";

import {
  CTASection,
  PageIntro,
  SectionHeading,
} from "@/components/sections";

import { media } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Nexus Autocomps | Manufacturing Partner",
      },
      {
        name: "description",
        content:
          "Learn about Nexus Autocomps, our engineering approach, manufacturing philosophy, mission and vision.",
      },
      {
        property: "og:title",
        content: "About Nexus Autocomps",
      },
      {
        property: "og:description",
        content:
          "Engineering discipline and manufacturing capability built around customer outcomes.",
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

  component: About,
});

function About() {
  return (
    <main>
      <PageIntro
        eyebrow="About us"
        title="Engineering confidence into every component."
        copy="A manufacturing partner built around technical discipline, production reliability and lasting customer relationships."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <SectionHeading
            label="Company overview"
            title="Purpose-built for precision"
            copy="Nexus Autocomps brings forming, machining, fabrication, assembly and inspection into one connected manufacturing environment. Our teams focus on stable processes, clear communication and components that perform consistently in the field."
          />

          <img
            src={media.press}
            alt="Nexus automotive production facility"
            width={1536}
            height={1024}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto grid max-w-7xl gap-px bg-border px-5 md:grid-cols-3 lg:px-8">
          {[
            [
              "Our approach",
              "Understand the application, engineer the process, then control every critical production stage.",
            ],
            [
              "Manufacturing philosophy",
              "Precision is not a final inspection activity. It is designed into tooling, methods and measurement.",
            ],
            [
              "Partnership",
              "Responsive collaboration helps us solve production challenges and create sustainable value.",
            ],
          ].map(([t, c]) => (
            <article key={t} className="bg-background p-8">
              <h2 className="text-3xl font-bold uppercase">
                {t}
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {c}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 lg:px-8">
          <div>
            <div className="text-xs font-bold uppercase text-primary">
              Mission
            </div>

            <h2 className="mt-4 text-4xl font-bold uppercase">
              Make dependable manufacturing a competitive advantage.
            </h2>
          </div>

          <div>
            <div className="text-xs font-bold uppercase text-primary">
              Vision
            </div>

            <h2 className="mt-4 text-4xl font-bold uppercase">
              Be the trusted engineering partner behind better-performing
              products.
            </h2>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}