import { siteConfig } from "@/lib/site";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url || ""),

  applicationName: siteConfig.name,

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
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
  publisher: "Genta Bahana Nagari",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  alternates: {
    canonical: siteConfig.url,
  },

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

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
