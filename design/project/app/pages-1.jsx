/* global React, Eyebrow, SERVICES, GALLERY, PROCESS */
const { useState: useStateP, useEffect: useEffectP } = React;

// Small icon set for service cards
function ServiceIcon({ kind }) {
  const props = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (kind) {
    case "kitchen": return (<svg {...props}><rect x="3" y="9" width="18" height="11" rx="1"/><path d="M3 13h18"/><circle cx="8" cy="11" r=".6" fill="currentColor"/><circle cx="12" cy="11" r=".6" fill="currentColor"/><circle cx="16" cy="11" r=".6" fill="currentColor"/><path d="M5 9V5h14v4"/></svg>);
    case "bath":    return (<svg {...props}><path d="M3 13h18v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3z"/><path d="M6 13V6a2 2 0 0 1 2-2h1"/><path d="M8 6h3"/><path d="M5 19l-1 2"/><path d="M19 19l1 2"/></svg>);
    case "cabinet": return (<svg {...props}><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M12 3v18"/><circle cx="10" cy="12" r=".7" fill="currentColor"/><circle cx="14" cy="12" r=".7" fill="currentColor"/></svg>);
    case "brush":   return (<svg {...props}><path d="M14 3l7 7-9 9-7-7 9-9z"/><path d="M5 19l-2 2"/><path d="M9 14l-3 3"/></svg>);
    case "floor":   return (<svg {...props}><rect x="3" y="4" width="18" height="16"/><path d="M3 9h18M3 14h18M3 19h18"/><path d="M9 4v16M15 4v16"/></svg>);
    case "tile":    return (<svg {...props}><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></svg>);
    case "wrench":  return (<svg {...props}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z"/></svg>);
    default: return null;
  }
}

// ============================================================
// HOME
// ============================================================
function HomePage({ setRoute, tweaks }) {
  const [activeIdx, setActiveIdx] = useStateP(0);
  const headline = (tweaks && tweaks.heroHeadline) || "Honest craftsmanship for the homes you actually live in.";
  const emphasis = (tweaks && tweaks.heroEmphasis) || "";
  const showBadge = !tweaks || tweaks.showBookingBadge !== false;
  const bookingLabel = (tweaks && tweaks.bookingLabel) || "Summer 2026";

  // Split headline so the emphasized phrase becomes <em>
  let headlineParts;
  if (emphasis && headline.includes(emphasis)) {
    const idx = headline.lastIndexOf(emphasis);
    headlineParts = [headline.slice(0, idx), emphasis, headline.slice(idx + emphasis.length)];
  } else {
    headlineParts = [headline, "", ""];
  }
  const featured = [
    { src: "assets/images/great-room.jpg", label: "Great Room" },
    { src: "assets/images/kitchen-1.jpg", label: "Kitchen" },
    { src: "assets/images/bath-1.jpg", label: "Primary Bath" },
    { src: "assets/images/closet.jpg", label: "Closet" },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy animate-in">
            <Eyebrow>Wellen Park · Venice, FL</Eyebrow>
            <h1 style={{ marginTop: 18 }}>
              {headlineParts[0]}
              {headlineParts[1] && <em>{headlineParts[1]}</em>}
              {headlineParts[2]}
            </h1>
            <p className="hero__lede">
              Entertainment Centers, Accent Walls, Beams, and the dozen smaller upgrades that make a house feel finished. Built by Taylor — start to finish, no subcontracted shortcuts.
            </p>
            <p className="hero__credentials">
              Licensed &amp; insured · based in Wellen Park, Venice FL
            </p>
            <div className="hero__cta-row">
              <button className="btn btn--primary" onClick={() => setRoute("contact")}>
                Get a quote <span className="arrow">→</span>
              </button>
              <button className="btn btn--ghost" onClick={() => setRoute("gallery")}>
                See the work
              </button>
            </div>
          </div>
          <div className="hero__visual">
            <img src="assets/images/great-room.jpg" alt="Recent project — great room" />
            {showBadge && (
              <div className="hero__badge">
                <span className="dot"></span>
                <div>
                  <div className="lbl">Now booking</div>
                  <div className="val">{bookingLabel}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* APPROACH STRIP — replaces categorical services list */}
      <section className="services">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>The kind of work</Eyebrow>
              <h2 style={{ marginTop: 14 }}>If it makes your house feel <em>more like home</em>, I probably do it.</h2>
            </div>
            <p>I focus on the finish-level work that changes how a room feels day to day — kitchens, baths, built-ins, paint and trim, flooring, tile, and the smaller upgrades that have been on your list too long. If it's not on the list, ask anyway.</p>
          </div>
          <div className="approach-tags">
            {["Entertainment Centers", "", "Ceilings", "Accent Walls", "Trimwork", "Storage/Closets", "Offices", "Other"].map((t) => (
              <span key={t} className="approach-tag">{t}</span>
            ))}
          </div>
          <div className="approach-cta">
            <button className="btn btn--ghost" onClick={() => setRoute("contact")}>
              Tell me about your project <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="featured">
        <div className="container">
          <div className="featured-shell">
            <div className="featured-image">
              <img src={featured[activeIdx].src} alt={featured[activeIdx].label} key={activeIdx} className="animate-in" />
              <div className="featured-thumbs">
                {featured.map((f, i) => (
                  <div key={i}
                       className={"featured-thumb " + (i === activeIdx ? "is-active" : "")}
                       onClick={() => setActiveIdx(i)}>
                    <img src={f.src} alt={f.label} />
                  </div>
                ))}
              </div>
            </div>
            <div className="featured-copy">
              <Eyebrow>Featured project</Eyebrow>
              <h2>Talamore Drive — full home refresh.</h2>
              <p style={{ color: "var(--c-ink-soft)", fontSize: 17, lineHeight: 1.65, marginTop: 4 }}>
                A top-to-bottom upgrade: kitchen reconfiguration, primary bath renovation, custom built-ins throughout, and trim &amp; paint across the entire interior. Wood-look floors tying every room together.
              </p>
              <div className="featured-stats">
                <div className="featured-stat">
                  <span className="lbl">Scope</span>
                  <span className="val">3,400 sq ft</span>
                </div>
                <div className="featured-stat">
                  <span className="lbl">Timeline</span>
                  <span className="val">14 weeks</span>
                </div>
                <div className="featured-stat">
                  <span className="lbl">Rooms touched</span>
                  <span className="val">11</span>
                </div>
                <div className="featured-stat">
                  <span className="lbl">Year</span>
                  <span className="val">2025</span>
                </div>
              </div>
              <button className="btn btn--ghost" onClick={() => setRoute("gallery")}>
                View the full gallery <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>How it works</Eyebrow>
              <h2 style={{ marginTop: 14 }}>Four steps. No surprises.</h2>
            </div>
            <p>Most homeowners' worst contractor stories come from murky scope and missing communication. Here's how I avoid both.</p>
          </div>
          <div className="process-steps">
            {PROCESS.map((p, i) => (
              <div key={i} className="process-step">
                <span className="num">{p.num} / 04</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT — anchor target #about, folded in from the old standalone page */}
      <section id="about" className="home-about" style={{ scrollMarginTop: 80 }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-portrait">
              <div className="stripes"></div>
              <span className="placeholder-text">PORTRAIT_OF_TAYLOR.JPG</span>
            </div>
            <div className="about-copy">
              <Eyebrow>About</Eyebrow>
              <h2 style={{ marginTop: 14 }}>Hi, I'm <em>Taylor.</em></h2>
              <p>
                I started Upgrades by Taylor because I kept hearing the same story: someone hired a contractor, and somewhere between the deposit and the finish line, things went sideways. I wanted to do this differently.
              </p>
              <p>
                I'm an owner-operated remodeler in Venice, FL. I'm on every job, every day — I plan the scope with you, source the materials, do the work, and walk you through the result. The buck stops with me, which is exactly the way I like it.
              </p>
              <p>
                I focus on the kind of work that makes a real difference in how a house feels: kitchens, baths, custom built-ins, paint and trim, flooring, tile. Smaller upgrades too — if it lives in your home and needs fixing or finishing, ask.
              </p>
              <div className="signature">— Taylor</div>
            </div>
          </div>

          <div className="about-values">
            <div className="about-value">
              <h4>Show up when I say I will.</h4>
              <p>Every day. With the materials I said I'd bring. Communicating before, during, and after.</p>
            </div>
            <div className="about-value">
              <h4>Quote what I can deliver.</h4>
              <p>Realistic timelines. Honest scope. No "discoveries" halfway through that double the price.</p>
            </div>
            <div className="about-value">
              <h4>Finish like it's my own house.</h4>
              <p>The trim is the tell. So is the caulk line. I won't sign off on work I wouldn't accept myself.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Ready to upgrade <em>your</em> place?</h2>
            <p>Send a few details — what room, rough timeline, anything else useful — and I'll come out for a free walkthrough.</p>
          </div>
          <div className="cta-band__actions">
            <button className="btn btn--accent" onClick={() => setRoute("contact")}>
              Get a quote <span className="arrow">→</span>
            </button>
            <a href="tel:+14439947770" className="btn btn--ghost" style={{ color: "var(--c-brand-ink)", borderColor: "rgba(255,255,255,0.3)" }}>
              (443) 994-7770
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// ============================================================
// SERVICES PAGE
// ============================================================
function ServicesPage({ setRoute }) {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Eyebrow>Services</Eyebrow>
          <h1>Things I can <em>build, fix,</em> or finish for you.</h1>
          <p className="page-hero__sub">
            Seven core categories. The list below is a starting point — if your project doesn't fit cleanly, ask anyway. Most don't.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 32 }}>
        <div className="container">
          <div className="svc-list">
            {SERVICES.map((s, i) => (
              <div key={i} className="svc-row">
                <div className="num">{s.num} / 0{SERVICES.length}</div>
                <div>
                  <h3>{s.title}</h3>
                </div>
                <p>{s.detail}</p>
                <ul>
                  {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Don't see what you need?</h2>
            <p>Most projects don't fit a category neatly. Describe what you're after and I'll tell you straight whether it's something I take on.</p>
          </div>
          <div className="cta-band__actions">
            <button className="btn btn--accent" onClick={() => setRoute("contact")}>
              Get in touch <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { HomePage, ServicesPage, ServiceIcon });
