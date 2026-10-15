import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: process.env.NEXT_PUBLIC_SITE_URL ? "/" : undefined, disallow: process.env.NEXT_PUBLIC_SITE_URL ? ["/admin", "/api"] : "/" }, sitemap: siteUrl + "/sitemap.xml" }; }
