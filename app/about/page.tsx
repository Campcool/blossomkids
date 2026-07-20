import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PhotoSlot } from "@/components/photo-slot";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";
import { site } from "@/lib/site-data";

export const metadata: Metadata = { title: "關於華兒園", description: "華兒園教育理念、園所故事、師資團隊、立案公開資訊與聯絡方式。" };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="ABOUT HUA-ER-YUAN" title="日常有照顧｜成長有腳步" description="從教育理念、園所沿革到師資與立案資料，認識華兒園的做法。" note="園所沿革、創辦故事與教育理念，待訪談園方後補入。" />
      <div id="page-content">
        <section className="section philosophy-section toy-section toy-pink">
          <div className="container content-split">
            <div><p className="eyebrow">OUR BELIEF</p><h2>先理解孩子<br />再溫柔引導</h2><p className="large-copy">讓孩子好好玩、慢慢長；尊重每個人的節奏，也把每天的照顧方式清楚告訴家長。</p><StatusBadge>需園方確認</StatusBadge></div>
            <div className="belief-grid"><article><span>01</span><h3>先理解</h3><p>在引導之前，先看見孩子的情緒與需要。</p></article><article><span>02</span><h3>真實陪伴</h3><p>不急著追求整齊成果，重視過程中的嘗試。</p></article><article><span>03</span><h3>清楚溝通</h3><p>重要資訊說明完整，家長不用猜也不用追問。</p></article><article><span>04</span><h3>一起成長</h3><p>孩子、家庭與老師在穩定關係中共同前進。</p></article></div>
          </div>
        </section>

        <section className="section soft-section history-section toy-section toy-stair">
          <div className="container story-layout">
            <PhotoSlot label="創辦／園長形象照" detail="園長照片、親筆理念與簽名待補" className="portrait-slot" />
            <div><p className="eyebrow">OUR STORY</p><h2>從最初的心意<br />走到今天的日常</h2><p className="large-copy">創校年份、創辦初衷與重要改變，將在訪談園方後依時間整理。</p><div className="timeline-placeholder"><div><time>創校年份</time><p>成立背景與最初的教育想法</p></div><div><time>重要年份</time><p>課程、環境或服務的重要改變</p></div><div><time>現在</time><p>幼兒園與課後照顧的現況</p></div></div></div>
          </div>
        </section>

        <section className="section team-section toy-section toy-rainbow" id="team">
          <div className="container">
            <SectionHeading eyebrow="OUR TEAM" title="老師是誰｜專業看得見" description="公開照片、職稱、合格資格、年資與專長；敏感個資不公開。" />
            <div className="team-grid">
              {["園長／負責人", "幼兒園教師", "幼兒園教保員", "安親課後老師"].map((role) => <article key={role}><PhotoSlot label={role} detail="人員照片待補" /><div><StatusBadge>姓名與資歷待補</StatusBadge><h3>{role}</h3><p>合格資格｜年資｜專長｜教育信念</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="section public-section toy-section toy-shapes" id="public-info">
          <div className="container">
            <SectionHeading eyebrow="PUBLIC INFORMATION" title="資料逐項公開｜選擇更有依據" description="目前參考幼園通公開索引；上線前以立案證書與主管機關資料覆核。" />
            <div className="public-info-layout">
              <dl className="data-table">
                <div><dt>園所全名</dt><dd>{site.fullName}</dd></div>
                <div><dt>設立別</dt><dd>私立</dd></div>
                <div><dt>負責人</dt><dd>林錦惠 <StatusBadge>待核對</StatusBadge></dd></div>
                <div><dt>核定人數</dt><dd>61 人 <StatusBadge>待核對</StatusBadge></dd></div>
                <div><dt>專用車輛</dt><dd>0 輛 <StatusBadge>待核對</StatusBadge></dd></div>
                <div><dt>地址</dt><dd><a className="inline-map-link" href={site.mapsHref} target="_blank" rel="noreferrer"><span className="location-pin" aria-hidden="true" /><span>{site.address}<small>{site.locationLandmark}｜{site.locationRoadNote}</small></span></a></dd></div>
                <div><dt>電話</dt><dd>{site.phoneDisplay}</dd></div>
                <div><dt>立案字號</dt><dd><StatusBadge>待園方提供</StatusBadge></dd></div>
                <div><dt>師生比／現有招生</dt><dd><StatusBadge>待園方提供</StatusBadge></dd></div>
                <div><dt>保險資訊</dt><dd><StatusBadge>待園方提供</StatusBadge></dd></div>
                <div><dt>收退費辦法</dt><dd><StatusBadge>待園方提供</StatusBadge></dd></div>
                <div><dt>裁罰與改善說明</dt><dd><StatusBadge>待主管機關資料核對</StatusBadge></dd></div>
              </dl>
              <aside className="source-note"><span>資料來源與狀態</span><h3>公開索引不是正式招生簡章</h3><p>參考頁顯示 114 學年度月費 11,000 元、裁罰紀錄 1 筆。上線前應查核處分日期、原因與改善結果，並由園方確認呈現方式。</p><a className="text-link" href={site.referenceHref} target="_blank" rel="noreferrer">查看參考頁 ↗</a></aside>
            </div>
          </div>
        </section>

        <section className="section contact-section toy-section toy-tangram">
          <div className="container contact-layout">
            <div><p className="eyebrow">CONTACT</p><h2>親自走一趟<br />更能安心感受</h2><a className="inline-map-link contact-map-link" href={site.mapsHref} target="_blank" rel="noreferrer"><span className="location-pin" aria-hidden="true" /><span>{site.address}<small>{site.locationLandmark}｜{site.locationRoadNote}</small></span></a><a className="phone-link" href={site.phoneHref}>{site.phoneDisplay}</a><a className="button" href={site.mapsHref} target="_blank" rel="noreferrer">開啟地圖導航</a></div>
            <div className="map-placeholder"><span>MAP</span><strong>{site.address}</strong><p>點擊「開啟地圖導航」，即可查看位置與規劃路線。</p></div>
          </div>
        </section>
      </div>
    </>
  );
}
