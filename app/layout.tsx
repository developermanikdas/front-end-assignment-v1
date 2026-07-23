import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Scale Technical Talent & Engineering Skills",
  description:
    "Empower your teams with outcome-driven, industry-relevant curriculum. Standardize capability in Product Management, Data Science, AI/ML, and Software Systems.",
  keywords: "Accredian, Enterprise upskilling, Tech talent development, corporate learning program, product management certification, MLOps corporate course",
  authors: [{ name: "Accredian Enterprise" }],
  metadataBase: new URL("https://front-end-assignment-v1.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Accredian Enterprise | Scale Technical Talent",
    description: "Outcome-driven upskilling solutions for modern technical squads.",
    url: "https://front-end-assignment-v1.vercel.app",
    siteName: "Accredian Enterprise",
    images: [
      {
        url: "/hero_illustration.jpg",
        width: 800,
        height: 600,
        alt: "Accredian Enterprise Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise | Scale Technical Talent",
    description: "Outcome-driven upskilling solutions for modern technical squads.",
    images: ["/hero_illustration.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
