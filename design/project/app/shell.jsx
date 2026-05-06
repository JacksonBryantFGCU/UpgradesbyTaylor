/* global React */
const { useState, useEffect, useMemo, useRef, useCallback } = React;

// ============================================================
// LOGO — rebuilt from scratch, three pitched rooflines + chimney
// Returns an SVG. variant: 'mark' | 'lockup' | 'monogram'
// ============================================================
function Logo({ variant = "lockup", height = 32, mono = false }) {
  const stroke = mono ? "currentColor" : "var(--c-brand)";
  const accent = mono ? "currentColor" : "var(--c-accent)";
  const ink = mono ? "currentColor" : "var(--c-ink)";

  const Mark = (
    <svg viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height, width: "auto", flexShrink: 0 }}>
      {/* Back roofline */}
      <path d="M4 32 L32 8 L60 32" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Front roofline (slightly lower / shifted) */}
      <path d="M10 44 L32 24 L54 44" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Chimney on back roof */}
      <rect x="44" y="14" width="4" height="9" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      {/* Foundation tick */}
      <path d="M14 50 L50 50" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  if (variant === "mark") return Mark;

  if (variant === "monogram") {
    return (
      <svg viewBox="0 0 64 64" style={{ height, width: "auto", flexShrink: 0 }}>
        <rect x="1" y="1" width="62" height="62" rx="8" fill="none" stroke={stroke} strokeWidth="2" />
        <text x="32" y="42" textAnchor="middle"
              fontFamily="Fraunces, Georgia, serif"
              fontSize="26"
              fontWeight="500"
              fill={ink}
              letterSpacing="-0.5">
          UbT
        </text>
        <line x1="14" y1="50" x2="50" y2="50" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Lockup: mark + wordmark side by side
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      {Mark}
      <span style={{
        fontFamily: "var(--font-display)",
        fontSize: height * 0.5,
        fontWeight: 500,
        color: "var(--c-ink)",
        letterSpacing: "-0.012em",
        lineHeight: 1,
      }}>
        Upgrades <span style={{ fontStyle: "italic", color: "var(--c-accent)", fontWeight: 400 }}>by</span> Taylor
      </span>
    </div>
  );
}

// ============================================================
// HEADER / NAV
// ============================================================
function Header({ route, setRoute, logoVariant }) {
  const [open, setOpen] = useState(false);

  const go = (key) => {
    setRoute(key);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Smooth-scroll to a section on Home. If we're elsewhere, route to home first
  // and then scroll once the page mounts.
  const goSection = (id) => {
    setOpen(false);
    if (route !== "home") {
      setRoute("home");
      // Defer until HomePage has rendered
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="site-header">
      <div className="nav">
        <div className="nav__brand" onClick={() => go("home")}>
          <Logo variant={logoVariant} height={36} />
        </div>

        <nav className={"nav__links " + (open ? "nav__links--open" : "")}>
          <a href="#home"
             className={"nav__link " + (route === "home" ? "is-active" : "")}
             onClick={(e) => { e.preventDefault(); go("home"); }}>
            Home
          </a>
          <a href="#gallery"
             className={"nav__link " + (route === "gallery" ? "is-active" : "")}
             onClick={(e) => { e.preventDefault(); go("gallery"); }}>
            Gallery
          </a>
          <a href="#about"
             className="nav__link"
             onClick={(e) => { e.preventDefault(); goSection("about"); }}>
            About
          </a>
          <a href="#contact"
             className="btn btn--primary nav__cta"
             onClick={(e) => { e.preventDefault(); go("contact"); }}>
            Get a quote
            <span className="arrow">→</span>
          </a>
        </nav>

        <button className="nav__toggle" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open
              ? (<><path d="M6 6l12 12"/><path d="M6 18L18 6"/></>)
              : (<><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>)
            }
          </svg>
        </button>
      </div>
    </header>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer({ setRoute }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid footer-grid--3">
          <div>
            <Logo variant="lockup" height={36} mono />
            <p className="footer-tagline">
              Quality craftsmanship for the homes of Venice and the surrounding Gulf coast.
            </p>
          </div>
          <div>
            <h4>Get in touch</h4>
            <a href="tel:+14439947770">(443) 994-7770</a>
            <a href="mailto:upgradesbytaylor@gmail.com">upgradesbytaylor@gmail.com</a>
          </div>
          <div>
            <h4>Service area</h4>
            <p>Wellen Park in Venice, FL</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Upgrades by Taylor LLC. All rights reserved.</span>
          <span>Licensed &amp; insured · FL</span>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// Common Eyebrow
// ============================================================
function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

// expose
Object.assign(window, { Logo, Header, Footer, Eyebrow });
