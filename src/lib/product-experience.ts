import type { SpiceProduct } from "@/lib/spice-data";

export type SpiceCategory = "All spices" | "Whole spices" | "Seeds" | "Ground spices";
export const spiceCategories: SpiceCategory[] = ["All spices", "Whole spices", "Seeds", "Ground spices"];
const seeds = new Set(["cumin", "coriander", "fennel", "fenugreek", "mustard", "sesame", "nigella-seeds"]);
export function getSpiceCategory(product: SpiceProduct): Exclude<SpiceCategory, "All spices"> {
  if (seeds.has(product.slug)) return "Seeds";
  if (["turmeric", "paprika"].includes(product.slug)) return "Ground spices";
  return "Whole spices";
}
export const featuredSpices = [
  { slug: "turmeric", accent: "#e0a32e", note: "Golden colour. Earthy depth.", story: "A bright foundation for spice blends, natural colour systems, and everyday cooking." },
  { slug: "red-chilli", accent: "#c65537", note: "Vivid colour. Vibrant heat.", story: "Rich red chillies with character, ready for your next seasoning or signature blend." },
  { slug: "black-pepper", accent: "#b4a583", note: "Bold aroma. A classic finish.", story: "Distinctive peppercorns that bring warmth and depth to savoury applications." },
  { slug: "green-cardamom", accent: "#9cae67", note: "Green pods. Beautiful aroma.", story: "An aromatic favourite for tea, bakery, desserts, and carefully crafted spice blends." },
];
