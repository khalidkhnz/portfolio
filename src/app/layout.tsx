import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://khalidkhnz.com"),
  keywords: ["khalidkhnz", "khalid khan", "khalid khnz", "dev khalid"],
  title: {
    default: "Khalid",
    template: `%s - Khalid`,
  },
  description: "",
  openGraph: {
    description: "",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
