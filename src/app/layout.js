import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-phone-input-2/lib/style.css";
import React from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import ContactUs from "@/components/ContactUs";
import ResponsiveMenuBar from "@/components/ResponsiveMenuBar";
import ClientOnly from "@/components/ClientOnly";
import ThemeRegistry from "@/components/ThemeRegistry";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ThinQ Chess",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "ThinQ Chess",
    description:
      "Join ThinQ Chess to sharpen your mind through engaging chess programs for all ages!",
    url: "https://thinqchess.com",
    siteName: "ThinQ Chess",
    images: [
      {
        url: "https://thinqchess.com/images/favicon.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts & Icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />

        {/* Basic Metadata */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Join ThinQ Chess to sharpen your mind through engaging chess programs for all ages!"
        />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="ThinQ Chess" />
        <meta
          property="og:description"
          content="Join ThinQ Chess to sharpen your mind through engaging chess programs for all ages!"
        />
        <meta
          property="og:image"
          content="https://thinqchess.com/images/favicon.png"
        />
        <meta property="og:url" content="https://thinqchess.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Preview (optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ThinQ Chess" />
        <meta
          name="twitter:description"
          content="Join ThinQ Chess to sharpen your mind through engaging chess programs for all ages!"
        />
        <meta
          name="twitter:image"
          content="https://thinqchess.com/images/favicon.png"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeRegistry>
          {/* Custom Cursor */}
          <span className="max-md:hidden">
            <ClientOnly>
              <CustomCursor />
            </ClientOnly>
          </span>

          <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <header className="md:top-[23px] top-[24px] z-50">
              <ClientOnly>
                <ResponsiveMenuBar />
              </ClientOnly>
            </header>

            {/* Page Content */}
            <main className="">{children}</main>

            <ContactUs />

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
              <div className="container mx-auto flex md:flex-row flex-col md:gap-1 gap-4 items-center justify-between">
                <Link href="/privacy-policy">Privacy Policy</Link>
                <ClientOnly>
                  <p>&copy; Copyright ThinQ Chess {new Date().getFullYear()}</p>
                </ClientOnly>
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </div>
            </footer>
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
