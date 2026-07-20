# AI-README｜Codex × Claude 交接文件

> 這不是一般的專案介紹，而是本網站的 AI 維護與交接文件。Codex、Claude 或其他接手者開始工作前，請先完整閱讀本檔案。

## 專案摘要

- 專案：華兒園精緻幼兒園官方網站
- 正式網域：https://blossomkids.tw
- `www` 網域：https://www.blossomkids.tw
- GitHub：https://github.com/Campcool/blossomkids
- Sites 專案 ID：`appgprj_6a5baa3db6d88191b03834b85e865857`
- 主要語言：繁體中文
- 時區：Asia/Taipei

網站服務範圍包含兩歲專班、幼兒園與國小課後照顧，重點是讓家長快速看懂日程、環境、費用、招生與聯絡資訊。

## 正式託管與網域（2026-07-20 業主最終決定，優先於任何舊描述）

**正式網站由 GitHub Pages 託管**，透過 `.github/workflows/deploy-pages.yml` 在每次 push `main` 時以 `STATIC_EXPORT=1 npx next build` 產出靜態站自動部署。

- GoDaddy DNS：`@` 四筆 A 記錄指向 `185.199.108–111.153`，`www` CNAME 指向 `campcool.github.io`。
- repo Settings → Pages：Source＝GitHub Actions、Custom domain＝`blossomkids.tw`、Enforce HTTPS 開啟。
- 2026-07-20 曾發生：OpenAI Sites 透過 GoDaddy Domain Connect 把 DNS 改走，導致網域回到未打碼舊版。業主已恢復 DNS 並刪除 `_openai-site-verification`（含 .www）與 `_cf-custom-hostname`（含 .www）四筆 TXT 認領記錄。
- ⚠️ **絕對不要**再把本網域綁定到 OpenAI Sites／chatgpt.site 或改走 DNS；chatgpt.site 僅得作為開發預覽，且其上不得保留未去識別的兒童照片。
- 外部驗證工具：手動觸發 `.github/workflows/site-check.yml` 可從 GitHub 主機實測正式站內容與供應者。

## 技術架構

- Next.js 16
- React 19
- TypeScript
- vinext／Vite
- Cloudflare Worker 執行環境
- OpenAI Sites 發布流程
- Iansui 芫荽手寫字體，作為童趣塗鴉標題字

常用指令：

```bash
npm install
npm run dev
npm run build
npm test
npm run lint
```

Node.js 需求：`>=22.13.0`。

## 重要目錄

```text
app/                         各頁面與全站樣式
components/                  共用頁首、頁尾、圖卡與聯絡元件
lib/site-data.ts             園所電話、地址、地圖、LINE 等共用資料
public/images/               網站照片與課程插圖
public/images/toys/cutouts/  快速分頁的蒙特梭利／七巧板圖示
public/fonts/                Iansui 字體與授權
tests/                       頁面內容與版面規則測試
worker/                      Cloudflare Worker 入口
.openai/hosting.json         Sites 專案連結設定
```

主要頁面：

- `/`：首頁
- `/preschool`：幼兒園
- `/after-school`：安親課後
- `/campus`：校園日常
- `/admissions`：招生參觀
- `/parents`：家長專區
- `/about`：關於我們與公開資訊

## 已確立的設計規則

後續修改請維持以下原則：

1. 標題使用童趣手寫感，但內文必須清楚易讀。
2. 中文段落依語意斷句，不可只依容器寬度任意換行。
3. Slogan 使用短句、同層級字級與明確節奏，不要忽大忽小。
4. 桌機快速分頁橫向平均分配；目前區域要稍微放大並清楚標示。
5. 桌機聯絡工具為右側直立浮動列；行動裝置保留底部操作形式。
6. 電話、LINE、預約參觀圖示在所有位置維持同一套視覺。
7. 分頁 favicon 使用去背、放大的七巧板小鳥色塊圖示。
8. 日程、課程與班級內容應搭配可愛且有實際意義的插圖。
9. 避免過高卡片、無意義留白、重複 CTA 與重複文案。
10. 地址需醒目並可開啟 Google 地圖，標示「三和夜市口旁」及「位於三重三和路主要幹道」。

## 已確認的園所資料

- 園所名稱：新北市私立華兒園精緻幼兒園
- 地址：新北市三重區三和路二段 75 號 2 樓
- 電話：(02) 2976-1536
- 地標：三和夜市口旁
- 道路說明：位於三重三和路主要幹道

