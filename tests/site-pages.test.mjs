import assert from "node:assert/strict";
import test from "node:test";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";

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

// ── sitemap / robots 靜態產出存在（Pages 直接提供 dist/client）───
for (const file of ["sitemap.xml", "robots.txt"]) {
  test(`${file} produced by build`, async () => {
    await stat(fileURLToPath(new URL(`../dist/client/${file}`, import.meta.url)));
  });
}

test("sitemap.xml lists the admissions page", async () => {
  const xml = await readFile(new URL("../dist/client/sitemap.xml", import.meta.url), "utf-8");
  assert.match(xml, /admissions/, "admissions page should be listed");
})
