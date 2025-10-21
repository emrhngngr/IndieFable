import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import { Lexend } from "next/font/google";
import LayoutClient from "./components/LayoutClient";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IndieFable",
  description: "A platform for indie game developers to share their development journey through devlogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} m-0 p-0 overflow-x-hidden flex flex-col min-h-screen`}
      >
        <LayoutClient>
          {children}
        </LayoutClient>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
