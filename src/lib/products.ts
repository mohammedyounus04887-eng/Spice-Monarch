import { prisma } from "@/lib/prisma";

export type ProductListFilters = {
  q?: string;
  grade?: string;
  form?: string;
  organic?: string;
};

export async function getProducts(filters: ProductListFilters) {
  const q = (filters.q ?? "").trim();
  const grade = (filters.grade ?? "").trim();
  const form = (filters.form ?? "").trim();
  const organic = (filters.organic ?? "").trim();

  return prisma.product.findMany({
    where: {
      AND: [
        q
          ? {
              OR: [
                { name: { contains: q } },
                { scientificName: { contains: q } },
                { origin: { contains: q } },
              ],
            }
          : {},
        grade ? { grade: grade as never } : {},
        form ? { form: form as never } : {},
        organic ? { organic: organic === "true" } : {},
      ],
    },
    include: { images: { orderBy: { sortOrder: "asc" }, take: 1 }, certifications: true },
    orderBy: [{ name: "asc" }],
  });
}

export async function getProductBySlug(slug: string) {
  return prisma.product.findUnique({
    where: { slug },
    include: { images: { orderBy: { sortOrder: "asc" } }, certifications: true },
  });
}
