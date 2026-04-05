import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://draftout.ai"),
  title: {
    default: "DraftOut",
    template: "%s | DraftOut",
  },
  description:
    "Get a polished essay draft fast with AI-safe writing, verified sources, expert review, and a complete defense pack from DraftOut.",
  keywords: [
    "DraftOut",
    "essay writing",
    "academic writing",
    "AI-safe essay",
    "plagiarism-free paper",
    "research memo",
    "source PDFs",
    "student writing support",
  ],
  applicationName: "DraftOut",
  category: "education",
  creator: "DraftOut",
  publisher: "DraftOut",
  authors: [{ name: "DraftOut" }],
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    url: "https://draftout.ai",
    siteName: "DraftOut",
    title: "DraftOut",
    description:
      "Get a polished essay draft fast with AI-safe writing, verified sources, expert review, and a complete defense pack from DraftOut.",
    images: [
      {
        url: "/figma/upscaled/hero-orb-2x.png",
        width: 836,
        height: 1126,
        alt: "DraftOut hero illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DraftOut",
    description:
      "Get a polished essay draft fast with AI-safe writing, verified sources, expert review, and a complete defense pack from DraftOut.",
    images: ["/figma/upscaled/hero-orb-2x.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f4f2",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={syne.variable}>
      <body>{children}</body>
    </html>
  );
}
