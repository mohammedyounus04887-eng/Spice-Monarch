import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { journalArticles } from "@/lib/journal";
import { spiceProducts } from "@/lib/spice-data";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/products", "/about", "/quality", "/export", "/contact", "/blog", "/faq", "/image-credits", "/quiz", ...journalArticles.map(a=>`/blog/${a.slug}`), ...spiceProducts.map(p => `/products/${p.slug}`)].map(route => ({ url: siteUrl + route })); }


