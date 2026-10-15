import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialHero,EditorialCallout } from "@/components/site/editorial";
import { journalArticles } from "@/lib/journal";
export function generateStaticParams(){return journalArticles.map(a=>({slug:a.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const a=journalArticles.find(a=>a.slug===slug);return a?{title:a.title,description:a.summary,alternates:{canonical:`/blog/${slug}`}}:{title:"Story not found"};}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=journalArticles.find(a=>a.slug===slug);if(!a)notFound();return <article className="editorial-page journal-article"><nav className="editorial-breadcrumb" aria-label="Breadcrumb"><Link href="/blog">The journal</Link><span>/</span><span aria-current="page">{a.category.toLowerCase()}</span></nav><EditorialHero eyebrow={a.category} title={a.title} description={a.summary} image={a.image} alt={a.alt}/><div className="article-body">{a.sections.map(s=><section key={s.title}><h2>{s.title}</h2><p>{s.text}</p></section>)}<Link href="/blog" className="text-link">Back to the journal</Link></div><EditorialCallout title="Put your next idea into motion." text="Explore the collection and build a sourcing brief for your business." href="/products" label="Explore the collection"/></article>}
