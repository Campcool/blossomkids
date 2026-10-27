# 2026-10-27 — 預約參觀服務卡片

使用者先審閱原始／提案對比後回覆「繼續」，本輪僅實作華兒園的該份卡片稿，不擴大到其他站或新內容。

## 變更

- 將原本「想了解的服務」下拉選單改成原生單選卡，移到表單頂部。
- 保留幼兒園、安親／課後照顧、寒暑假活動、還不確定想先參觀四個原值；初始沒有預選，仍必填。
- 深綠邊框／淡綠底與圓點共同標示選中；原生 radio 保留標籤、鍵盤選擇及焦點，支援 reduced-motion／forced-colors。
- 340px 以下卡片單欄，其餘兩欄；手機其餘欄位單欄，桌機姓名／電話兩欄，出生年月／時段／入學時間三欄。
- 沿用同一 FormData／composeMessage、LINE／電話／簡訊與資料不自動上傳的流程。不新增招生承諾或資料儲存。

## 選材與範圍

採用層級：Uiverse 片段改作，而非整包匯入。
作者 andrew-demchenk0，元件 dry-elephant-32：
https://github.com/uiverse-io/galaxy/blob/adbd2adde0a299a3956ea288fb444ec01891ca41/Radio-buttons/andrew-demchenk0_dry-elephant-32.html
移除示範費率、分級配色、固定尺寸與 hover 放大；樣式限縮並換成華兒園品牌。MIT 通知在 public/licenses/uiverse-visit-service-cards.txt。

原始與提案的實際渲染／審閱來源：
https://github.com/Campcool/AI-skill/tree/74f05ac9e1a67811fc9a3ec1d94f36037a6fda25/projects/uiverse-review-2026-10-25/blossomkids-comparison
初稿量測 375px 表單由約1185px增至1362px；這是可見選項與篇幅的取捨，不表示已提升預約率。

## 驗證與交接

- 正式 out/ 內容測試、TypeScript、ESLint、Next 靜態建置及 vinext 相容建置。
- 瀏覽器檢查涵蓋320／375／390／768／1440，八個路由；本變更另驗四個原值、必填、未預選、點選、鍵盤焦點、手機欄寬及原訊息整理。
- 變更中文後執行 scripts/subset-font.py；是否產生不同字型blob由實際重建結果判定。
- 檢查均使用虛構資料與本機靜態頁，不聯絡園方；正式發布由原GitHub Pages管線處理。最終執行狀態以本次PR／Actions為準，未聲稱真機、Safari、正式LINE收件或轉換成效已驗證。
- 師資與未補影像維持既有隱藏策略；補件仍依 docs/CONTENT-HANDOFF.md。價格、名額、電話、LINE、實拍及已打碼照片保持原有事實。

獨立暫存建置實測：TypeScript／ESLint、Next／vinext、20項內容測試及40個頁面尺寸組合與11項互動檢查通過。字型子集已重產，blob仍為 d5c60b331698646fbf8e2740a60df4a757c73a74，因此不重複提交同一二進位檔。紀錄：https://github.com/Campcool/AI-skill/actions/runs/40470852190 。產品PR仍由既有Site Check獨立執行。
