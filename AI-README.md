# AI-README｜華兒園精緻幼兒園官方網站交接文件

> 本倉庫的完整交接文件是 `README.md`（Codex × Claude × Manus 共同維護的 AI-readme）。本檔案是**供 AI 快速定位的索引與最新狀態快照**：接手者讀完本檔後，應完整閱讀 `README.md` 再動手。

## 專案現況（2026-08-16 快照）

| 項目 | 狀態 |
|---|---|
| 正式網域 | https://blossomkids.tw / https://www.blossomkids.tw，**GitHub Pages 託管**（GoDaddy DNS A 記錄） |
| 技術棧 | Next.js 16（`STATIC_EXPORT=1` 靜態輸出）＋React 19＋TS，vinext/Vite 僅本機開發 |
| 主要頁面 | 7 頁：`/` `/preschool` `/after-school` `/campus` `/admissions` `/parents` `/about` |
| 測試基線 | `npm test` **18 項全綠**（site-pages 13 項＋rendered-html 5 項），防假綠已實測 |
| CI | `deploy-pages.yml`（push main 自動部署）＋`site-check.yml`（build-and-test 門禁 + 手動線上實測）|
| 滿分制評分 | **96**（業主內容天花板：灰標待補、視覺回歸測試空缺） |
| 最新 commit | `ee67eb4`（2026-08-16，CI 全綠） |

## 最近修改方向與進度（兩輪迭代紀錄）

**第一輪（2026-08-16，commit `5379b94`）**：安全網從 0 到 1。新增 `tests/site-pages.test.mjs` 13 項（7 頁路由 200、品牌事實斷言、招生表單誠實宣告、JSON-LD、sitemap/robots 完整性）；`npm test` 升級為全套 17 項；`site-check.yml` 新增 push/PR 的 build-and-test 門禁（tsc＋靜態輸出 build＋全測）。結論：推 main 即部署正式站，門禁保證「綠才可上線」。

**第二輪（2026-08-16，commit `ee67eb4`，100 分制優化）**：
1. **圖片成本**：`/preschool` 課程頁 4 張 PNG（2.4–2.7MB/張）轉 WebP（<200KB/張，傳輸量降 93%+）。
2. **Starter 遺留清理**：刪 `.openai/`（除 `hosting.json` 見下方警告）、`drizzle/examples/`、928KB 舊 favicon；`worker/index.ts` **刻意保留**（Cloudflare Vite plugin RSC 管線需要合法 `config.main`，實測 `undefined` 會破壞 build）。
3. **vite.config.ts 簡化**：移除 hosting.json 匯入、佔位 DB ID 與 D1/R2 bindings（正式站不用 Cloudflare）。
4. **測試斷言**：課程圖必須 WebP、單圖 <300KB 預算斷言。

**滿分制重評扣分項（刻意保留，均有對沖）**：
- 多頁「待園方補充」灰標＝業主策略（誠實標記），方案已備妥，園方點一次頭即可隱藏。
- 視覺回歸測試空缺（下一輪建 Playwright 網後補）。

## 接手注意事項（必讀，詳細在 README.md）

1. **推 main 即部署正式站**，先過 CI 門禁（`npm test` 18 項）。
2. **改中文文案後必跑 `python3 scripts/subset-font.py`** 重產字型子集（否則新字退回系統字型）。
3. **⚠️ 絕對不要把 blossomkids.tw 綁回 OpenAI Sites／chatgpt.site 或改 DNS**——2026-07-20 曾因此網域回到未打碼舊版。
4. **⚠️ 未去識別的兒童照片不可進任何公開位置**（正式站、預覽站或 repo）。
5. **vinext build 失敗且重裝 node_modules 無效時**：先清 `.vinext` 與 `node_modules/.vite` 快取（含已移除模組的錯誤快取狀態）。
6. **`.openai/hosting.json` 已刪**：README.md「GitHub 儲存庫完整性提醒」的 hosting.json 段落過時，以本檔為準；若從 ZIP 重建 repo 而缺失 hosting.json 不再影響建置（vite.config 已不依賴它）。
7. 跨行 regex 陷阱：斷言 `/curriculum/.*\.png` 會從 WebP 匹配到頁尾其他 PNG，須用 `[^"'\s]*` 限域。

## 業主待辦（AI 勿代做，可提醒）

Google 商家檔案（最高優先）、真實園所照片（入鏡需家長書面授權）、LINE 官方帳號（填 `site.lineOaId` 即升級預填表單）、園方資料補齊（收費、招生年齡、師資、立案字號）、GSC 首頁索引請求。

---

詳細架構、目錄、設計規則、已確認園所資料與交接流程請見 `README.md` 末尾變更紀錄（新條目在最上）。

最後更新：2026-08-16，由 Manus 建立（滿分制 100 分制優化後）。
