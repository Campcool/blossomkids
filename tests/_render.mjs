// tests/_render.mjs — 從正式部署產物 out/ 讀頁面
//
// 正式站是 GitHub Pages 上的 next build 靜態匯出：deploy-pages.yml 跑
// `STATIC_EXPORT=1 next build` 後上傳 `out/`。這裡刻意**不**走
// vinext/Vite 的 dist/server/index.js——那條管線依 README 只供本機開發與
// chatgpt.site 預覽，正式站不使用。2026-08-16 起的測試都掛在 dist/ 上，
// 等於整套斷言驗的是一個沒有人看得到的產物，真正上線的 out/ 從未被檢查過。
//
// output: "export" 產出扁平檔名：/ → out/index.html、/about → out/about.html。
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const OUT = new URL("../out/", import.meta.url);

const fileFor = (routePath) =>
  routePath === "/" ? "index.html" : routePath.replace(/^\//, "") + ".html";

/**
 * 讀取靜態匯出的頁面。回傳形狀刻意與原本的 worker.fetch() 相容
 * （.status / .text()），讓既有斷言不必改寫。
 */
export async function render(routePath = "/") {
  const url = new URL(fileFor(routePath), OUT);
  try {
    const html = await readFile(url, "utf8");
    return { status: 200, async text() { return html; } };
  } catch (error) {
    if (error.code === "ENOENT") {
      return { status: 404, async text() { return ""; } };
    }
    throw error;
  }
}

/** out/ 底下的檔案路徑，給 stat()/readFile() 用。 */
export const outPath = (relative) => fileURLToPath(new URL(relative, OUT));
