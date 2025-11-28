import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/features/shared/layout/navbar";
import Footer from "@/features/shared/layout/footer";
import { ThemeProvider } from "@/features/shared/providers/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftLifeX | Daniel C. Daniel – Full Stack Developer, Lifestyle & Events",
  description:
    "SoftLifeX (Daniel C. Daniel) is a Full Stack Developer, Designer, and creator of Only One SoftLife — a lifestyle and events brand blending creativity, tech, and experiences. Explore projects, tutorials, and upcoming events.",
  keywords: [
    "SoftLifeX",
    "Only One SoftLife",
    "Daniel C Daniel",
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Tailwind CSS",
    "Node.js",
    "Lifestyle Brand",
    "Events",
    "Portfolio",
    "Developer Nigeria"
  ],
  authors: [{ name: "Daniel C. Daniel (SoftLifeX)" }],
  creator: "Daniel C. Daniel",
  publisher: "SoftLifeX",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://softlifex.vercel.app",
    title: "SoftLifeX | Daniel C. Daniel – Full Stack Developer, Lifestyle & Events",
    description:
      "Explore the work of SoftLifeX (Daniel C. Daniel), a Full Stack Developer & Designer and creator of Only One SoftLife — a lifestyle and events brand.",
    siteName: "SoftLifeX – Official Portfolio",
    images: [
      {
        url: "/assets/openGraph.png",
        width: 1200,
        height: 630,
        alt: "SoftLifeX (Daniel C. Daniel) Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftLifeX | Daniel C. Daniel – Full Stack Developer, Lifestyle & Events",
    description:
      "SoftLifeX (Daniel C. Daniel) – Full Stack Developer and creator of Only One SoftLife, a lifestyle & events brand blending tech and creativity.",
    images: ["/assets/openGraph.png"],
    creator: "@YourTwitterHandle",
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/favicon.ico" },
  manifest: "/manifest.json",
  other: { "theme-color": "#000000", "color-scheme": "light dark" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data JSON-LD for SEO */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Daniel C. Daniel",
            "alternateName": ["SoftLifeX", "Only One SoftLife"],
            "url": "https://softlifex.vercel.app",
            "sameAs": [
              "https://github.com/SoftLifeX",
              "https://linkedin.com/in/danielc.daniel",
              "https://twitter.com/SoftLifeX"
            ],
            "jobTitle": "Full Stack Developer & Designer",
            "worksFor": { "@type": "Organization", "name": "SoftLifeX" },
            "description": "Full Stack Developer, Designer, and creator of Only One SoftLife – a lifestyle and events brand blending tech, creativity, and experiences."
          })}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background px-2 py-4`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />

          <div className="mt-[80px]">
            <main className="container mx-auto bg-card rounded-[var(--radius)] border border-border min-h-[calc(100svh-112px)] p-4">
              {children}
              <Footer />
            </main>
          </div>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
  } 
