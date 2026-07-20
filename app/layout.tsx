import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ContactDock } from "@/components/contact-dock";
import { site } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://blossomkids.tw"),
  title: {
    default: `${site.shortName}精緻幼兒園｜三重幼兒園・安親課後`,
    template: `%s｜${site.shortName}`,
  },
  description: "新北市三重區華兒園精緻幼兒園，提供兩歲專班、幼兒園與國小課後照顧。日程、環境、費用與招生參觀資訊，一頁看清楚。",
  icons: {
    icon: [{ url: "/favicon-tangram-bird-v3.png?v=3", type: "image/png", sizes: "any" }],
    shortcut: "/favicon-tangram-bird-v3.png?v=3",
    apple: "/favicon-tangram-bird-v3.png?v=3",
  },
  openGraph: {
    title: "華兒園｜好好玩 慢慢長",
    description: "兩歲專班、幼兒園、國小課後照顧。日程、環境、費用，一頁看清楚。",
    type: "website",
    locale: "zh_TW",
    images: [{ url: "/og-v3.png", width: 1664, height: 936, alt: "華兒園｜好好玩 慢慢長" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "華兒園｜好好玩 慢慢長",
    description: "兩歲專班、幼兒園、國小課後照顧。日程、環境、費用，一頁看清楚。",
    images: ["/og-v3.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: site.fullName,
  telephone: site.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "三和路二段75號2樓",
    addressLocality: "三重區",
    addressRegion: "新北市",
    addressCountry: "TW",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>
        <a className="skip-link" href="#main-content">跳到主要內容</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <ContactDock />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
