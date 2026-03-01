import { siteConfig } from "@/lib/site";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url || ""),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
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
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
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
    <head>
      <meta name="google-site-verification" content="XzDvITOMp6mu2xH6-diRRrHKG_Ye7_tTL6te0mjQld8" />
    </head>
      <body className="min-h-screen bg-black flex flex-col">
        <div className="flex-1">{children}</div> 
      </body>
    </html>
  );
}
