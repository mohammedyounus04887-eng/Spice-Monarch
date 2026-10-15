import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("section-heading flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start text-left")}>
      <span className="inline-flex w-fit items-center rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-green">
        {eyebrow}
      </span>
      <Heading className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </Heading>
      <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
      {action ? <div className="mt-1">{action}</div> : null}
    </div>
  );
}

