import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EditorialHero } from "@/components/site/editorial";
export default function NotFound(){return <div className="editorial-page recovery-page"><EditorialHero eyebrow="404 / A LITTLE DETOUR" title="BACK TO THE GOOD STUFF." description="This page isn’t available. There’s a whole world of spice waiting in the collection."/><div className="recovery-actions"><Link href="/products" className="split-link dark"><span>Explore the collection</span><i><ArrowUpRight size={20}/></i></Link><Link href="/" className="text-link">Back to the homepage <ArrowUpRight size={18}/></Link></div></div>}
