import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "App Legal & Privacy Portal | Official Compliance Center",
    template: "%s | App Legal & Privacy Portal",
  },
  description:
    "Official central repository for Privacy Policies, Terms & Conditions, and Account Deletion resources for mobile applications.",
  keywords: [
    "Privacy Policy",
    "Terms and Conditions",
    "Account Deletion",
    "Data Safety",
    "Google Play Compliance",
    "PythonWithKaran",
  ],
  authors: [{ name: "PythonWithKaran" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-blue-500 selection:text-white">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
