import type { Service } from "@/data/services";
import { cn } from "@/lib/cn";

type ServiceRowProps = {
  service: Service;
  total: number;
  isLast: boolean;
};

export function ServiceRow({ service, total, isLast }: ServiceRowProps) {
  const totalLabel = `0${total}`;

  return (
    <article
      className={cn(
        "grid grid-cols-1 gap-3 border-t border-line py-7",
        "lg:grid-cols-[80px_1fr_2fr_1fr] lg:items-start lg:gap-8 lg:py-9",
        isLast && "border-b"
      )}
    >
      <div className="font-mono text-[12px] tracking-[0.12em] text-ink-soft/70 lg:pt-1.5">
        {service.num} / {totalLabel}
      </div>

      <h3 className="font-display text-[28px] tracking-[-0.015em] text-ink leading-[1.15]">
        {service.title}
      </h3>

      <p className="text-[15px] leading-[1.6] text-ink-soft">{service.detail}</p>

      <ul className="flex flex-col gap-1.5">
        {service.bullets.map((b) => (
          <li
            key={b}
            className="relative pl-4 text-[14px] text-ink-soft before:absolute before:left-0 before:font-mono before:text-accent before:content-['+']"
          >
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}
