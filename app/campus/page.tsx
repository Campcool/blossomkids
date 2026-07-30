import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { PhotoSlot } from "@/components/photo-slot";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";
import { site } from "@/lib/site-data";

export const metadata: Metadata = { title: "校園日常", description: "華兒園校園環境、安全設施、餐點日常、活動照片與畢業紀錄欄位。" };

const carePhotos = [
  { src: "/images/campus/bedding-storage.png", alt: "華兒園分格收納的幼兒棉被與寢具", caption: "分格寢具收納｜保持通風並依行事曆清洗" },
  { src: "/images/campus/stainless-tableware.jpg", alt: "華兒園提供的不鏽鋼餐碗、蓋子與湯匙", caption: "不鏽鋼餐具｜方便日常清潔與使用" },
  { src: "/images/campus/kitchen-screen-door.jpg", alt: "華兒園廚房出入口的防蟲紗門", caption: "廚房紗門｜降低病媒進入餐飲空間" },
  { src: "/images/campus/boiled-drinking-water.png", alt: "華兒園每日煮沸飲用水使用的鍋具", caption: "每日煮沸｜自然冷卻後提供溫開水" },
  { src: "/images/campus/wash-area.png", alt: "華兒園幼兒使用的洗手台與整潔走道", caption: "洗手與整潔｜走道保持乾燥通風" },
  { src: "/images/campus/toilet-partitions.png", alt: "華兒園幼兒廁所的分隔設計", caption: "幼兒廁所｜依使用需求分隔設計" },
];

export default function CampusPage() {
  return (
    <>
      <PageHero eyebrow="CAMPUS & EVERYDAY" title="環境看得見｜照顧更安心" description="園所位於 2 樓，以室內教室、學習區與大肌肉活動空間安排每天的生活與探索。" note="環境照片只使用不含孩子、證件與聯絡資料的安全畫面。" />
      <div id="page-content">
        <section className="section space-section toy-section toy-rainbow">
          <div className="container">
            <SectionHeading eyebrow="SPACE TOUR" title="室內空間怎麼用｜直接說清楚" description="正式立案室內面積 218.07 平方公尺；園內沒有樓梯、室外活動空間與固定式遊戲設施。" />
            <div className="campus-gallery">
              {carePhotos.map((photo) => (
                <figure className="campus-real-photo" key={photo.src}>
                  <Image src={photo.src} alt={photo.alt} fill unoptimized sizes="(max-width: 780px) calc(100vw - 30px), 32vw" />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
            <dl className="facility-facts" aria-label="園所空間基本資料">
              <div><dt>使用樓層</dt><dd>{site.floor}</dd></div>
              <div><dt>室內面積</dt><dd>{site.indoorArea}</dd></div>
              <div><dt>室外活動空間</dt><dd>0 平方公尺</dd></div>
              <div><dt>園內樓梯／固定遊具</dt><dd>無／無</dd></div>
            </dl>
          </div>
        </section>

        <section className="section safety-section toy-section toy-cylinders" id="safety">
          <div className="container">
            <SectionHeading eyebrow="SAFETY FIRST" title="設備有紀錄｜照顧有流程" description="依園方評鑑資料與 115 學年度家長手冊，整理家長真正需要知道的安全與衛生做法。" />
            <div className="safety-grid">
              <article><span>01</span><h3>設施設備檢核</h3><p>每學期至少自我檢核一次；需要修繕或汰換的項目持續留下追蹤紀錄。</p><StatusBadge>每學期執行</StatusBadge></article>
              <article><span>02</span><h3>消毒與寢具</h3><p>每學期至少一次全園消毒；棉被依行事曆約每兩週安排清洗。</p><StatusBadge>日期列入行事曆</StatusBadge></article>
              <article><span>03</span><h3>餐具與飲水</h3><p>使用不鏽鋼餐具；每日早晨煮沸飲用水，自然冷卻為溫開水後提供。</p><StatusBadge>日常照顧流程</StatusBadge></article>
              <article><span>04</span><h3>託藥與緊急通報</h3><p>託藥需有家長同意與託藥單；傷病、傳染病與責任通報皆有處理流程。</p><StatusBadge>需書面確認</StatusBadge></article>
            </div>
          </div>
        </section>

        <section className="section stories-section toy-section toy-shapes">
          <div className="container">
            <SectionHeading eyebrow="DAILY STORIES" title="一張照片｜一段成長故事" description="活動紀錄依學期、班級與主題整理，不只放照片。" />
            <div className="story-grid">
              {[["主題探索", "活動日期與班級待補"], ["節慶活動", "活動日期與班級待補"], ["戶外學習", "活動日期與地點待補"]].map(([title, detail]) => <article key={title}><PhotoSlot label={title} /><div><h3>{title}</h3><p>{detail}</p><StatusBadge>影像待授權</StatusBadge></div></article>)}
            </div>
          </div>
        </section>

        <section className="section alumni-section toy-section toy-tangram" id="alumni">
          <div className="container content-split">
            <div><p className="eyebrow">GROWING TOGETHER</p><h2>一屆一相簿<br />每段回憶有歸處</h2><p className="large-copy">畢業合照按學年度整理；僅刊登已取得書面授權的影像。</p><StatusBadge>正式公開前確認影像授權</StatusBadge></div>
            <div className="yearbook-grid">
              <figure className="yearbook-real-photo">
                <Image src="/images/graduation-30-masked.jpg" alt="華兒園第30屆畢業典禮合照" fill unoptimized sizes="(max-width: 780px) calc(100vw - 30px), 34vw" />
                <figcaption><strong>第 30 屆畢業典禮</strong><span>學年度與活動日期待補</span></figcaption>
              </figure>
              <PhotoSlot label="其他學年度" detail="畢業合照候補" />
              <PhotoSlot label="畢業回顧" detail="文章與照片候補" />
              <PhotoSlot label="更早年度" detail="檔案整理中" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
