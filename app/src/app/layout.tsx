import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Tinybird Chart Demo",
  description: "A demo showing how to use Tinybird's Charts with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-slate-100 font-sans antialiased mb-8",
        fontSans.variable
      )}>
        {children}
      </body>
    </html>
  );
}
