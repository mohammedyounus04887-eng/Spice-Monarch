import type { Metadata } from "next";
export const metadata: Metadata = { title: "Frequently asked questions", description: "Answers about spice samples, minimum orders, packing, and export enquiries.", alternates: { canonical: "/faq" }, openGraph: { title: "Frequently asked questions", description: "Answers about spice samples, minimum orders, packing, and export enquiries.", url: "/faq" } };

import { faqItems } from "@/lib/spice-data";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-10 lg:py-16">
      <Reveal>
        <div className="rounded-[32px] border border-border/60 bg-background/70 p-8 shadow-soft-xl backdrop-blur-xl">
          <SectionHeading as="h1"
            eyebrow="FAQ"
            title="Answers to the questions premium buyers ask first"
            description="From order sizes to documentation, here are the details most buyers want to confirm before moving forward."
          />
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6">
        {faqItems.map((item, index) => (
          <Reveal key={item.question} delay={index * 0.04}>
            <details className="group rounded-2xl border border-border bg-card p-6 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold">{item.question}<Plus aria-hidden="true" className="size-5 shrink-0 transition-transform group-open:rotate-45" /></summary><p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground">{item.answer}</p></details>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
