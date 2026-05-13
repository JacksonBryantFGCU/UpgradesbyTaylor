import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Field, FieldRow, Input, Textarea, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { ContactSuccess } from "@/sections/contact/ContactSuccess";

const PROJECT_TYPES = [
  "Entertainment Centers",
  "Ceilings",
  "Accent Walls",
  "Trimwork",
  "Storage / Closets",
  "Offices",
  "Other / Not sure",
];

const TIMELINES = [
  "ASAP",
  "Within 1 month",
  "Within 3 months",
  "Within 6 months",
  "Just exploring",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  project: string;
  timeline: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  project: PROJECT_TYPES[0],
  timeline: TIMELINES[2],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update =
    (k: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSubmitted(false);
    setError(null);
    setForm(initial);
  };

  if (submitted) return <ContactSuccess onReset={reset} />;

  return (
    <form onSubmit={submit} className="grid gap-5">
      <FieldRow>
        <Field label="Name" htmlFor="contact-name">
          <Input
            id="contact-name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Phone" htmlFor="contact-phone">
          <Input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="(555) 555-5555"
          />
        </Field>
      </FieldRow>

      <Field label="Email" htmlFor="contact-email">
        <Input
          id="contact-email"
          type="email"
          required
          value={form.email}
          onChange={update("email")}
          placeholder="you@example.com"
        />
      </Field>

      <FieldRow>
        <Field label="Project type" htmlFor="contact-project">
          <Select id="contact-project" value={form.project} onChange={update("project")}>
            {PROJECT_TYPES.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </Select>
        </Field>
        <Field label="Timeline" htmlFor="contact-timeline">
          <Select id="contact-timeline" value={form.timeline} onChange={update("timeline")}>
            {TIMELINES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </Select>
        </Field>
      </FieldRow>

      <Field label="Tell me about it" htmlFor="contact-message">
        <Textarea
          id="contact-message"
          required
          value={form.message}
          onChange={update("message")}
          placeholder="What room, what you're hoping to change, any details that'd help me prep for a walkthrough."
        />
      </Field>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="primary" size="lg" disabled={loading}>
          {loading ? "Sending…" : <>Send message <span aria-hidden>→</span></>}
        </Button>
        <span className="text-[12px] text-ink-soft/70">
          I'll respond within a business day.
        </span>
      </div>
    </form>
  );
}
