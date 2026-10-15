import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductCatalogue } from "@/components/site/product-catalogue";
export const metadata:Metadata={title:"The spice collection",description:"Explore 20 spices by origin, flavour, grade, and packing options. Preview, compare, and build your sourcing inquiry.",alternates:{canonical:"/products"}};
export default function ProductsPage(){return <div className="catalogue-page"><div className="catalogue-heading"><p>INDIAN ORIGINS. WORLDLY CHARACTER.</p><h1>THE COLLECTION</h1><div><span>Twenty spices. Countless possibilities.</span><Link href="/contact">Request a sample <ArrowUpRight size={18}/></Link></div></div><ProductCatalogue/></div>}
