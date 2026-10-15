import type { Metadata } from "next";
export const metadata: Metadata = { title: "Quality assurance", description: "Learn about traceability, laboratory verification, and shipment inspection.", alternates: { canonical: "/quality" }, openGraph: { title: "Quality assurance", description: "Learn about traceability, laboratory verification, and shipment inspection.", url: "/quality" } };

import { BadgeCheck, FlaskConical, Leaf, ShieldCheck } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export default function QualityPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-10 lg:py-16">
      <Reveal>
        <div className="rounded-[32px] border border-border/60 bg-background/70 p-8 shadow-soft-xl backdrop-blur-xl">
          <SectionHeading as="h1"
            eyebrow="Quality assurance"
            title="Rigorous standards from procurement to final inspection"
            description="We combine sensory review, laboratory testing, and third-party assurance practices to deliver consistent spices that meet the expectations of premium markets."
          />
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { title: "Traceable sourcing", description: "Documented provenance and farm-level oversight for each major spice family.", icon: Leaf },
          { title: "Laboratory verification", description: "Moisture, purity, and contamination checks aligned to export requirements.", icon: FlaskConical },
          { title: "Compliance excellence", description: "Certificates and test evidence supporting importer audits and customs review.", icon: ShieldCheck },
          { title: "Final inspection", description: "Visual, sensory, and packing inspections before dispatch to preserve quality.", icon: BadgeCheck },
        ].map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <Card className="h-full border-border/60 bg-background/70 shadow-soft-xl">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-2xl border border-border/60 bg-brand-gold/10">
                  <item.icon className="size-5 text-brand-gold" />
                </div>
                <CardTitle className="font-display text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-muted-foreground">{item.description}</CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
