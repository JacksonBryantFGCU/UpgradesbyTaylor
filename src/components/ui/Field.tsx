import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

const controlBase = cn(
  "w-full rounded-lg border border-line bg-paper-soft px-4 py-3.5 text-[15px] text-ink",
  "transition-colors duration-200 placeholder:text-ink-soft/50",
  "focus:border-brand focus:bg-paper focus:outline-none"
);

type FieldProps = {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
};

export function Field({ label, htmlFor, children, className }: FieldProps) {
  return (
    <div className={cn("grid gap-1.5", className)}>
      <label
        htmlFor={htmlFor}
        className="text-[12px] uppercase tracking-[0.12em] text-ink-soft/70"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export function FieldRow({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}

export function Input({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...rest} className={cn(controlBase, className)} />;
}

export function Textarea({
  className,
  ...rest
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea {...rest} className={cn(controlBase, "min-h-[140px] resize-y", className)} />
  );
}

export function Select({
  className,
  children,
  ...rest
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...rest} className={cn(controlBase, "appearance-none pr-10", className)}>
      {children}
    </select>
  );
}
