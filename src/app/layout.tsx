import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdisa Alemu",
  keywords: [
    "Abdisa Alemu",
    "Abdisa",
    "Abdiza Dev",
    "Abdiza",
    "Abdiza Alemu",
    "Alemu Abdisa",
    "developed by abdiza",
  ],
  description:
    "Abdisa's personal website that displays all show cases that he done before ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}
