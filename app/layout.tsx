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
  title: "Daniel C Daniel | Full Stack Software Developer",
  description: "Daniel C Daniel's website - Award-winning Full Stack Software Developer.",
  keywords: [
    "Daniel C Daniel",
    "Softlife",
    "Softlifex", 
    "Full Stack Developer",
    "Software Developer", 
    "React Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "Node.js"
  ],
  authors: [{ name: "Daniel C Daniel " }],
  creator: "Daniel C Daniel ",
  publisher: "Daniel C Daniel",
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
    url: "",
    title: "Daniel C Daniel | Full Stack Software Developer",
    description: "Daniel C Daniel's website - Award-winning Full Stack Software Developer.",
    siteName: "Daniel C Daniel (SoftLife) Portfolio",
    images: [
      {
        url: "/assets/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Daniel C Daniel - Full Stack Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel C Daniel | Full Stack Software Developer",
    description: "Professional portfolio showcasing full-stack development projects using React, Next.js, Java, and Spring Boot.",
    images: ["/assets/ismailchabaneSite.png"],
    creator: "",
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
