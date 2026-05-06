import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function NotFoundPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-4xl md:text-5xl">Page not found</h1>
        <p className="mt-4 text-ink-soft">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-block text-accent underline">
          Back home
        </Link>
      </Container>
    </Section>
  );
}
