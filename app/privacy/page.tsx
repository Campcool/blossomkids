import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "隱私權說明",
  description: "華兒園官網個人資料蒐集、使用、兒童影像授權與聯絡窗口說明。",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="PRIVACY"
        title="資料怎麼用｜清楚說明"
        description="說明本網站如何處理您留下的資料，以及兒童影像的刊登原則。"
      />
      <div id="page-content">
        <section className="section">
          <div className="container privacy-doc">
            <article>
              <h2>1. 預約表單的資料</h2>
              <p>
                本網站的預約參觀表單不會自動上傳或儲存任何資料：您填寫的內容只會在您自己的瀏覽器整理成一則訊息，
                由您決定是否透過 LINE、電話或簡訊傳送給園方。在您主動傳送之前，園方不會收到任何資料。
              </p>
              <h2>2. 園方收到資料後的使用方式</h2>
              <p>
                園方收到您的預約訊息後，僅用於回覆本次預約、安排參觀與招生聯繫，不會提供給第三方，
                也不會用於與招生無關的行銷用途。若您希望園方刪除已提供的聯絡資料，歡迎來電告知。
              </p>
              <h2>3. 兒童影像</h2>
              <p>
                網站刊登的孩童照片以取得家長同意為原則，並進行去識別處理（如遮蔽眼部）。
                若您是照片中孩子的家長，希望調整或下架任何影像，請來電與園方聯繫，我們會儘速處理。
              </p>
              <h2>4. Cookie 與流量分析</h2>
              <p>本網站目前未使用 Cookie，也未安裝第三方流量分析或廣告追蹤工具。若日後有變動，將更新本頁說明。</p>
              <h2>5. 外部連結</h2>
              <p>
                網站內的 LINE、Google 地圖等外部服務連結，開啟後適用各該服務自己的隱私權政策。
              </p>
              <h2>6. 聯絡窗口</h2>
              <p>
                {site.fullName}｜{site.address}｜電話 {site.phoneDisplay}
              </p>
              <p className="privacy-updated">本說明最後更新：2026 年 7 月 20 日</p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
