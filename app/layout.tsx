import type { Metadata } from "next";
import { ConceptNotice } from "@/components/ConceptNotice";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business } from "@/lib/business";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${business.name} | Accountants in Ongar — Local Sites Lab concept`,
    template: `%s | ${business.name} concept`,
  },
  description:
    "Independent Local Sites Lab concept redesign for Foot & Ellis-Smith, accountants on Ongar High Street since 1970. Not the official live website.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <a className="text-link shell" href="#main-content" style={{ position: "absolute", left: "-9999px" }}>
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ConceptNotice />
      </body>
    </html>
  );
}
