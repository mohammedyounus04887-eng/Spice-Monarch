import { PrismaClient, Certification, ExportGrade, ProductForm } from "@prisma/client";
import bcrypt from "bcryptjs";
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const prisma = new PrismaClient({ adapter: new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./prisma/dev.db" }) });

function img(prompt: string, imageSize: string) {
  const p = encodeURIComponent(prompt);
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${p}&image_size=${imageSize}`;
}

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminEmail || !adminPassword || adminPassword.length < 16) {
    throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD (at least 16 characters) before seeding. No default admin credentials are created.");
  }
  const existingAdmin = await prisma.adminUser.findUnique({ where: { email: adminEmail } });

  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash(adminPassword, 12);
    await prisma.adminUser.create({
      data: {
        email: adminEmail,
        displayName: "Spice Monarch Admin",
        passwordHash,
      },
    });
  }

  const products = [
    {
      slug: "turmeric",
      name: "Turmeric",
      scientificName: "Curcuma longa",
      origin: "India",
      grade: ExportGrade.EXPORT,
      purity: "Min. 99%",
      moisturePct: 8.0,
      packing: "25kg PP bag / kraft bag",
      shelfLife: "24 months",
      hsCode: "091030",
      moq: "1 MT",
      containerCapacity: "20ft: 18 MT · 40ft: 26 MT",
      availability: "Year-round",
      form: ProductForm.GROUND,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of turmeric powder in a matte black bowl with turmeric roots and golden dust particles, cinematic studio lighting, luxury export brand aesthetic, shallow depth of field, 4k, clean background",
        "landscape_16_9"
      ),
    },
    {
      slug: "red-chilli",
      name: "Red Chilli",
      scientificName: "Capsicum annuum",
      origin: "India",
      grade: ExportGrade.EXPORT,
      purity: "Min. 99%",
      moisturePct: 10.0,
      packing: "25kg PP bag / cartons",
      shelfLife: "18 months",
      hsCode: "090421",
      moq: "1 MT",
      containerCapacity: "20ft: 17 MT · 40ft: 25 MT",
      availability: "Seasonal + stock",
      form: ProductForm.WHOLE,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of dried red chilli pods with subtle spice dust, black stone surface, dramatic rim light, luxury export brand look, 4k, clean composition",
        "landscape_16_9"
      ),
    },
    {
      slug: "black-pepper",
      name: "Black Pepper",
      scientificName: "Piper nigrum",
      origin: "India",
      grade: ExportGrade.EXPORT,
      purity: "Min. 99.5%",
      moisturePct: 12.0,
      packing: "25kg jute bag / PP bag",
      shelfLife: "24 months",
      hsCode: "090411",
      moq: "1 MT",
      containerCapacity: "20ft: 16 MT · 40ft: 24 MT",
      availability: "Year-round",
      form: ProductForm.WHOLE,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of black peppercorns spilling from a brushed steel scoop, soft shadows, luxury export brand aesthetic, 4k, minimal background",
        "landscape_16_9"
      ),
    },
    {
      slug: "white-pepper",
      name: "White Pepper",
      scientificName: "Piper nigrum",
      origin: "India",
      grade: ExportGrade.PREMIUM,
      purity: "Min. 99.5%",
      moisturePct: 12.0,
      packing: "25kg PP bag",
      shelfLife: "24 months",
      hsCode: "090412",
      moq: "1 MT",
      containerCapacity: "20ft: 16 MT · 40ft: 24 MT",
      availability: "Year-round",
      form: ProductForm.WHOLE,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of white peppercorns in a glass jar with gold accent, clean studio lighting, luxury export brand style, 4k",
        "landscape_16_9"
      ),
    },
    {
      slug: "green-cardamom",
      name: "Green Cardamom",
      scientificName: "Elettaria cardamomum",
      origin: "India",
      grade: ExportGrade.PREMIUM,
      purity: "Hand-picked",
      moisturePct: 10.0,
      packing: "10kg / 25kg cartons",
      shelfLife: "18 months",
      hsCode: "090831",
      moq: "500 kg",
      containerCapacity: "20ft: 10 MT · 40ft: 18 MT",
      availability: "Seasonal + stock",
      form: ProductForm.WHOLE,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of green cardamom pods with dew-like texture, dark emerald surface, soft gold highlights, luxury export aesthetic, 4k",
        "landscape_16_9"
      ),
    },
    {
      slug: "black-cardamom",
      name: "Black Cardamom",
      scientificName: "Amomum subulatum",
      origin: "India",
      grade: ExportGrade.EXPORT,
      purity: "Machine cleaned",
      moisturePct: 12.0,
      packing: "10kg / 25kg cartons",
      shelfLife: "18 months",
      hsCode: "090832",
      moq: "500 kg",
      containerCapacity: "20ft: 10 MT · 40ft: 18 MT",
      availability: "Seasonal + stock",
      form: ProductForm.WHOLE,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of black cardamom pods with smoky texture, black stone background, cinematic lighting, luxury export brand style, 4k",
        "landscape_16_9"
      ),
    },
    {
      slug: "cumin",
      name: "Cumin",
      scientificName: "Cuminum cyminum",
      origin: "India",
      grade: ExportGrade.EXPORT,
      purity: "Min. 99%",
      moisturePct: 9.0,
      packing: "25kg PP bag",
      shelfLife: "24 months",
      hsCode: "090931",
      moq: "1 MT",
      containerCapacity: "20ft: 18 MT · 40ft: 26 MT",
      availability: "Year-round",
      form: ProductForm.WHOLE,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of cumin seeds in a ceramic bowl with warm highlights, minimal luxury export composition, 4k",
        "landscape_16_9"
      ),
    },
    {
      slug: "coriander",
      name: "Coriander",
      scientificName: "Coriandrum sativum",
      origin: "India",
      grade: ExportGrade.EXPORT,
      purity: "Min. 99%",
      moisturePct: 10.0,
      packing: "25kg PP bag",
      shelfLife: "24 months",
      hsCode: "090921",
      moq: "1 MT",
      containerCapacity: "20ft: 18 MT · 40ft: 26 MT",
      availability: "Year-round",
      form: ProductForm.WHOLE,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of coriander seeds with subtle green tint on light cream background, clean studio lighting, luxury export brand style, 4k",
        "landscape_16_9"
      ),
    },
    {
      slug: "cloves",
      name: "Cloves",
      scientificName: "Syzygium aromaticum",
      origin: "India",
      grade: ExportGrade.PREMIUM,
      purity: "Min. 99%",
      moisturePct: 10.0,
      packing: "10kg / 25kg cartons",
      shelfLife: "24 months",
      hsCode: "090710",
      moq: "500 kg",
      containerCapacity: "20ft: 10 MT · 40ft: 18 MT",
      availability: "Year-round",
      form: ProductForm.WHOLE,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of cloves with rich brown tones, gold accent lighting, luxury export aesthetic, 4k",
        "landscape_16_9"
      ),
    },
    {
      slug: "cinnamon",
      name: "Cinnamon",
      scientificName: "Cinnamomum verum",
      origin: "India",
      grade: ExportGrade.PREMIUM,
      purity: "Min. 99%",
      moisturePct: 12.0,
      packing: "10kg / 25kg cartons",
      shelfLife: "24 months",
      hsCode: "090611",
      moq: "500 kg",
      containerCapacity: "20ft: 10 MT · 40ft: 18 MT",
      availability: "Year-round",
      form: ProductForm.WHOLE,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of cinnamon sticks tied with a thin gold cord, light cream background, soft shadows, luxury export brand style, 4k",
        "landscape_16_9"
      ),
    },
    {
      slug: "fennel",
      name: "Fennel",
      scientificName: "Foeniculum vulgare",
      origin: "India",
      grade: ExportGrade.EXPORT,
      purity: "Min. 99%",
      moisturePct: 10.0,
      packing: "25kg PP bag",
      shelfLife: "24 months",
      hsCode: "090961",
      moq: "1 MT",
      containerCapacity: "20ft: 18 MT · 40ft: 26 MT",
      availability: "Year-round",
      form: ProductForm.WHOLE,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of fennel seeds on matte charcoal surface, clean studio lighting, luxury export brand look, 4k",
        "landscape_16_9"
      ),
    },
    {
      slug: "fenugreek",
      name: "Fenugreek",
      scientificName: "Trigonella foenum-graecum",
      origin: "India",
      grade: ExportGrade.EXPORT,
      purity: "Min. 99%",
      moisturePct: 10.0,
      packing: "25kg PP bag",
      shelfLife: "24 months",
      hsCode: "091099",
      moq: "1 MT",
      containerCapacity: "20ft: 18 MT · 40ft: 26 MT",
      availability: "Year-round",
      form: ProductForm.WHOLE,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of fenugreek seeds with warm golden tones, minimal clean background, luxury export style, 4k",
        "landscape_16_9"
      ),
    },
    {
      slug: "mustard",
      name: "Mustard",
      scientificName: "Brassica juncea",
      origin: "India",
      grade: ExportGrade.STANDARD,
      purity: "Min. 99%",
      moisturePct: 9.0,
      packing: "25kg PP bag",
      shelfLife: "24 months",
      hsCode: "120750",
      moq: "1 MT",
      containerCapacity: "20ft: 18 MT · 40ft: 26 MT",
      availability: "Year-round",
      form: ProductForm.WHOLE,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of mustard seeds in a shallow bowl, subtle gold highlights, luxury export aesthetic, 4k",
        "landscape_16_9"
      ),
    },
    {
      slug: "nutmeg",
      name: "Nutmeg",
      scientificName: "Myristica fragrans",
      origin: "India",
      grade: ExportGrade.PREMIUM,
      purity: "Min. 99%",
      moisturePct: 10.0,
      packing: "10kg / 25kg cartons",
      shelfLife: "24 months",
      hsCode: "090811",
      moq: "500 kg",
      containerCapacity: "20ft: 10 MT · 40ft: 18 MT",
      availability: "Year-round",
      form: ProductForm.WHOLE,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of whole nutmeg with subtle texture, cream background with soft shadow, luxury export brand style, 4k",
        "landscape_16_9"
      ),
    },
    {
      slug: "star-anise",
      name: "Star Anise",
      scientificName: "Illicium verum",
      origin: "India",
      grade: ExportGrade.PREMIUM,
      purity: "Min. 99%",
      moisturePct: 12.0,
      packing: "10kg / 25kg cartons",
      shelfLife: "24 months",
      hsCode: "090961",
      moq: "500 kg",
      containerCapacity: "20ft: 10 MT · 40ft: 18 MT",
      availability: "Year-round",
      form: ProductForm.WHOLE,
      organic: false,
      image: img(
        "Ultra realistic premium product photo of star anise on matte charcoal surface, gold rim light, luxury export brand look, 4k",
        "landscape_16_9"
      ),
    },
  ];

  for (const p of products) {
    const existing = await prisma.product.findUnique({ where: { slug: p.slug } });
    if (existing) continue;

    await prisma.product.create({
      data: {
        slug: p.slug,
        name: p.name,
        scientificName: p.scientificName,
        origin: p.origin,
        grade: p.grade,
        purity: p.purity,
        moisturePct: p.moisturePct,
        packing: p.packing,
        shelfLife: p.shelfLife,
        hsCode: p.hsCode,
        moq: p.moq,
        containerCapacity: p.containerCapacity,
        availability: p.availability,
        form: p.form,
        organic: p.organic,
        images: {
          create: [
            {
              url: p.image,
              alt: `${p.name} export product image`,
              sortOrder: 0,
            },
          ],
        },
        certifications: {
          create: [
            { certification: Certification.ISO },
            { certification: Certification.HACCP },
            { certification: Certification.FSSAI },
            { certification: Certification.SPICES_BOARD },
          ],
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

