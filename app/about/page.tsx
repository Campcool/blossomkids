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
      <PageHero eyebrow="ABOUT HUA-ER-YUAN" title="日常有照顧｜成長有腳步" description="從民國 94 年創立、教育宗旨到立案資料，認識華兒園一路走來的做法。" note={`正式設立：${site.establishedRoc}；園所資料以設立許可證書為依據。`} />
      <div id="page-content">
        <section className="section philosophy-section toy-section toy-pink">
          <div className="container content-split">
            <div><p className="eyebrow">OUR PURPOSE</p><h2>安全是起點<br />適性成長是方向</h2><p className="large-copy">華兒園將健康安全、學習環境、生活自理、社會適應與適性發展，放進每天的照顧與學習。</p><StatusBadge>園方正式教育宗旨</StatusBadge></div>
            <div className="belief-grid">
              <article><span>01</span><h3>健康與安全</h3><p>維護並增進幼兒的健康與安全。</p></article>
              <article><span>02</span><h3>良好環境</h3><p>提供幼兒良好的學習空間與成長環境。</p></article>
              <article><span>03</span><h3>社會適應</h3><p>擴大幼兒生活領域，增進社會適應能力。</p></article>
              <article><span>04</span><h3>生活自理</h3><p>培養幼兒良好的自理能力與生活習慣。</p></article>
              <article><span>05</span><h3>適性發展</h3><p>啟發幼兒的興趣與潛能，陪伴每個孩子適性發展。</p></article>
            </div>
          </div>
        </section>

        <section className="section soft-section history-section toy-section toy-stair">
          <div className="container story-layout">
            <PhotoSlot label="華兒園園所故事" detail={`正式設立於${site.establishedRoc}`} className="portrait-slot" />
            <div><p className="eyebrow">OUR STORY</p><h2>安全第一的選擇<br />走成每天的日常</h2><p className="large-copy">華兒園於民國 94 年 5 月創立。艾利颱風後，負責人林錦惠以安全為第一原則，選擇遷至三和路現址，持續以園所宗旨與目標服務鄰里家庭。</p><div className="timeline-placeholder"><div><time>民國 94 年</time><p>5 月 27 日正式設立，開始在三重陪伴幼兒與家庭。</p></div><div><time>遷至現址</time><p>颱風後重新檢視環境，以安全為首要原則選擇現址。</p></div><div><time>現在</time><p>核定幼兒園 48 人、國小課後照顧 13 人，延續在地照顧。</p></div></div></div>
          </div>
        </section>

        <section className="section team-section toy-section toy-rainbow" id="team">
          <div className="container">
            <SectionHeading eyebrow="OUR TEAM" title="資格園內公開｜個資網站守好" description="園內展示教保人員學歷與資格證書；網站僅提供家長判斷所需資訊，不公開證號、生日與證件照片。" />
            <div className="team-grid">
              {["園長／負責人", "幼兒園教師", "幼兒園教保員", "安親課後老師"].map((role) => <article key={role}><PhotoSlot label={role} detail="人員形象照取得授權後更新" /><div><StatusBadge>資格證書園內公開展示</StatusBadge><h3>{role}</h3><p>現職名單與教保資格，以園方及主管機關最新資料為準。</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="section public-section toy-section toy-shapes" id="public-info">
          <div className="container">
            <SectionHeading eyebrow="PUBLIC INFORMATION" title="資料逐項公開｜選擇更有依據" description="園所立案與基本資料逐項公開，並依主管機關最新公告持續更新。" />
            <div className="public-info-layout">
              <dl className="data-table">
                <div><dt>園所全名</dt><dd>{site.fullName}</dd></div>
                <div><dt>設立別</dt><dd>私立</dd></div>
                <div><dt>正式設立</dt><dd>{site.establishedRoc}（西元 {site.establishedYear} 年）</dd></div>
                <div><dt>負責人</dt><dd>林錦惠</dd></div>
                <div><dt>核定人數</dt><dd>共 {site.totalCapacity}：幼兒園 {site.preschoolCapacity}、國小課後照顧 {site.afterSchoolCapacity}</dd></div>
                <div><dt>使用樓層／面積</dt><dd>{site.floor}・室內 {site.indoorArea}</dd></div>
                <div><dt>專用車輛</dt><dd>0 輛</dd></div>
                <div><dt>地址</dt><dd><a className="inline-map-link" href={site.mapsHref} target="_blank" rel="noreferrer"><span className="location-pin" aria-hidden="true" /><span>{site.address}<small>{site.locationLandmark}｜{site.locationRoadNote}</small></span></a></dd></div>
                <div><dt>電話</dt><dd>{site.phoneDisplay}</dd></div>
                <div><dt>許可文號</dt><dd>{site.permitDocumentNumber}</dd></div>
                <div><dt>師生比／現有招生</dt><dd><StatusBadge>待園方提供</StatusBadge></dd></div>
                <div><dt>保險資訊</dt><dd><StatusBadge>待園方提供</StatusBadge></dd></div>
                <div><dt>收退費辦法</dt><dd><StatusBadge>115 學年度正式版本確認中</StatusBadge></dd></div>
                              </dl>
              <aside className="source-note"><span>資料說明</span><h3>以園方正式文件為準</h3><p>本頁資料依立案證書與主管機關公告陸續核對更新；招生名額與服務內容以園方最新公告為準，實際收費金額以現場詢問為主。</p></aside>
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
