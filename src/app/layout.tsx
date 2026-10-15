import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import "./monarch.css";

import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

import { siteUrl } from "@/lib/site";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontUi = Poppins({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fontDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Spice Monarch | Premium Indian Spice Exporters",
    template: "%s | Spice Monarch",
  },
  description:
    "Premium Indian spices exported worldwide. Delivering authentic Indian spices with unmatched quality, purity, and global standards.",
  applicationName: "Spice Monarch",
  metadataBase: new URL(siteUrl),

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Spice Monarch | Premium Indian Spice Exporters",
    description:
      "From India's Finest Farms to the World's Kitchens. Export-grade spices with strict quality assurance.",
    type: "website",
    url: siteUrl,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Spice Monarch premium spice exports" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spice Monarch | Premium Indian Spice Exporters",
    description:
      "From India's Finest Farms to the World's Kitchens. Export-grade spices with strict quality assurance.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${fontSans.variable} ${fontUi.variable} ${fontDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-background focus:p-4">Skip to content</a>
            <SiteHeader />
            <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

