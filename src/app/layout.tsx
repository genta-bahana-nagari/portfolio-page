import { siteConfig } from "@/lib/site";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url || ""),

  title: {
    default: "Genta Bahana Nagari",
    template: "Genta Bahana Nagari",
  },

  icons: {
    icon: "/icon.png",
  },

  description:
    "Personal portfolio of Genta Bahana Nagari — Fullstack Developer specializing in modern web applications.",

  keywords: [
    "Genta Bahana Nagari",
    "Fullstack Developer",
    "Next.js Developer",
    "Frontend Developer Indonesia",
    "Portfolio Website",
  ],

  authors: [{ name: "Genta Bahana Nagari", url: siteConfig.url }],

  creator: "Genta Bahana Nagari",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Genta Portfolio",

    title: "Genta Bahana Nagari | Fullstack Developer",
    description:
      "Modern fullstack developer portfolio built with Next.js and TypeScript.",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Genta Bahana Nagari Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Genta Bahana Nagari | Fullstack Developer",
    description: "Modern fullstack developer portfolio built with Next.js.",
    images: ["/og-image.png"],
    creator: "@yourtwitterhandle",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black flex flex-col">
        <div className="flex-1">{children}</div> 
      </body>
    </html>
  );
}
