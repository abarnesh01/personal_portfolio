import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abarnesh | Creative Full Stack Developer",
  description: "Senior Full Stack Developer specializing in premium web experiences using Next.js, React, and modern UI/UX design.",
  keywords: ["Next.js", "React", "Full Stack Developer", "Portfolio", "Web Development", "Framer Motion"],
  openGraph: {
    title: "Abarnesh | Creative Full Stack Developer",
    description: "Premium Portfolio showcasing modern web development projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
