import type { Metadata } from "next";
import { Manrope, Inter_Tight } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klinik Obesiti oleh Dr. Syaza & Dr. Athirah | Al-Farhain",
  description:
    "Klinik Obesiti oleh Dr. Syaza & Dr. Athirah di Pusat Rawatan Al-Farhain untuk pengurusan berat badan peribadi, pemakanan dan gaya hidup sihat.",
  openGraph: {
    title: "Klinik Obesiti oleh Dr. Syaza & Dr. Athirah | Al-Farhain",
    description:
      "Sokongan doktor untuk pengurusan berat badan yang lebih peribadi dan terarah.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body className={`${manrope.variable} ${interTight.variable} antialiased`}>{children}</body>
    </html>
  );
}
