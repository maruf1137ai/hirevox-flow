import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Hirevox Flow | AI-Augmented Hiring OS",
  description: "Hire in minutes, not weeks. Fully automated hiring with human-in-the-loop checkpoints.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
