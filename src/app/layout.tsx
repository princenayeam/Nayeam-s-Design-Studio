import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Fraunces - sophisticated serif for headlines
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Manrope - modern sans-serif for body text
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// IBM Plex Mono - for dates, numbers, and parameters
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nayeam's Design Studio - Creative Portfolio",
  description: "Design is intelligence made visible. Creating experiences that inspire and delight by Nayeam.",
  keywords: ["design", "portfolio", "Nayeam's Design Studio", "Nayeam", "creative", "minimalist", "studio"],
  authors: [{ name: "Nayeam" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Nayeam's Design Studio",
    description: "Design is intelligence made visible. Creating experiences that inspire and delight.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayeam's Design Studio",
    description: "Design is intelligence made visible. Creating experiences that inspire and delight.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${manrope.variable} ${ibmPlexMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
