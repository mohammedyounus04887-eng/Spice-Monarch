import type { Metadata } from "next";
import { Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/site/section-heading";
import { InquiryForm } from "@/components/site/inquiry-form";
import { spiceProducts } from "@/lib/spice-data";
import { contactEmail, contactPhone } from "@/lib/site";
export const metadata: Metadata = { title: "Request a quote", description: "Prepare a spice sourcing inquiry with your product, quantity, packaging, and destination.", alternates: { canonical: "/contact" }, openGraph: { title: "Request a quote", url: "/contact" } };
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ product?: string; products?: string }> }) {
  const { product, products } = await searchParams;
  const selectedSlugs = typeof products === "string" ? [...new Set(products.split(","))].filter(slug => spiceProducts.some(p => p.slug === slug)).slice(0,3) : [];
  return <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-10 lg:py-16">
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="space-y-8">
        <SectionHeading as="h1" eyebrow="Let’s talk sourcing" title="Good partnerships start with a conversation." description="Tell us what you’re looking for. Prepare a clear inquiry covering your market, product specifications, and shipment needs." />
        <div className="space-y-4 rounded-3xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-semibold">A useful brief includes</h2>
          <ol className="list-decimal space-y-3 pl-5 text-sm leading-6 text-muted-foreground"><li>Your spice selection and required grade</li><li>Order volume and preferred packaging</li><li>Destination, delivery timeline, and documentation</li></ol>
          {contactEmail && <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 break-all text-sm"><Mail className="size-4 shrink-0" />{contactEmail}</a>}
          {contactPhone && <a href={`tel:${contactPhone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 text-sm"><Phone className="size-4" />{contactPhone}</a>}
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-brand-green">Explore the catalogue <ArrowRight className="size-4" /></Link>
        </div>
      </div>
      <div className="rounded-[32px] border border-border bg-card p-6 shadow-soft-xl sm:p-8"><InquiryForm email={contactEmail} phone={contactPhone} initialProduct={typeof product === "string" ? product : ""} selectedSlugs={selectedSlugs} /></div>
    </div>
  </div>;
}
