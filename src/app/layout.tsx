import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { SITE_CONFIG } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.shortName} | ${SITE_CONFIG.title}`,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} – ${SITE_CONFIG.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/*
          Security headers via <meta> tags.
          GitHub Pages does not support custom HTTP response headers, so we use
          the Content‑Security‑Policy meta equivalent for what it supports.
          X‑Frame‑Options and HSTS cannot be set via meta — they require HTTP headers
          (handled by the CDN / hosting layer when you move away from GH Pages).
        */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={[
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: https:",
            "connect-src 'self' https://api.web3forms.com",
            "frame-ancestors 'none'",
          ].join("; ")}
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="min-h-screen flex flex-col relative overflow-x-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <GlowOrb color="bg-[var(--color-gradient-start)]" size={600} blur={150} className="-top-32 -left-32 opacity-20" />
          <GlowOrb color="bg-[var(--color-accent-blue)]" size={500} blur={120} className="top-1/3 -right-32 opacity-10" />
          <GlowOrb color="bg-[var(--color-gradient-end)]" size={700} blur={180} className="-bottom-64 left-1/4 opacity-15" />
        </div>
        
        <Navbar />
        <main className="flex-1 flex flex-col pt-24 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
