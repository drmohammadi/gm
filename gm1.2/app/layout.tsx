import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "./providers";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "GM with NFT - Free",
  description: "Free GM on Base with badge and NFT",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "GM with NFT - Free",
    description: "Best Daily reward ",
    images: [{ url: "/og-image.jpg" }],
  },
  
  other: {
    "theme-color": "#ef4444",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ef4444" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.variable} font-sans bg-zinc-950 text-zinc-100 antialiased`}>
        <Providers>
          {children}
          <Toaster position="top-center" richColors closeButton />
        </Providers>
      </body>
    </html>
  );
}