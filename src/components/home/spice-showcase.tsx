"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Leaf, MapPin } from "lucide-react";
import { spiceProducts } from "@/lib/spice-data";
import { featuredSpices } from "@/lib/product-experience";

export function SpiceShowcase() {
  const [active, setActive] = useState(0);
  const feature = featuredSpices[active];
  const product = spiceProducts.find((entry) => entry.slug === feature.slug)!;
  return (
    <section className="spice-hero relative mx-auto max-w-[1440px] overflow-hidden rounded-b-[40px] bg-[#123729] text-[#fffaf0] sm:mx-4 sm:mt-4 sm:rounded-[40px] lg:mx-auto" aria-label="Discover our signature spices">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_15%,#49684066,transparent_55%)]" />
      <div className="relative grid gap-10 px-6 pb-9 pt-12 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-14 lg:py-14">
        <div className="flex flex-col justify-center">
          <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-[#d5bc80]"><Leaf className="size-4" /> Indian origins. Global possibilities.</p>
          <h1 className="mt-7 max-w-2xl font-display text-[clamp(2.8rem,5.7vw,5.3rem)] font-medium leading-[1.04] tracking-tight">A world of flavour.<br /><span className="text-[#ddbf78]">A partner you trust.</span></h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#e6eadfcc] sm:text-lg sm:leading-8">Discover distinctive spices for your business. Explore the origins, compare your favourites, and build a sourcing brief that’s yours.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#d9b75f] px-6 py-3 text-sm font-semibold text-[#173729] transition hover:bg-[#ecd399]">Explore our spices <ArrowRight className="size-4" /></Link>
            <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium transition hover:bg-white/10">Start a conversation <ArrowUpRight className="size-4" /></Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-5 text-xs text-[#d2dccd]">
            <span>20 distinctive spices</span><span>Bulk & private label</span><span>Destination-led sourcing</span>
          </div>
        </div>
        <div className="relative min-w-0">
          <div className="relative overflow-hidden rounded-[28px] bg-[#f5eee2]">
            <Image key={product.slug} src={product.image} alt={`${product.name}: photograph of the spice`} width={1200} height={1000} priority={active === 0} sizes="(max-width: 1024px) 100vw, 620px" className="aspect-[6/5] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#143c2b]">The origin collection</div>
            <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
              <p className="flex items-center gap-1.5 text-xs text-white/80"><MapPin className="size-3.5" />{product.origin}</p>
              <div className="mt-2 flex items-end justify-between gap-3"><h2 className="font-display text-3xl font-medium text-white sm:text-4xl">{product.name}</h2><Link href={`/products/${product.slug}`} aria-label={`Discover ${product.name}`} className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-[#143c2b] transition hover:scale-105"><ArrowUpRight className="size-5" /></Link></div>
              <p className="mt-2 text-sm text-white/90">{feature.note}</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2" role="group" aria-label="Choose a featured spice">
            {featuredSpices.map((item, index) => { const entry = spiceProducts.find((p) => p.slug === item.slug)!; return <button key={item.slug} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`min-h-14 rounded-2xl border px-2 py-3 text-xs transition sm:text-sm ${active === index ? "border-[#ddbf78] bg-[#ddbf78]/15 text-[#efdaa7]" : "border-white/15 text-white/70 hover:border-white/40 hover:bg-white/5"}`}><span className="mx-auto mb-2 block size-2 rounded-full" style={{background:item.accent}} />{entry.name}</button>; })}
          </div>
          <p className="mt-4 min-h-10 text-sm leading-6 text-[#d2dccd]" aria-live="polite">{feature.story}</p>
        </div>
      </div>
    </section>
  );
}
