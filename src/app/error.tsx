"use client";
import Link from "next/link";
import { RotateCcw } from "lucide-react";
import { EditorialHero } from "@/components/site/editorial";
export default function ErrorPage({reset}:{reset:()=>void}){return <div className="editorial-page recovery-page"><EditorialHero eyebrow="LET’S TRY THAT AGAIN" title="A SMALL INTERRUPTION." description="This page couldn’t be loaded. Try again, or return to the collection."/><div className="recovery-actions"><button type="button" onClick={reset} className="split-link dark"><span>Try again</span><i><RotateCcw size={20}/></i></button><Link href="/products" className="text-link">Explore the collection ↗</Link></div></div>}
