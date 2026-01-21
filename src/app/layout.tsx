import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
