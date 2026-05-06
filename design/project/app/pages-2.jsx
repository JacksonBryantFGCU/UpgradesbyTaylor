/* global React, Eyebrow, GALLERY */
const { useState: useStateP2, useEffect: useEffectP2, useMemo: useMemoP2 } = React;

// ============================================================
// GALLERY PAGE w/ filter + lightbox
// ============================================================
function GalleryPage() {
  const [filter, setFilter] = useStateP2("All");
  const [active, setActive] = useStateP2(null);

  const cats = useMemoP2(() => ["All", ...Array.from(new Set(GALLERY.map(g => g.cat)))], []);
  const items = useMemoP2(
    () => filter === "All" ? GALLERY : GALLERY.filter(g => g.cat === filter),
    [filter]
  );

  useEffectP2(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive(a => (a + 1) % items.length);
      if (e.key === "ArrowLeft")  setActive(a => (a - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, items.length]);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Eyebrow>Gallery</Eyebrow>
          <h1>The <em>finished</em> work.</h1>
          <p className="page-hero__sub">A collection of recent projects — kitchens, baths, built-ins, exteriors. Click any image to see it full-size.</p>
          <div className="gallery-filters">
            {cats.map(c => (
              <button key={c}
                      className={"gallery-filter " + (filter === c ? "is-active" : "")}
                      onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="gallery-grid">
            {items.map((g, i) => (
              <div key={g.src}
                   className="gal-item"
                   onClick={() => setActive(i)}>
                <img src={g.src} alt={g.label} loading="lazy" />
                <span className="label">{g.cat} · {g.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <img src={items[active].src} alt={items[active].label} onClick={e => e.stopPropagation()} />
          <button className="lightbox__close" onClick={() => setActive(null)}>✕</button>
          <button className="lightbox__nav prev" onClick={(e) => { e.stopPropagation(); setActive((active - 1 + items.length) % items.length); }}>‹</button>
          <button className="lightbox__nav next" onClick={(e) => { e.stopPropagation(); setActive((active + 1) % items.length); }}>›</button>
          <div className="lightbox__caption">{items[active].cat} · {items[active].label} — {active + 1} / {items.length}</div>
        </div>
      )}
    </main>
  );
}

// ============================================================
// ABOUT PAGE
// ============================================================
function AboutPage({ setRoute }) {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Eyebrow>About</Eyebrow>
          <h1>Hi, I'm <em>Taylor.</em></h1>
          <p className="page-hero__sub">
            I started Upgrades by Taylor because I kept hearing the same story: someone hired a contractor, and somewhere between the deposit and the finish line things went sideways. I wanted to do this differently.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="about-grid">
            <div className="about-portrait">
              <div className="stripes"></div>
              <span className="placeholder-text">PORTRAIT_OF_TAYLOR.JPG</span>
            </div>
            <div className="about-copy">
              <Eyebrow>The story</Eyebrow>
              <h2 style={{ marginTop: 14 }}>An owner-operated remodeler in Venice, FL.</h2>
              <p>
                I've been working in homes for years — first as part of larger crews, then on my own. What I learned is simple: most clients don't need a slick sales process or a dozen subcontractors juggling schedules. They need one person who shows up, communicates clearly, and does the work the way they'd do it in their own home.
              </p>
              <p>
                That's what Upgrades by Taylor is. I'm on every job, every day. I plan the scope with you, source the materials, do the work, and walk you through the result. The buck stops with me — which is exactly the way I like it.
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

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Want to talk through <em>your</em> project?</h2>
            <p>Free walkthrough at your home. We'll talk through what you want and I'll tell you what's realistic.</p>
          </div>
          <div className="cta-band__actions">
            <button className="btn btn--accent" onClick={() => setRoute("contact")}>
              Schedule a walkthrough <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

// ============================================================
// CONTACT PAGE
// ============================================================
function ContactPage() {
  const [submitted, setSubmitted] = useStateP2(false);
  const [form, setForm] = useStateP2({
    name: "", email: "", phone: "", project: "Kitchen remodel", timeline: "Within 3 months", message: ""
  });
  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Eyebrow>Contact</Eyebrow>
          <h1>Let's talk about <em>your project.</em></h1>
          <p className="page-hero__sub">
            Reach out by phone, email, or the form below. I respond within a business day, usually the same day.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-block">
              <h3>Call</h3>
              <a href="tel:+14439947770" className="big" style={{ color: "var(--c-ink)" }}>(443) 994-7770</a>

              <h3>Email</h3>
              <a href="mailto:upgradesbytaylor@gmail.com" className="big" style={{ color: "var(--c-ink)", fontSize: 22, wordBreak: "break-word" }}>upgradesbytaylor@gmail.com</a>

              <h3>Service area</h3>
              <p style={{ color: "var(--c-ink-soft)", marginBottom: 8, fontSize: 16, lineHeight: 1.6 }}>
                Based in Wellen Park.<br/>Serving Venice and the immediate surrounding area.
              </p>
            </div>

            <div>
              {submitted ? (
                <div className="contact-success">
                  <h3>Thanks — message received.</h3>
                  <p>I'll get back to you within a business day. If it's urgent, give me a call at (443) 994-7770.</p>
                  <button className="btn btn--ghost" style={{ marginTop: 24 }} onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", project: "Kitchen remodel", timeline: "Within 3 months", message: "" }); }}>
                    Send another
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={submit}>
                  <div className="field--row">
                    <div className="field">
                      <label>Name</label>
                      <input type="text" required value={form.name} onChange={update("name")} placeholder="Jane Doe" />
                    </div>
                    <div className="field">
                      <label>Phone</label>
                      <input type="tel" value={form.phone} onChange={update("phone")} placeholder="(555) 555-5555" />
                    </div>
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" required value={form.email} onChange={update("email")} placeholder="you@example.com" />
                  </div>
                  <div className="field--row">
                    <div className="field">
                      <label htmlFor="project">Project type</label>
                      <select id="project" value={form.project} onChange={update("project")}>
                        <option>Entertainment Centers</option>
                        <option>Ceilings</option>
                        <option>Accent Walls</option>
                        <option>Trimwork</option>
                        <option>Storage</option>
                        <option>Offices</option>
                        <option>Other</option>
                        <option>Multiple / not sure</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="timeline">Timeline</label>
                      <select id="timeline" value={form.timeline} onChange={update("timeline")}>
                        <option>ASAP</option>
                        <option>Within 1 month</option>
                        <option>Within 3 months</option>
                        <option>Within 6 months</option>
                        <option>Just exploring</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label>Tell me about it</label>
                    <textarea required value={form.message} onChange={update("message")} placeholder="What room, what you're hoping to change, any details that'd help me prep for a walkthrough." />
                  </div>
                  <div className="submit-row">
                    <button type="submit" className="btn btn--primary">
                      Send message <span className="arrow">→</span>
                    </button>
                    <span className="note">I'll respond within a business day.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { GalleryPage, AboutPage, ContactPage });
