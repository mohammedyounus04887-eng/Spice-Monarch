import type { Metadata } from "next";
export const metadata: Metadata = { title: "Sourcing journal", description: "Perspectives on spice sourcing, supply consistency, and documentation.", alternates: { canonical: "/blog" }, openGraph: { title: "Sourcing journal", description: "Perspectives on spice sourcing, supply consistency, and documentation.", url: "/blog" } };

import { blogPosts } from "@/lib/spice-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-10 lg:py-16">
      <Reveal>
        <div className="rounded-[32px] border border-border/60 bg-background/70 p-8 shadow-soft-xl backdrop-blur-xl">
          <SectionHeading as="h1"
            eyebrow="Blog"
            title="Perspective for buyers building premium spice programs"
            description="Read curated insights on sourcing, quality, and global market expectations from the Spice Monarch team."
          />
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Reveal key={post.title} delay={index * 0.05}>
            <Card className="h-full border-border/60 bg-background/70 shadow-soft-xl">
              <CardHeader>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">{post.category}</div>
                <CardTitle className="font-display text-2xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-muted-foreground">{post.excerpt}</CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
