import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Shining Star Public Schools | Est. 1980",
  description: "Nurturing Mind, Character & Leadership Since 1980. 40+ years of academic distinction, 100% FBISE Board pass rates across 5 modern campuses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} font-sans antialiased text-slate`}>
        {children}
      </body>
    </html>
  );
}
