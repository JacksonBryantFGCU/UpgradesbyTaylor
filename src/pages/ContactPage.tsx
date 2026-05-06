import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContactDetails } from "@/sections/contact/ContactDetails";
import { ContactForm } from "@/sections/contact/ContactForm";
import { layout, splitGap } from "@/lib/layout";
import { cn } from "@/lib/cn";

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's talk about <em>your project.</em>
          </>
        }
        sub="Reach out by phone, email, or the form below. I respond within a business day, usually the same day."
      />

      <section className={layout.section}>
        <Container>
          <div className={cn("grid grid-cols-1 items-start lg:grid-cols-2", splitGap)}>
            <ContactDetails />
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
