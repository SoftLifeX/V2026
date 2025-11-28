import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/features/shared/layout/navbar";
import Footer from "@/features/shared/layout/footer";
import { ThemeProvider } from "@/features/shared/providers/theme-provider";
import { Analytics } from "@vercel/analytics/next";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftLifeX | Daniel C Daniel – Full Stack Software Developer & Designer",
  description:
    "SoftLifeX (Daniel C Daniel) is a Full Stack Software Developer, Designer, and Mobile Engineer specializing in React, Next.js, TypeScript, and modern UI development. Explore projects, case studies, and engineering articles.",
  keywords: [
    "SoftLifeX",
    "Only One Softlife",
    "Daniel C Daniel",
    "Daniel Daniel Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Mobile Developer",
    "Web Developer in Nigeria",
    "UI/UX Developer",
    "Tailwind CSS",
    "Node.js",
    "Portfolio Developer Nigeria"
  ],
  authors: [{ name: "Daniel C Daniel (SoftLifeX)" }],
  creator: "SoftLifeX (Daniel C Daniel)",
  publisher: "SoftLifeX",
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
    type: "website",
    locale: "en_US",
    url: "https://softlifex.vercel.app",
    title: "SoftLifeX | Daniel C Daniel – Full Stack Software Developer",
    description:
      "Explore the work of SoftLifeX (Daniel C Daniel), a Full Stack Developer & Designer building modern web and mobile experiences.",
    siteName: "SoftLifeX – Official Portfolio",
    images: [
      {
        url: "/assets/openGraph.png",
        width: 1200,
        height: 630,
        alt: "SoftLifeX (Daniel C Daniel) Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SoftLifeX | Full Stack Software Developer & Designer",
    description:
      "Portfolio of SoftLifeX (Daniel C Daniel) – Full Stack Developer skilled in React, Next.js, TypeScript, JavaScript, and UI design.",
    images: ["/assets/openGraph.png"],
    creator: "@yourActualTwitterHandle", // ← replace if needed
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  manifest: "/manifest.json",

  other: {
    "theme-color": "#000000",
    "color-scheme": "light dark",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background px-2 py-4`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <div className="mt-[80px]">
            <main className='container mx-auto bg-card rounded-[var(--radius)] border border-border  min-h-[calc(100svh-112px)] p-4    '>

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
