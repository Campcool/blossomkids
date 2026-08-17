import assert from "node:assert/strict";
import test from "node:test";
import { readFile, stat } from "node:fs/promises";
import { render, outPath } from "./_render.mjs";

// ── 品牌核心事實（每頁都應一致）───────────────────────────
const brandFacts = [
  /新北市三重區三和路二段75號2樓/,
  /tel:\+886229761536/,
  /line\.me\/ti\/p\/~18250021/,
];

for (const page of [
  "/",
  "/preschool",
  "/after-school",
  "/admissions",
  "/campus",
  "/about",
  "/parents",
]) {
  test(`${page} responds 200 with brand facts`, async () => {
    const response = await render(page);
    assert.equal(response.status, 200, `${page} should respond 200`);
    const html = await response.text();
    assert.ok(html.length > 5_000, `${page} should render substantial HTML`);
    for (const fact of brandFacts) {
      assert.match(html, fact, `${page} should contain ${fact}`);
    }
  });
}

// ── 招生頁：表單與收費誠實宣告 ────────────────────────────
test("admissions has the working visit form and honest fee disclaimer", async () => {
  const html = await (await render("/admissions")).text();
  assert.match(html, /id="visit-form"/, "visit form anchor");
  assert.match(html, /預約參觀/, "form heading");
  assert.match(
    html,
    /實際金額請以現場詢問及園方最新正式文件為準/,
    "fee disclaimer",
  );
  assert.match(html, /收費逐項清楚/, "fee section heading");
  assert.match(html, /04/, "process step count");
});

// ── 隱私頁：隱私權政策存在 ───────────────────────────────
test("privacy policy page exists", async () => {
  const html = await (await render("/privacy")).text();
  assert.equal((await render("/privacy")).status, 200);
  assert.match(html, /隱私權/, "privacy content present");
});

// ── JSON-LD 結構化資料 ──────────────────────────────────
test("homepage carries ld+json structured data", async () => {
  const html = await (await render("/")).text();
  assert.match(html, /application\/ld\+json/);
});

// ── sitemap / robots 靜態產出存在（GitHub Pages 直接提供 out/）───
for (const file of ["sitemap.xml", "robots.txt"]) {
  test(`${file} produced by build`, async () => {
    await stat(outPath(file));
  });
}

test("sitemap.xml lists the admissions page", async () => {
  const xml = await readFile(outPath("sitemap.xml"), "utf-8");
  assert.match(xml, /admissions/, "admissions page should be listed");
});

// ── 防呆：確認測到的是真的上線產物 ────────────────────────────
// 這套測試曾經掛在 vinext 的 dist/ 上，全綠但驗的不是部署的東西。
// 這一條讓那種錯誤無法再靜默發生。
test("tests run against the deployed static export, not the dev bundle", async () => {
  const html = await (await render("/")).text();
  assert.ok(html.length > 5_000, "out/index.html 必須存在且有內容——若為空，代表沒先跑 STATIC_EXPORT=1 next build");
  await stat(outPath("index.html"));
});
