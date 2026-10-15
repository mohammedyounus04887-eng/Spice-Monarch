import type { Metadata } from "next";
export const metadata: Metadata = { title: "Export services", description: "Plan your spice sourcing, packaging, documentation, and shipment.", alternates: { canonical: "/export" }, openGraph: { title: "Export services", description: "Plan your spice sourcing, packaging, documentation, and shipment.", url: "/export" } };

import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export default function ExportPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-10 lg:py-16">
      <Reveal>
        <div className="rounded-[32px] border border-border/60 bg-background/70 p-8 shadow-soft-xl backdrop-blur-xl">
          <SectionHeading as="h1"
            eyebrow="Export operations"
            title="A global-ready fulfillment model built for premium spice brands"
            description="We coordinate sourcing, documentation, packaging, and logistics with the precision expected by importers and modern food retailers."
          />
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Reliable cross-border movement",
            description: "Container planning and coordination for regular and high-demand shipments.",
            icon: Truck,
          },
          {
            title: "Documentation mastery",
            description: "Packing lists, certificates, and compliance support tailored to each market.",
            icon: ShieldCheck,
          },
          {
            title: "Worldwide reach",
            description: "A distribution approach aligned to premium foodservice, wholesale, and retail networks.",
            icon: Globe2,
          },
        ].map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
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

      <Reveal delay={0.08}>
        <div className="mt-8 rounded-[32px] border border-border/60 bg-gradient-to-br from-brand-green/12 via-background to-brand-gold/10 p-8 shadow-soft-xl">
          <h3 className="font-display text-3xl font-semibold tracking-tight text-foreground">
            Every shipment is supported by a luxury-grade trade experience.
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            From sample approvals to full-container execution, our team keeps your supply chain visible, responsive, and aligned with market expectations.
          </p>
          <Button asChild variant="gold" className="mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2">
              Discuss your export plan <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
