import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { spiceProducts } from "@/lib/spice-data";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/products", "/about", "/quality", "/export", "/contact", "/blog", "/faq", "/image-credits", "/quiz", ...spiceProducts.map(p => `/products/${p.slug}`)].map(route => ({ url: siteUrl + route })); }

