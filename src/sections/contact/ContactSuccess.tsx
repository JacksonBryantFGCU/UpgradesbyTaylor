import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function ContactSuccess({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-2xl border border-line bg-paper-soft p-12 text-center">
      <h3 className="mb-3 font-display text-[32px] text-ink">
        Thanks — message received.
      </h3>
      <p className="text-ink-soft">
        I'll get back to you within a business day. If it's urgent, give me a call at{" "}
        <a href={site.phoneHref} className="text-ink underline">
          {site.phone}
        </a>
        .
      </p>
      <Button variant="ghost" size="md" className="mt-6" onClick={onReset}>
        Send another
      </Button>
    </div>
  );
}