`lib/site-data.ts` 是共用資料的單一來源。不要在多個元件中各自寫死電話或地址。

目前的 LINE 連結是園所 LINE 熱點，不一定是正式官方帳號聊天連結；取得園方正式連結後，應集中更新 `lib/site-data.ts`。

## 內容狀態與注意事項

網站仍有部分資料標示為「待園方補充」或「待核對」，包括：

- 班級最新名額與候補狀態
- 正式招生年齡與出生年月範圍
- 最新學年度完整收費項目
- 補助、延托、寒暑假與退費規則
- 師資姓名、資格、年資與照片
- 立案字號、保險與最新公開資料
- 正式 LINE 官方帳號

未取得來源前，不要自行臆測或把待確認資料改成已確認事實。

## GitHub 儲存庫完整性提醒

使用 GitHub 網頁上傳 ZIP 時，隱藏檔可能被漏掉。目前請優先確認下列檔案存在：

### `.openai/hosting.json`

```json
{
  "project_id": "appgprj_6a5baa3db6d88191b03834b85e865857",
  "d1": null,
  "r2": null
}
```

`vite.config.ts` 會直接讀取這個檔案；缺少時可能無法重新建置或發布。

### `.gitignore`

至少應忽略：

```gitignore
/node_modules
/.npm-cache/
/.next/
/.vinext/
/dist/
/.wrangler/
/.env*
```

不要提交 `.env`、金鑰、登入資訊或其他秘密資料。

## AI 接手流程

Codex、Claude 或其他 AI 接手時，請依序進行：

1. 讀完本文件，再檢查 `git status` 與最近提交。
2. 確認 `.openai/hosting.json` 和 `.gitignore` 存在。
3. 先閱讀 `lib/site-data.ts`、`app/page.tsx`、`app/globals.css` 與相關共用元件。
4. 保留使用者既有修改，不可用重設或覆寫方式清除不相關變更。
5. 修改文字時全面檢查中文斷句、標點、層級與行動裝置顯示。
6. 修改圖示或圖片時，保持去背、視覺一致與替代文字完整。
7. 執行 `npm run build`、`npm test`，並依變更範圍執行 lint 或瀏覽器檢查。
8. 發布前確認桌機與行動裝置版面、電話／LINE／地圖連結及 favicon。
9. GitHub 與 Sites 是兩個不同的發布面：更新 GitHub 不會自動更新正式網站。
10. 只有在使用者明確要求發布時，才建立新版 Sites 部署或調整 DNS。

## 完成條件

每次交接前至少確認：

- [ ] 主要頁面可正常開啟
- [ ] 桌機與行動裝置沒有明顯溢出或遮擋
- [ ] 中文段落與 Slogan 斷句自然
- [ ] 電話、LINE、預約與地圖連結正確
- [ ] 圖片、字體及 favicon 可正常載入
- [ ] `npm run build` 成功
- [ ] `npm test` 成功
- [ ] 未提交秘密資料或無關檔案
- [ ] 若已發布，正式網域與 `www` 均可使用 HTTPS

## 交接留言格式

AI 完成一輪工作後，請留下簡短紀錄：

```text
日期：YYYY-MM-DD
處理者：Codex／Claude
完成：
- （填寫）

驗證：
- （填寫）

尚待確認：
- （填寫）
```

---

最後更新：2026-07-20，由 Codex 依目前正式網站、GitHub 與網域狀態整理。


## 變更紀錄（新條目加在最上面）

### 2026-07-20（Claude）
- 建立 GitHub Pages 部署管線（STATIC_EXPORT 條件式靜態輸出，vinext 預覽不受影響）；綁定 blossomkids.tw。
- 預約表單正式可用：組訊息＋自動複製，提供園長 LINE（ID 18250021，`lib/site-data.ts`）／致電／簡訊三管道；日後填 `lineOaId` 自動升級官方帳號預填。
- 畢業照 13 位孩童眼部遮蔽（改名 `graduation-30-masked.jpg`）；未遮蔽原圖不得再進公開 repo。
- 文案合規：大班移除ㄅㄆㄇ/ABC、「蒙氏」改「啟蒙」、裁罰資訊依業主指示不揭露、內部工作語氣改正式文案。
- 新增 `/privacy` 隱私權頁、robots.txt、sitemap.xml、GSC 驗證檔；字型子集化 9.1MB→300KB（`scripts/subset-font.py`）、OG 圖 2.5MB→144KB。
- 待補（等園方）：收費明細、招生年齡對照、師資、菜單、行事曆、文件下載。
