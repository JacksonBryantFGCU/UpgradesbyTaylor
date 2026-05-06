import { site } from "@/data/site";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-1.5 text-[12px] font-medium uppercase tracking-[0.16em] text-ink-soft/70">
      {children}
    </h3>
  );
}

export function ContactDetails() {
  return (
    <div className="pt-2">
      <Label>Call</Label>
      <a
        href={site.phoneHref}
        className="mb-7 block font-display text-2xl text-ink hover:text-brand md:mb-8 md:text-[28px]"
      >
        {site.phone}
      </a>

      <Label>Email</Label>
      <a
        href={site.emailHref}
        className="mb-7 block break-words font-display text-lg text-ink hover:text-brand md:mb-8 md:text-[22px]"
      >
        {site.email}
      </a>

      <Label>Service area</Label>
      <p className="text-[15px] leading-[1.6] text-ink-soft md:text-[16px]">
        Based in Wellen Park.
        <br />
        Serving Venice and the immediate surrounding area.
      </p>
    </div>
  );
}
