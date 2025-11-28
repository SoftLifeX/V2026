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
  title: "Ismail Chabane | Full Stack Software Developer - React, Next.js, Java, Spring Boot",
  description: "Ismail Chabane's website - Full Stack Software Developer specializing in React, Next.js, Java, and Spring Boot. Discover modern web development projects and innovative solutions from Morocco.",
  keywords: [
    "Full Stack Developer",
    "Software Developer", 
    "React Developer",
    "Next.js",
    "Java",
    "Spring Boot",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "Morocco",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "Node.js"
  ],
  authors: [{ name: "Ismail Chabane" }],
  creator: "Ismail Chabane",
  publisher: "Ismail Chabane",
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
    url: "https://ismailchabane.com",
    title: "Ismail Chabane | Full Stack Software Developer",
    description: "Professional portfolio showcasing full-stack development projects using React, Next.js, Java, and Spring Boot. Modern web development solutions from Morocco.",
    siteName: "Ismail Chabane Portfolio",
    images: [
      {
        url: "/assets/ismailchabaneSite.png",
        width: 1200,
        height: 630,
        alt: "Ismail Chabane - Full Stack Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismail Chabane | Full Stack Software Developer",
    description: "Professional portfolio showcasing full-stack development projects using React, Next.js, Java, and Spring Boot.",
    images: ["/assets/ismailchabaneSite.png"],
    creator: "@@Hx0dev",
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
