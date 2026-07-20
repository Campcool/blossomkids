"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type PageMapKey = "preschool" | "after-school" | "campus" | "admissions" | "parents" | "about";

const mapItems: Array<{ key: PageMapKey; href: string; label: string; meta: string; shape: string; image: string }> = [
  { key: "preschool", href: "/preschool", label: "幼兒園", meta: "2–6 歲", shape: "block", image: "/images/toys/cutouts/pink-tower.png" },
  { key: "after-school", href: "/after-school", label: "安親課後", meta: "國小課後", shape: "puzzle", image: "/images/toys/cutouts/brown-stair.png" },
  { key: "campus", href: "/campus", label: "校園日常", meta: "環境安全", shape: "tangram", image: "/images/toys/cutouts/rainbow.png" },
  { key: "admissions", href: "/admissions", label: "招生參觀", meta: "年齡費用", shape: "arch", image: "/images/toys/cutouts/jigsaw.png" },
  { key: "parents", href: "/parents", label: "家長專區", meta: "公告餐點", shape: "loose", image: "/images/toys/cutouts/color-tablets.png" },
  { key: "about", href: "/about", label: "關於我們", meta: "理念團隊", shape: "stack", image: "/images/toys/cutouts/tangram-bird.png" },
];

export function PlayfulPageMap() {
  const pathname = usePathname();

  return (
    <nav className="play-map" aria-label="網站分頁">
      <div className="play-map-inner">
        <div className="play-map-track">
          {mapItems.map((item) => {
            const isCurrent = pathname === item.href;
            return (
              <Link
                className={`map-piece map-piece-${item.shape}`}
                href={item.href}
                key={item.key}
                aria-current={isCurrent ? "page" : undefined}
              >
                <span className="map-piece-art" aria-hidden="true"><img src={item.image} alt="" /></span>
                <span className="map-piece-copy"><small>{item.meta}</small><strong>{item.label}</strong></span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
