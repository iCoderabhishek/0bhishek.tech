import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/outer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek Jha | Developer Portfolio",
  description:
    "Abhishek Jha is a software developer with experience in building full-stack web apps, React Native apps, and SaaS products. He loves experimenting with new technologies, integrating APIs, and building tools that solve real-world problems.",
  openGraph: {
    title: "Abhishek Jha | Developer Portfolio",
    description:
      "Abhishek Jha is a software developer with experience in building full-stack web apps, React Native apps, and SaaS products.",
    url: "https://0bhishek.tech",
    siteName: "Abhishek Jha",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Jha Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Jha | Developer Portfolio",
    description:
      "Full Stack Developer | Building web, native, and real world projects.",
    images: ["https://0bhishek.tech/og-image.png"],
    creator: "@0bhishek",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
