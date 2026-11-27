import type { Metadata } from "next";

// Each exported page owns its canonical and social metadata. A canonical in the
// root layout would incorrectly consolidate every child route into the homepage.
export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = `https://blossomkids.tw${path}`;
  const fullTitle = `${title}｜華兒園`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "華兒園精緻幼兒園",
      type: "website",
      locale: "zh_TW",
      images: [{ url: "/og-v3.jpg", width: 1200, height: 685, alt: "華兒園｜好好玩 慢慢長" }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/og-v3.jpg"] },
  };
}
