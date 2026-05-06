import { Hero } from "@/sections/home/Hero";
import { ServicesPreview } from "@/sections/home/ServicesPreview";
import { FeaturedProject } from "@/sections/home/FeaturedProject";
import { AboutTeaser } from "@/sections/home/AboutTeaser";
import { CtaBand } from "@/components/CtaBand";

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedProject />
      <AboutTeaser />
      <CtaBand
        title={
          <>
            Want to talk through <em>your</em> project?
          </>
        }
        body="Free walkthrough at your home. We'll talk through what you want and I'll tell you what's realistic."
        primary={{ label: "Schedule a walkthrough", href: "/contact" }}
        secondary={{ label: "See the work", href: "/gallery" }}
      />
    </>
  );
}
