/* global React, ReactDOM, Header, Footer, HomePage, ServicesPage, GalleryPage, AboutPage, ContactPage, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakSelect */
const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "navy",
  "fontDisplay": "Source Serif",
  "fontBody": "Inter",
  "logoVariant": "lockup",
  "heroHeadline": "Honest craftsmanship for the homes you actually live in.",
  "heroEmphasis": "you actually live in.",
  "showBookingBadge": true,
  "bookingLabel": "Summer 2026"
}/*EDITMODE-END*/;

const FONT_PAIRS = {
  "Fraunces":      { display: "Fraunces",        body: "Inter" },
  "Source Serif":  { display: "Source Serif 4",  body: "Inter" },
  "Playfair":      { display: "Playfair Display", body: "Inter" },
  "DM Serif":      { display: "DM Serif Display", body: "DM Sans" },
  "Bricolage":     { display: "Bricolage Grotesque", body: "Inter" },
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useStateApp(() => (window.location.hash || "#home").slice(1) || "home");

  // Hash router
  useEffectApp(() => {
    const onHash = () => {
      const r = (window.location.hash || "#home").slice(1) || "home";
      setRoute(r);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffectApp(() => {
    if (window.location.hash !== "#" + route) {
      window.history.replaceState(null, "", "#" + route);
    }
  }, [route]);

  // Apply theme
  useEffectApp(() => {
    document.documentElement.setAttribute("data-theme", tweaks.theme);
  }, [tweaks.theme]);

  // Apply fonts
  useEffectApp(() => {
    const pair = FONT_PAIRS[tweaks.fontDisplay] || FONT_PAIRS["Fraunces"];
    document.documentElement.style.setProperty("--font-display", `"${pair.display}", Georgia, serif`);
    document.documentElement.style.setProperty("--font-body", `"${pair.body}", -apple-system, sans-serif`);
  }, [tweaks.fontDisplay]);

  // After route switches to home with a hash like #about,
  // smooth-scroll into that section once it has rendered.
  useEffectApp(() => {
    if (route !== "home") return;
    const hash = window.location.hash.slice(1);
    if (hash && hash !== "home") {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    }
  }, [route]);

  let page;
  switch (route) {
    // 'about' folds into Home as an anchor section now —
    // legacy hash links route to home and the effect above scrolls them in.
    case "gallery":      page = <GalleryPage setRoute={setRoute} />; break;
    case "about":        page = <HomePage setRoute={setRoute} tweaks={tweaks} />; break;
    case "contact":      page = <ContactPage setRoute={setRoute} />; break;
    default:             page = <HomePage setRoute={setRoute} tweaks={tweaks} />;
  }

  return (
    <>
      <Header route={route} setRoute={setRoute} logoVariant={tweaks.logoVariant} />
      {page}
      <Footer setRoute={setRoute} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Hero copy">
          <TweakText
            label="Headline"
            value={tweaks.heroHeadline}
            onChange={(v) => setTweak("heroHeadline", v)}
          />
          <TweakText
            label="Italicized phrase"
            value={tweaks.heroEmphasis}
            onChange={(v) => setTweak("heroEmphasis", v)}
          />
        </TweakSection>

        <TweakSection title="Booking badge">
          <TweakToggle
            label="Show on hero"
            value={tweaks.showBookingBadge}
            onChange={(v) => setTweak("showBookingBadge", v)}
          />
          <TweakText
            label="Label"
            value={tweaks.bookingLabel}
            onChange={(v) => setTweak("bookingLabel", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
