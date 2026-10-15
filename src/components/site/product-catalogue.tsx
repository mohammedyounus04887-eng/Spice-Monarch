"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { ProductCard } from "@/components/site/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { spiceProducts } from "@/lib/spice-data";
import { getSpiceCategory, spiceCategories, type SpiceCategory } from "@/lib/product-experience";
export function ProductCatalogue() {
 const [query,setQuery]=useState(""); const [sort,setSort]=useState("featured");
 const [category,setCategory]=useState<SpiceCategory>("All spices");
 const [selected,setSelected]=useState<string[]>([]); const [notice,setNotice]=useState("");
 const products=useMemo(()=>{
  const terms=query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const matches=spiceProducts.filter(p=>(category==="All spices"||getSpiceCategory(p)===category)&&terms.every(t=>[p.name,p.scientificName,p.origin,...p.applications].join(" ").toLowerCase().includes(t)));
  return sort==="name"?matches.sort((a,b)=>a.name.localeCompare(b.name)):matches;
 },[query,sort,category]);
 const comparison=selected.map(slug=>spiceProducts.find(p=>p.slug===slug)!);
 function toggle(slug:string){if(selected.includes(slug)){setSelected(selected.filter(s=>s!==slug));setNotice("");}else if(selected.length<3){setSelected([...selected,slug]);setNotice("");}else setNotice("Compare three spices at a time. Remove one to add another.");}
 return <section className="mt-10" aria-label="Browse spices">
 <div className="rounded-3xl border border-border bg-card p-5 sm:p-6"><div className="flex flex-col gap-4 sm:flex-row sm:items-end">
 <div className="flex-1"><label htmlFor="catalogue-search" className="mb-2 block text-sm font-medium">Find your spice</label><div className="relative"><Search className="absolute left-3 top-3 size-4 text-muted-foreground" aria-hidden="true"/><Input id="catalogue-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by name, origin, or application" className="pl-10"/></div></div>
 <div><label htmlFor="catalogue-sort" className="mb-2 block text-sm font-medium">Sort by</label><select id="catalogue-sort" value={sort} onChange={e=>setSort(e.target.value)} className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm sm:w-48"><option value="featured">Featured range</option><option value="name">Name: A–Z</option></select></div></div>
 <div className="category-choices" aria-label="Spice categories">{spiceCategories.map(c=><button key={c} type="button" aria-pressed={category===c} onClick={()=>setCategory(c)} className={`rounded-full border px-4 py-2 text-sm transition-colors ${category===c?"border-brand-green bg-brand-green text-background":"border-border hover:border-brand-green"}`}><Image src={c==="Seeds"?"/images/cumin-v3.webp":c==="Ground spices"?"/images/paprika-powder.webp":c==="Whole spices"?"/images/green-cardamom-v3.webp":"/images/red-chilli-v3.webp"} alt="" width={60} height={60}/><span>{c}</span> <span className="ml-1 opacity-70">{c==="All spices"?spiceProducts.length:spiceProducts.filter(p=>getSpiceCategory(p)===c).length}</span></button>)}</div></div>
 <div className="my-5 flex flex-wrap justify-between gap-2 text-sm text-muted-foreground"><p role="status">{products.length} of {spiceProducts.length} products</p><p>Quick view a spice, or compare up to three.</p></div>
 {products.length?<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{products.map(p=><ProductCard key={p.slug} product={p} selected={selected.includes(p.slug)} onToggleSelection={()=>toggle(p.slug)}/>)}</div>:<div className="rounded-3xl border border-dashed border-border p-12 text-center"><h2 className="font-display text-2xl">No spices found</h2><p className="my-4 text-muted-foreground">Try another name, category, growing region, or application.</p><Button variant="outline" onClick={()=>{setQuery("");setCategory("All spices");}}>Reset filters</Button></div>}
 {selected.length>0&&<aside className="sticky bottom-4 z-30 mt-8 rounded-3xl border border-brand-gold/50 bg-background p-4 shadow-xl sm:p-5" aria-label="Spice comparison"><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="font-semibold">Your selection · {selected.length}/3</p><div className="mt-2 flex flex-wrap gap-2">{comparison.map(p=><button type="button" key={p.slug} onClick={()=>toggle(p.slug)} aria-label={`Remove ${p.name} from comparison`} className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs">{p.name}<X className="size-3"/></button>)}</div></div><Button asChild variant="gold"><Link href={`/contact?products=${selected.join(",")}`}>Ask about selected spices</Link></Button></div>
 {notice&&<p role="status" className="mt-3 text-sm">{notice}</p>}
 {selected.length>1&&<details className="mt-4 border-t border-border pt-3"><summary className="cursor-pointer text-sm font-medium">Compare specifications</summary><div className="mt-4 overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Selected spice specifications</caption><thead><tr><th className="p-2">Specification</th>{comparison.map(p=><th key={p.slug} className="p-2">{p.name}</th>)}</tr></thead><tbody>{([['Origin','origin'],['Purity','purity'],['Moisture','moisture'],['Minimum order','moq'],['Shelf life','shelfLife']] as const).map(([label,key])=><tr key={key} className="border-t border-border"><th className="p-2 font-medium">{label}</th>{comparison.map(p=><td key={p.slug} className="p-2 text-muted-foreground">{p[key]}</td>)}</tr>)}</tbody></table></div></details>}
 </aside>}</section>;
}

