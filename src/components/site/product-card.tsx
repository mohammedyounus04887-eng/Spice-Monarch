"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Eye, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSpiceCategory } from "@/lib/product-experience";
import type { SpiceProduct } from "@/lib/spice-data";

type ProductCardProps = { product: SpiceProduct; selected?: boolean; onToggleSelection?: () => void };
export function ProductCard({ product, selected = false, onToggleSelection }: ProductCardProps) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!open) return;
    dialog.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  return (
    <article className={`monarch-product group flex h-full flex-col overflow-hidden rounded-[26px] border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-xl ${selected ? "border-brand-green ring-2 ring-brand-green/20" : "border-border/80 hover:border-brand-gold/60"}`}>
      <div className="relative overflow-hidden bg-[#eee9df]">
        <button type="button" onClick={() => setOpen(true)} className="block w-full" aria-label={`Preview ${product.name}`}>
          <Image src={product.image} alt={`${product.name} spice photograph`} width={900} height={650} sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </button>
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#164831] shadow-sm">{getSpiceCategory(product)}</span>
        <button type="button" onClick={() => setOpen(true)} className="absolute bottom-4 right-4 inline-flex min-h-9 items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-medium text-[#164831] shadow-sm transition hover:bg-white" aria-label={`Quick view ${product.name}`}><Eye className="size-3.5" /> Quick view</button>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">{product.origin}</p>
        <h2 className="mt-2 font-display text-2xl font-semibold"><Link href={`/products/${product.slug}`} className="hover:text-brand-green">{product.name}</Link></h2>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{product.tagline}</p>
        <div className="mt-5 grid grid-cols-2 gap-3 border-y border-border/70 py-3 text-xs"><div><span className="block text-muted-foreground">Purity</span><span className="mt-1 block font-medium">{product.purity}</span></div><div><span className="block text-muted-foreground">Shelf life</span><span className="mt-1 block font-medium">{product.shelfLife}</span></div></div>
        <div className="mt-4 flex items-center justify-between gap-2">
          <Link href={`/products/${product.slug}`} className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-brand-green">View details <ArrowRight className="size-4" /></Link>
          {onToggleSelection ? <button type="button" aria-pressed={selected} aria-label={`${selected ? "Remove" : "Compare"} ${product.name}`} onClick={onToggleSelection} className={`inline-flex min-h-10 items-center gap-1.5 rounded-full border px-3 text-xs font-medium transition ${selected ? "border-brand-green bg-brand-green/10 text-brand-green" : "border-border hover:bg-muted"}`}>{selected ? <Check className="size-3.5" /> : <Plus className="size-3.5" />}{selected ? "Selected" : "Compare"}</button> : <button type="button" onClick={() => setOpen(true)} className="min-h-10 px-2 text-xs font-medium text-muted-foreground hover:text-foreground">See specs</button>}
        </div>
      </div>
      {open && <dialog ref={dialog} aria-labelledby={`quick-title-${product.slug}`} onClose={() => setOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%_-_2rem)] max-w-4xl overflow-y-auto rounded-3xl border border-border bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/65 backdrop:backdrop-blur-sm">
        <div className="relative grid md:grid-cols-2">
          <button type="button" onClick={() => dialog.current?.close()} aria-label={`Close ${product.name} preview`} className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-background shadow-md"><X className="size-5" /></button>
          <Image src={product.image} alt={`${product.name} close-up photograph`} width={1200} height={1200} sizes="(max-width: 768px) 90vw, 450px" className="aspect-square h-full max-h-[50dvh] w-full object-cover md:max-h-none" />
          <div className="p-6 sm:p-8"><p className="text-xs font-medium uppercase tracking-widest text-brand-green">{getSpiceCategory(product)}</p><h2 id={`quick-title-${product.slug}`} className="mt-3 font-display text-3xl font-semibold">{product.name}</h2><p className="mt-1 text-sm italic text-muted-foreground">{product.scientificName}</p><p className="mt-4 text-sm leading-7 text-muted-foreground">{product.description}</p><dl className="mt-5 grid grid-cols-2 gap-4 text-sm">{[["Origin",product.origin],["Purity",product.purity],["Moisture",product.moisture],["Minimum order",product.moq]].map(([label,value]) => <div key={label}><dt className="text-xs text-muted-foreground">{label}</dt><dd className="mt-1 font-medium">{value}</dd></div>)}</dl><div className="mt-6 flex flex-wrap gap-3"><Button asChild variant="gold"><Link href={`/contact?product=${product.slug}`}>Ask about {product.name.toLowerCase()}</Link></Button><Button asChild variant="outline"><Link href={`/products/${product.slug}`}>Full specifications</Link></Button></div></div>
        </div>
      </dialog>}
    </article>
  );
}

