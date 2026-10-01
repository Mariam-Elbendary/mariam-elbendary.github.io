import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/config";

const title = "Mariam Elbendary | Frontend Developer";
const description = "Frontend Developer specializing in React.js, Next.js, JavaScript, TypeScript, and responsive web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url), title, description,
  openGraph: { title, description, url: site.url, siteName: title, type: "website" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased leading-relaxed">{children}</body>
    </html>
  );
}
