import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand text-brand-ink">
      <Container className="py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <div>
            <Logo mono />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-ink/85">
              {site.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-brand-ink/70">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="text-brand-ink/90 transition-colors hover:text-accent"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="break-words text-brand-ink/90 transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-brand-ink/70">
              Service area
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-brand-ink/90">
              {site.serviceArea}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-brand-ink/15 pt-6 text-xs text-brand-ink/65 md:mt-12 md:flex-row md:items-center">
          <span>© {year} {site.legalName}. All rights reserved.</span>
          <span>{site.license}</span>
        </div>
      </Container>
    </footer>
  );
}
