import assert from "node:assert/strict";
import test from "node:test";
import { readFile, stat } from "node:fs/promises";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the complete preschool homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /華兒園/);
  assert.match(html, /好好玩/);
  assert.match(html, /預約參觀/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /hero-learning-space\.jpg/);
  assert.match(html, /graduation-30-masked\.jpg/);
  assert.match(html, /class="media-caption"/);
  assert.match(html, /tel:\+886229761536/);
  assert.match(html, /line\.me\/ti\/p\/~18250021/);
  assert.match(html, /新北市三重區三和路二段75號2樓/);
  assert.match(html, /maps\.google\.com/);
  assert.match(html, /三和夜市口旁/);
  assert.match(html, /三重三和路主要幹道/);
  assert.match(html, /title="華兒園位置互動地圖"/);
  assert.match(html, /output=embed/);
  assert.match(html, /contact-symbol-phone/);
  assert.match(html, /contact-symbol-line/);
  assert.match(html, /contact-symbol-visit/);
  assert.doesNotMatch(html, /contact-icon-(phone|line|visit)|dock-icon-/);
  assert.match(html, /華兒園誠摯邀請您帶小寶貝一同參觀。<\/span><span>親自感受教室、活動與每天的溫暖陪伴。/);
  assert.match(html, /從幼幼班到大班。<\/span><span>課程、作息、餐點與入學資訊，一次看懂。/);
  assert.match(html, /日程、環境、費用，是家長最常詢問的重點。<\/span><span>我們先整理好，讓您查看更輕鬆。/);
  assert.match(html, /從 07:30 入園到離園與延托，每個時段都有清楚安排；課程活動會依孩子的學習興趣彈性調整。/);
  assert.match(html, /民國 94 年/);
  assert.match(html, /幼兒園核定<\/span><strong>48 人/);
  assert.match(html, /課後照顧核定<\/span><strong>13 人/);
  assert.match(html, /每張照片都會附上用途說明。/);
  assert.match(html, /收退費及安全資訊，逐項核對、清楚公開。/);
  assert.match(html, /兩歲專班、幼兒園、國小課後照顧。<\/span><span>日程、環境、費用，一頁看清楚。/);
  assert.match(html, /toys\/cutouts\/pink-tower\.png/);
  assert.match(html, /HUAERYUAN · DAILY NOTE/);
  assert.match(html, /og-v3\.jpg/);
  assert.match(html, /rel="icon"[^>]+favicon-tangram-bird-v3\.png\?v=3/);
  assert.equal((html.match(/class="play-map"/g) ?? []).length, 1);
  assert.match(html, /footer-contact-panel/);
  assert.match(html, /footer-invitation-map/);
  assert.match(html, /內容維護中/);
  assert.match(html, /footer-contact-copy[\s\S]*major-section-title/);
  assert.match(html, /footer-contact-panel[\s\S]*footer-map-feature/);
  assert.doesNotMatch(html, /footer-action-grid/);
  assert.doesNotMatch(html, /class="container footer-grid"/);
  assert.doesNotMatch(html, /class="cta-band"/);
  assert.doesNotMatch(html, /class="closing-cta"/);
  assert.doesNotMatch(html, /brand-mark/);
  assert.doesNotMatch(html, /快速分頁/);
  assert.doesNotMatch(html, />快速連結<\/h2>/);
  assert.doesNotMatch(html, /mobile-drawer|mobile-menu-trigger/);
  assert.doesNotMatch(html, /codex-preview/);
  assert.doesNotMatch(html, /Building your site|SkeletonPreview/);
});

test("renders all primary information pages", async () => {
  const routes = [
    ["/preschool", "入園的一天"],
    ["/after-school", "安親課後"],
    ["/campus", "設備有紀錄"],
    ["/admissions", "預約參觀"],
    ["/parents", "每日餐點"],
    ["/about", "資料逐項公開"],
  ];
  for (const [path, expected] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, new RegExp(expected), path);
    assert.match(html, /aria-current="page"/, `${path} current page tab`);
    assert.doesNotMatch(html, /class="cta-band"/, `${path} no duplicate CTA band`);
    assert.doesNotMatch(html, /class="closing-cta"/, `${path} no duplicate closing CTA`);
    if (path === "/preschool") {
      assert.match(html, /curriculum\/toddler-motor-play\.webp/);
      assert.doesNotMatch(html, /\/images\/curriculum\/[^"'\s]*\.png/, "curriculum images must be webp (no png)");
      assert.match(html, /大肌肉遊戲/);
      assert.match(html, /入小準備/);
      // 合規：幼兒園頁不得出現注音／分科外語教學宣傳字樣
      assert.doesNotMatch(html, /ㄅㄆㄇ|ABC/);
      assert.doesNotMatch(html, /<article class="age-card"[^>]*>\s*<span>0[1-4]<\/span>/);
    }
    if (path === "/campus") {
      assert.match(html, /images\/campus\/bedding-storage\.png/);
      assert.match(html, /class="media-caption"/);
      assert.match(html, /media-caption-stacked/);
      assert.match(html, /室內面積/);
      assert.match(html, /218\.07 平方公尺/);
    }
    if (path === "/admissions") {
      assert.match(html, /實際金額以現場詢問為主/);
    }
  }
});

test("bundles the Traditional Chinese handwriting headline font", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /@font-face\s*{[^}]*font-family:\s*"Iansui"/s);
  assert.match(css, /h1,[\s\S]*h2,[\s\S]*h3,[\s\S]*font-family:\s*"Iansui"/);
  assert.match(css, /Iansui-subset\.woff2/);
  const font = await stat(new URL("../public/fonts/Iansui-subset.woff2", import.meta.url));
  // 子集化後的標題字型：不應為 0，也不應大到未子集（原始 TTF 約 9MB）
  assert.ok(font.size > 10_000 && font.size < 2_000_000);
});

test("curriculum images are served as webp under size budget", async () => {
  // Second-round optimization (Manus 2026-08-16): 4 curriculum PNGs (2.4-2.7MB)
  // were re-encoded to webp (target <200KB each) to cut transfer cost on the
  // marketing funnel page. Asserts: webp files exist, HTML references them,
  // and no single image exceeds the 300KB budget (anti-regression guard).
  const files = [
    "curriculum/toddler-motor-play.webp",
    "curriculum/small-music-movement.webp",
    "curriculum/middle-material-exploration.webp",
    "curriculum/senior-literacy-play.webp",
  ];
  const SIZE_BUDGET = 300 * 1024;
  const response = await render("/preschool");
  const html = await response.text();
  for (const file of files) {
    const statResult = await stat(new URL(`../public/images/${file}`, import.meta.url));
    assert.ok(statResult.size > 1024, `${file} exists and is non-empty`);
    assert.ok(statResult.size < SIZE_BUDGET, `${file} is within ${SIZE_BUDGET}B budget (got ${statResult.size})`);
    assert.match(html, new RegExp(file.replace(/\//g, "\\/")), `HTML references ${file}`);
  }
});

test("keeps shared readability and media-caption tokens documented", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const design = await readFile(new URL("../DESIGN.md", import.meta.url), "utf8");
  assert.match(css, /--text-small:\s*\.875rem/);
  assert.match(css, /--media-caption-size:\s*clamp\(/);
  assert.match(css, /\.campus-real-photo \.media-caption/);
  assert.match(design, /Never shrink navigation or meaningful copy/);
  assert.match(design, /Tables keep readable text and scroll horizontally/);
});
