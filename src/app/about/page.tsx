import type { Metadata } from "next";
export const metadata: Metadata = { title: "About Spice Monarch", description: "Discover the sourcing approach behind Spice Monarch.", alternates: { canonical: "/about" }, openGraph: { title: "About Spice Monarch", description: "Discover the sourcing approach behind Spice Monarch.", url: "/about" } };

import Image from "next/image";
import { ArrowRight, Gem, Handshake, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-10 lg:py-16">
      <Reveal>
        <div className="grid gap-8 rounded-[32px] border border-border/60 bg-background/70 p-8 shadow-soft-xl backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <SectionHeading as="h1"
              eyebrow="About Spice Monarch"
              title="We bring heritage, refinement, and dependable trade execution to every shipment"
              description="Spice Monarch is an export-focused spice partner shaped by meticulous sourcing, premium presentation, and a deep understanding of what modern buyers need from a long-term partner."
            />
            <Button asChild variant="gold">
              <Link href="/contact" className="inline-flex items-center gap-2">
                Meet the export team <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-border/60">
            <Image
              src="/images/green-cardamom.webp"
              alt="Spice Monarch premium sourcing"
              width={1200}
              height={900}
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { title: "Crafted with care", description: "We source spices with respect for origin, freshness, and product integrity.", icon: Sparkles },
          { title: "Built for partnership", description: "Our team supports buyers through documentation, logistics, and responsive communication.", icon: Handshake },
          { title: "Premium by design", description: "From presentation to performance, every detail is shaped for modern luxury markets.", icon: Gem },
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
