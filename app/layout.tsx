import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Logo from "@/assets/header/books-journal-logo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Books Journal - Home",
  description: "A simple book journal app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[120px_1fr_50px] min-h-screen`}
      >
        <header className="bg-black text-white p-8  flex items-center justify-between">
          <Image
            src={Logo}
            alt="logo"
            width={150}
            height={150}
          />
        </header>
        <div className="max-w-7xl mx-auto flex-1 p-4 w-full h-full">{children}</div>
        <footer className="bg-black p-4 h-[60px] flex items-center justify-center">
          <p className="text-white text-xl">© 2025 A-Dev All rights reserved</p>
        </footer>
      </body>
    </html>
  );
}
