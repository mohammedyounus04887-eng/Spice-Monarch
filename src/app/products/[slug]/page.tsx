import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Download, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/site/reveal";
import { spiceProducts } from "@/lib/spice-data";

export function generateStaticParams() {
  return spiceProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = spiceProducts.find((entry) => entry.slug === slug);
  if (!product) return { title: "Product not found", robots: { index: false } };
  return { title: product.name, description: product.description, alternates: { canonical: `/products/${slug}` }, openGraph: { title: product.name, description: product.description, url: `/products/${slug}` } };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = spiceProducts.find((entry) => entry.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-10 lg:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 flex gap-2 text-sm text-muted-foreground"><Link href="/products" className="hover:text-foreground">Products</Link><span aria-hidden="true">/</span><span aria-current="page">{product.name}</span></nav>
      <Reveal>
        <div className="grid gap-8 rounded-[32px] border border-border/60 bg-background/70 p-6 shadow-soft-xl backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-green">
              Premium export specification
            </div>
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {product.name}
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">{product.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-border/60 bg-muted/70 px-3 py-1.5 text-sm text-muted-foreground">{product.origin}</span>
              <span className="rounded-full border border-border/60 bg-muted/70 px-3 py-1.5 text-sm text-muted-foreground">{product.grade}</span>
              <span className="rounded-full border border-border/60 bg-muted/70 px-3 py-1.5 text-sm text-muted-foreground">{product.purity}</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold">
                <Link href={`/contact?product=${product.slug}`} className="inline-flex items-center gap-2">
                  Request quote <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/brochures/spice-monarch-brochure.pdf" className="inline-flex items-center gap-2" target="_blank" rel="noreferrer">
                  <Download className="size-4" /> Download brochure
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-border/60 bg-background/70">
            <Image src={product.image} alt={product.name} width={1200} height={900} className="h-full min-h-[320px] w-full object-cover" />
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal delay={0.06}>
          <Card className="border-border/60 bg-background/70 shadow-soft-xl">
            <CardHeader>
              <CardTitle className="font-display text-2xl">Key product details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-border/60 bg-muted/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">Packaging</div>
                <div className="mt-2 text-base text-foreground">{product.packaging}</div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">MOQ</div>
                <div className="mt-2 text-base text-foreground">{product.moq}</div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">Container capacity</div>
                <div className="mt-2 text-base text-foreground">{product.containerCapacity}</div>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-6">
            <Card className="border-border/60 bg-background/70 shadow-soft-xl">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
                  {product.specifications.map((spec) => (
                    <li key={spec} className="rounded-2xl border border-border/60 bg-muted/60 p-3">{spec}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-background/70 shadow-soft-xl">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Documentation to discuss</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">Confirm current certificates and batch reports with the export team before ordering.</p>
                {product.certifications.map((certificate) => (
                  <div key={certificate} className="flex items-center gap-3 rounded-2xl border border-border/60 bg-muted/60 p-3 text-sm text-foreground">
                    <ShieldCheck className="size-4 text-brand-gold" />
                    {certificate}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
