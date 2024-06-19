import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";
import { Providers } from './providers';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portovc.vercel.app"
  ),
  title: "CV and Portfolio",
  description: "Thanks and (c) Ibrahim Memon",
  keywords: ["Developer", "Portfolio", "Developer Portfolio", "Elzio"],
  openGraph: {
    title: "Elzio",
    description: "Software Engineer",
    images: "/OpenGraph.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />


        <Navbar />
        <Providers>{children}</Providers>

      </body>
    </html>
  );
}
