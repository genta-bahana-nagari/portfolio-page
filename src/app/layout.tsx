import { siteConfig } from "@/lib/site";
import { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  applicationName: siteConfig.shortName,

  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.shortName}`,
  },

  description: siteConfig.description,

  keywords: [
    "Genta Bahana Nagari",
    "Fullstack Developer",
    "Frontend Developer Indonesia",
    "Web Developer Yogyakarta",
    "Portfolio Website",
    "Freelance Web Developer Indonesia",
  ],

  authors: [{ name: siteConfig.shortName, url: siteConfig.url }],
  creator: siteConfig.shortName,
  publisher: siteConfig.shortName,

  category: "technology",

  alternates: {
    canonical: `${siteConfig.url}`,
    languages: {
      "en-US": "https://gentabahana.web.id",
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  referrer: "origin-when-cross-origin",

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@gentabahananagari",
    images: {
      url: siteConfig.ogImage,
      alt: `${siteConfig.name} | ${siteConfig.description}`,
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180x180.png", sizes: "180x180" }],
    shortcut: "/favicon.png",
  },

  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-black text-white relative overflow-x-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-black via-zinc-800 to-black" />
        </div>
        <div className="min-h-screen flex flex-col relative z-10">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
