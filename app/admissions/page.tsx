import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";
import { VisitForm } from "@/components/visit-form";
import { site } from "@/lib/site-data";

export const metadata: Metadata = { title: "招生資訊與預約參觀", description: "華兒園招生年齡、流程、收費、補助、退費與預約參觀表單。" };

export default function AdmissionsPage() {
  return (
    <>
      <PageHero eyebrow="ADMISSIONS & VISIT" title="實際看看｜再做打算" description="華兒園誠摯邀請您帶小寶貝一同參觀；招生年齡、名額、費用與流程也集中在這一頁。" note="公開索引顯示 114 學年度月費 11,000 元；最新金額與項目待核對。" />
      <div id="page-content">
        <section className="section journey-section toy-section toy-stair">
          <div className="container">
            <SectionHeading eyebrow="HOW TO JOIN" title="先看清楚｜再安心決定" description="四步完成資料確認、預約參觀、現場提問與入學準備。" />
            <ol className="step-grid">
              <li><span>01</span><h3>查看基本資訊</h3><p>先確認年齡、課程方向、地點與可配合時段。</p></li>
              <li><span>02</span><h3>預約到園參觀</h3><p>留下最少必要資料，由園方聯繫安排時間。</p></li>
              <li><span>03</span><h3>現場了解與提問</h3><p>看環境、談孩子需求並取得正式招生資料。</p></li>
              <li><span>04</span><h3>完成報名文件</h3><p>確認名額、收費、退費、契約及入學準備。</p></li>
            </ol>
          </div>
        </section>

        <section className="section soft-section eligibility-section toy-section toy-pink">
          <div className="container">
            <SectionHeading eyebrow="ELIGIBILITY" title="年齡對照清楚｜名額狀態明白" description="出生年月與候補狀態，依最新學年度核定簡章更新。" />
            <div className="admission-table">
              <div className="admission-head"><span>班別／服務</span><span>需確認內容</span><span>名額狀態</span></div>
              <div><strong>幼幼班</strong><p>出生年月範圍、入園日、是否候補</p><StatusBadge /></div>
              <div><strong>小班</strong><p>出生年月範圍、入園日、是否候補</p><StatusBadge /></div>
              <div><strong>中班</strong><p>出生年月範圍、入園日、是否候補</p><StatusBadge /></div>
              <div><strong>大班</strong><p>出生年月範圍、入園日、是否候補</p><StatusBadge /></div>
              <div><strong>安親課後</strong><p>招收年級、學校、接送與候補</p><StatusBadge /></div>
            </div>
          </div>
        </section>

        <section className="section fees-section toy-section toy-beads" id="fees">
          <div className="container fees-layout">
            <div><p className="eyebrow">FEES & POLICIES</p><h2>收費逐項清楚<br />預算安排踏實</h2><p className="large-copy">逐項列出註冊、月費、代辦、延托、交通、餐費、補助與退費規則。</p></div>
            <div className="fee-card">
              <div className="fee-card-head"><span>114 學年度參考</span><StatusBadge>待園方核對</StatusBadge></div>
              <strong>NT$ 11,000 <small>／月</small></strong>
              <p>來源為使用者提供的幼園通頁面；尚不確定包含哪些收費項目，也不是 115 學年度正式報價。</p>
              <dl><div><dt>註冊費</dt><dd>待補</dd></div><div><dt>月費涵蓋</dt><dd>待補</dd></div><div><dt>代辦費</dt><dd>待補</dd></div><div><dt>延托／安親</dt><dd>待補</dd></div><div><dt>補助方式</dt><dd>待補</dd></div><div><dt>退費辦法</dt><dd>待補</dd></div></dl>
            </div>
          </div>
          <div className="container subsidy-block">
            <div className="subsidy-heading">
              <div><p className="eyebrow">2026 SUBSIDY REFERENCE</p><h3>一般私立幼兒園育兒津貼／5歲就學補助</h3></div>
              <StatusBadge>資格與撥付方式需個別確認</StatusBadge>
            </div>
            <div className="subsidy-table">
              <div className="subsidy-head"><span>胎次</span><span>中央政策參考金額</span><span>園方原稿試算</span></div>
              <div><strong>第一胎</strong><b>每月 5,000 元</b><span>以月費 8,000 元試算，差額 3,000 元</span></div>
              <div><strong>第二胎</strong><b>每月 6,000 元</b><span>以月費 8,000 元試算，差額 2,000 元</span></div>
              <div><strong>第三胎以上</strong><b>每月 7,000 元</b><span>以月費 8,000 元試算，差額 1,000 元</span></div>
            </div>
            <div className="fee-review-note">
              <strong>上線前需釐清的差異</strong>
              <p>園方手寫原稿以每月 8,000 元試算，但幼園通 114 學年度資料顯示每月 11,000 元；需確認兩者涵蓋的收費項目，以及 16:00 後延托費、寒暑假與補助撥付方式。</p>
              <a href="https://www.ey.gov.tw/Page/5A8A0CB5B41DA11E/1edab400-96b1-479d-919d-8ee14340fd26" target="_blank" rel="noreferrer">查看行政院 0–6 歲政策說明 ↗</a>
            </div>
          </div>
        </section>

        <section className="section form-section toy-section toy-jigsaw" id="visit-form">
          <div className="container form-layout">
            <div>
              <p className="eyebrow">BOOK A VISIT</p><h2>預約參觀</h2>
              <p>填好表單後，網站會替您整理成一則預約訊息並複製，加園長 LINE 貼上傳送即可；資料不會自動上傳或儲存。</p>
              <div className="contact-card"><span>也可以直接來電</span><a href={site.phoneHref}>{site.phoneDisplay}</a><a className="inline-map-link" href={site.mapsHref} target="_blank" rel="noreferrer"><span className="location-pin" aria-hidden="true" /><span>{site.address}<small>{site.locationLandmark}｜{site.locationRoadNote}</small></span></a></div>
              <div className="line-contact-card" id="line-contact">
                <span className="line-pill">LINE</span>
                <div><strong>加園長 LINE 直接詢問</strong><p>LINE ID：{site.lineId}。加入好友後可直接與園長聯繫，也可把預約表單整理好的訊息貼上傳送。</p></div>
                <a href={site.lineHref} target="_blank" rel="noreferrer">加 LINE 好友 ↗</a>
              </div>
            </div>
            <VisitForm />
          </div>
        </section>
      </div>
    </>
  );
}
