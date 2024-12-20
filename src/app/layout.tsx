import type { Metadata } from "next";
import "./globals.css";
import { Kode_Mono } from 'next/font/google';
import FixedBackground from "@/shared/components/FixedBackground";

const font = Kode_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Bl4ck-4rm",
  description: "Bl4ck-4rm's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <FixedBackground />
        <div className="relative z-10 text-white">{children}</div>
      </body>
    </html>
  );
}
