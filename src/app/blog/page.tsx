import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EditorialHero } from "@/components/site/editorial";
import { journalArticles } from "@/lib/journal";
export const metadata:Metadata={title:"The spice journal",description:"Ideas and practical perspectives on spice selection, sourcing briefs, and packing formats.",alternates:{canonical:"/blog"}};
export default function BlogPage(){return <div className="editorial-page"><EditorialHero eyebrow="IDEAS. INGREDIENTS. INSPIRATION." title="THE SPICE JOURNAL." description="A little perspective for your next great ingredient conversation."/><section className="journal-grid">{journalArticles.map(a=><Link key={a.slug} href={`/blog/${a.slug}`} className="journal-card"><div><Image src={a.image} alt={a.alt} fill sizes="(max-width:800px) 90vw, 30vw"/></div><p className="eyebrow">{a.category}</p><h2>{a.title}</h2><p>{a.summary}</p><span>Read the story <ArrowUpRight size={19}/></span></Link>)}</section></div>}
