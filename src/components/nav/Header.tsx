import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";
import { primaryNav } from "@/data/site";
import type { NavLinkItem } from "@/data/site";
import { cn } from "@/lib/cn";

function isLinkActive(item: NavLinkItem, pathname: string, hash: string) {
  if (item.kind === "hash") {
    return pathname === "/" && `/${hash}` === item.to;
  }
  if (item.to === "/") return pathname === "/" && hash === "";
  return pathname.startsWith(item.to);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Link to="/" aria-label="Upgrades by Taylor — home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {primaryNav.map((l) => {
            const active = isLinkActive(l, pathname, hash);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative text-sm text-ink-soft transition-colors hover:text-ink",
                  active &&
                    "text-ink font-medium after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-px after:bg-accent"
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <Button as="a" href="/contact" variant="primary" size="sm">
            Get a quote <span aria-hidden>→</span>
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M6 18L18 6" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </Container>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-line bg-paper transition-[max-height] duration-300",
          open ? "max-h-[480px]" : "max-h-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {primaryNav.map((l) => {
            const active = isLinkActive(l, pathname, hash);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "rounded-md px-3 py-3 text-base text-ink-soft hover:bg-paper-soft hover:text-ink",
                  active && "text-ink font-medium"
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <Button as="a" href="/contact" variant="primary" size="md" className="mt-2">
            Get a quote <span aria-hidden>→</span>
          </Button>
        </Container>
      </div>
    </header>
  );
}
