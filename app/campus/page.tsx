import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { PhotoSlot } from "@/components/photo-slot";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";

export const metadata: Metadata = { title: "校園日常", description: "華兒園校園環境、安全設施、餐點日常、活動照片與畢業紀錄欄位。" };

export default function CampusPage() {
  return (
    <>
      <PageHero eyebrow="CAMPUS & EVERYDAY" title="環境看得見｜照顧更安心" description="從入口、教室到活動區，逐一標示用途、動線、門禁與安全設備。" note="孩子照片須取得家長授權，並移除姓名與聯絡簿等個資。" />
      <div id="page-content">
        <section className="section space-section toy-section toy-rainbow">
          <div className="container">
            <SectionHeading eyebrow="SPACE TOUR" title="從入口到教室｜動線一目了然" description="每張實拍標示空間名稱、使用方式與安全設計。" />
            <div className="campus-gallery">
              <PhotoSlot label="入口與接送動線" className="gallery-large" />
              <PhotoSlot label="班級教室" />
              <PhotoSlot label="閱讀角落" />
              <PhotoSlot label="活動空間" />
              <PhotoSlot label="午休環境" />
              <PhotoSlot label="餐點與洗手區" className="gallery-wide" />
            </div>
          </div>
        </section>

        <section className="section safety-section toy-section toy-cylinders" id="safety">
          <div className="container">
            <SectionHeading eyebrow="SAFETY FIRST" title="設備有紀錄｜流程有依據" description="門禁、消防、清潔與緊急處理，都要補上設備、做法與檢查日期。" />
            <div className="safety-grid">
              <article><span>01</span><h3>門禁與接送</h3><p>入口管制、訪客登記、授權接送人與交接流程。</p><StatusBadge /></article>
              <article><span>02</span><h3>消防與避難</h3><p>消防檢修、逃生動線、避難演練日期與集合點。</p><StatusBadge /></article>
              <article><span>03</span><h3>健康與清潔</h3><p>清潔消毒、傳染病通報、用藥與臨時受傷處理。</p><StatusBadge /></article>
              <article><span>04</span><h3>保險與緊急聯絡</h3><p>幼兒團體保險、緊急就醫、家長通知與事故紀錄。</p><StatusBadge /></article>
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
                <Image src="/images/graduation-30.jpg" alt="華兒園第30屆畢業典禮合照" fill sizes="(max-width: 780px) calc(100vw - 30px), 34vw" />
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
