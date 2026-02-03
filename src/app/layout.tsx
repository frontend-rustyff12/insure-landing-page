import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { headerData } from "@/content/Header";
import { socialData, footerData } from "@/content/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Insure landing page",
  description: "Insure landing page for Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header data={headerData} />
        {children}
        <Footer data={footerData} social={socialData} />
      </body>
    </html>
  );
}
