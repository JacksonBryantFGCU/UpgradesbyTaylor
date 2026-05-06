import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ServicesList } from "@/sections/services/ServicesList";

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Things I can <em>build, fix,</em> or finish for you.
          </>
        }
        sub="Seven core categories. The list below is a starting point — if your project doesn't fit cleanly, ask anyway. Most don't."
      />

      <ServicesList />

      <CtaBand
        title="Don't see what you need?"
        body="Most projects don't fit a category neatly. Describe what you're after and I'll tell you straight whether it's something I take on."
        primary={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
}
