import Link from "next/link";
import Image from "next/image";
import { PhotoSlot } from "@/components/photo-slot";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";
import { SentenceText } from "@/components/sentence-text";
import { ContactIcon } from "@/components/contact-icon";
import { schoolFacts, site } from "@/lib/site-data";

const paths = [
  {
    number: "01",
    label: "PRESCHOOL",
    title: "幼兒園",
    text: "從幼幼班到大班。課程、作息、餐點與入學資訊，一次看懂。",
    href: "/preschool",
    color: "sage",
  },
  {
    number: "02",
    label: "AFTER SCHOOL",
    title: "安親課後",
    text: "接送、作業、點心、活動與寒暑假安排。重要資訊一次說清楚。",
    href: "/after-school",
    color: "clay",
  },
];

const parentQuestions = [
  { number: "01", label: "日程", title: "一天怎麼過？", text: "從入園、探索、用餐、午休到離園，依時間看完整作息。", href: "/preschool#daily-rhythm" },
  { number: "02", label: "環境", title: "安全怎麼做？", text: "教室動線、門禁、消防與緊急處理，都列出查核重點。", href: "/campus#safety" },
  { number: "03", label: "費用", title: "費用包含什麼？", text: "註冊、月費、代辦、補助與退費方式，逐項整理。", href: "/admissions#fees" },
];

const homeSchedule = [
  { time: "07:30", title: "入園與早餐", note: "晨間安頓・準備一天", image: "/images/toys/cutouts/jigsaw.png" },
  { time: "09:00", title: "單元與學習區", note: "依班級進度探索與操作", image: "/images/toys/cutouts/pink-tower.png" },
  { time: "10:00", title: "大肌肉活動", note: "依單元輪流使用滑梯室", image: "/images/toys/cutouts/rainbow.png" },
  { time: "11:40", title: "午餐與午休", note: "午休時段 13:00–14:30", image: "/images/toys/cutouts/color-tablets.png" },
  { time: "15:00", title: "點心與綜合活動", note: "操作、分享互動與本土語", image: "/images/toys/cutouts/tangram-bird.png" },
  { time: "16:30", title: "整理與離園", note: "18:30 後為延托時段", image: "/images/toys/cutouts/brown-stair.png" },
];

const dailyRecords = [
  { number: "01", title: "本月餐點", text: "每週菜單、過敏原與食材說明", href: "/parents#meals", image: "/images/toys/cutouts/color-tablets.png" },
  { number: "02", title: "行事與消息", text: "活動、放假與招生公告", href: "/parents#calendar", image: "/images/toys/cutouts/jigsaw.png" },
  { number: "03", title: "認識老師", text: "照片、資格、年資與教學專長", href: "/about#team", image: "/images/toys/cutouts/pink-tower.png" },
  { number: "04", title: "成長相簿", text: "歷屆畢業與活動影像", href: "/campus#alumni", image: "/images/toys/cutouts/rainbow.png" },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">HUA-ER-YUAN · SANCHONG</p>
            <h1>好好玩<br />慢慢長</h1>
            <SentenceText className="hero-lead" text="兩歲專班、幼兒園、國小課後照顧。日程、環境、費用，一頁看清楚。" />
            <div className="button-row">
              <Link className="button" href="/admissions#visit-form">預約參觀</Link>
              <a className="button button-call button-with-icon" href={site.phoneHref}><ContactIcon type="phone" />立即致電</a>
            </div>
            <div className="hero-contact">
              <a href={site.lineHref} target="_blank" rel="noreferrer"><b>LINE</b> 加好友直接詢問 <span aria-hidden="true">↗</span></a>
              <Link href="/campus">看真實校園紀錄 <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="hero-visual">
            <figure className="hero-real-photo">
              <Image
                src="/images/hero-learning-space.jpg"
                alt="溫暖自然的幼兒學習空間概念主視覺，桌上有繪本、木積木、蠟筆與綠色植物"
                fill
                unoptimized
                priority
                sizes="(max-width: 780px) calc(100vw - 30px), 54vw"
              />
              <figcaption className="media-caption">品牌概念主視覺｜實際園所環境請見校園日常</figcaption>
            </figure>
            <div className="hero-stamp" aria-hidden="true"><span>AGES</span><strong>2–6</strong><small>＋課後照顧</small></div>
            <div className="hero-caption"><span>2005</span><div><strong>創立</strong><small>三重在地陪伴</small></div></div>
          </div>
        </div>
      </section>

      <section className="fact-strip" aria-label="園所基本資料">
        <div className="container fact-grid">
          {schoolFacts.map((fact) => (
            <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>
          ))}
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <SectionHeading eyebrow="TWO PATHS, ONE CARE" title="從幼兒園到課後｜陪伴一路不間斷" description="家有幼兒，或需要國小課後照顧，都能直接找到合適資訊。" />
          <div className="path-grid">
            {paths.map((path) => (
              <Link className={`path-card path-${path.color}`} href={path.href} key={path.href}>
                <span className="path-number">{path.number}</span>
                <span className="path-label">{path.label}</span>
                <h3>{path.title}</h3>
                <SentenceText text={path.text} />
                <span className="path-link">完整了解 <b aria-hidden="true">↗</b></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container question-layout">
          <SectionHeading eyebrow="BEFORE YOU ASK" title="在詢問前｜我們準備好了" description="日程、環境、費用，是家長最常詢問的重點。我們先整理好，讓您查看更輕鬆。" />
          <div className="question-list">
            {parentQuestions.map((item) => (
              <Link href={item.href} className="question-row" key={item.number}>
                <span className="question-index"><b>{item.number}</b><em>{item.label}</em></span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <b aria-hidden="true">→</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-intro">
          <div>
            <p className="eyebrow">A DAY AT HUA-ER-YUAN</p>
            <h2>晨間有問候<br />離園有分享</h2>
          </div>
          <SentenceText text="依園方正式作息表，從 07:30 入園到離園與延托，每個時段都有清楚安排；課程活動會依孩子的學習興趣彈性調整。" />
        </div>
        <div className="container daily-notebook home-daily-notebook" aria-label="入園的一天流程">
          <span className="notebook-tape" aria-hidden="true" />
          <div className="notebook-heading">
            <div><span>HUAERYUAN · DAILY NOTE</span><strong>入園的一天</strong></div>
            <em>平日作息</em>
          </div>
          <ol className="daily-flow home-daily-flow">
            {homeSchedule.map((item, index) => (
              <li key={item.time}>
                <span className="flow-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="daily-illustration" aria-hidden="true"><img src={item.image} alt="" /></span>
                <time>{item.time}</time>
                <div><strong>{item.title}</strong><span>{item.note}</span></div>
              </li>
            ))}
          </ol>
          <div className="notebook-footer home-notebook-footer"><span aria-hidden="true">✿</span><Link className="text-link" href="/preschool#daily-rhythm">查看完整一日作息 <span aria-hidden="true">→</span></Link></div>
          <span className="notebook-sticker" aria-hidden="true"><img src="/images/toys/cutouts/rainbow.png" alt="" /></span>
        </div>
      </section>

      <section className="section campus-preview">
        <div className="container">
          <div className="split-intro">
            <div><p className="eyebrow">SEE THE REAL PLACE</p><h2>空間看得見<br />照顧更放心</h2></div>
            <SentenceText text="實拍教室、活動動線、門禁與安全設備。每張照片都會附上用途說明。" />
          </div>
          <div className="photo-grid">
            <PhotoSlot label="教室全景" className="photo-wide" />
            <PhotoSlot label="閱讀與角落學習" />
            <figure className="home-campus-real">
              <Image src="/images/graduation-30-masked.jpg" alt="華兒園第30屆畢業典禮校園紀錄" fill unoptimized sizes="(max-width: 780px) calc(100vw - 30px), 32vw" />
              <figcaption className="media-caption">第 30 屆畢業典禮紀錄</figcaption>
            </figure>
          </div>
          <div className="section-link"><Link className="text-link" href="/campus">查看校園環境與安全資訊 <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section records-section">
        <div className="container">
          <SectionHeading eyebrow="GROWTH ARCHIVE" title="每天有紀錄｜成長看得見" description="餐點、活動、師資與畢業照片，按日期與主題整理。" />
          <div className="record-grid">
            {dailyRecords.map((record) => (
              <Link href={record.href} key={record.href}>
                <span className="record-card-head">
                  <span className="record-number">{record.number}</span>
                  <span className="record-icon" aria-hidden="true"><img src={record.image} alt="" /></span>
                </span>
                <h3>{record.title}</h3>
                <p>{record.text}</p>
                <StatusBadge />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section info-section">
        <div className="container info-grid">
          <div>
            <p className="eyebrow">PUBLIC INFORMATION</p>
            <h2>資料清楚<br />選擇踏實</h2>
            <SentenceText text="園名、地址、電話與立案資料。收退費及安全資訊，逐項核對、清楚公開。" />
            <Link className="button button-dark" href="/about#public-info">查看公開資訊欄位</Link>
          </div>
          <dl className="public-preview">
            <div><dt>園所全名</dt><dd>{site.fullName}</dd></div>
            <div><dt>正式設立</dt><dd>{site.establishedRoc}（西元 {site.establishedYear} 年）</dd></div>
            <div><dt>核定招收</dt><dd>幼兒園 {site.preschoolCapacity}・課後照顧 {site.afterSchoolCapacity}</dd></div>
            <div><dt>許可文號</dt><dd>{site.permitDocumentNumber}</dd></div>
            <div><dt>園所地址</dt><dd><a className="inline-map-link" href={site.mapsHref} target="_blank" rel="noreferrer"><span className="location-pin" aria-hidden="true" /><span>{site.address}<small>{site.locationLandmark}｜{site.locationRoadNote}</small></span></a></dd></div>
            <div><dt>招生電話</dt><dd>{site.phoneDisplay}</dd></div>
            <div><dt>資料狀態</dt><dd><StatusBadge>依園方公告持續更新</StatusBadge></dd></div>
          </dl>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div><p className="eyebrow">QUICK ANSWERS</p><h2>常見問題</h2></div>
          <div className="faq-list">
            <details><summary>目前可以預約參觀嗎？</summary><p>可以。歡迎來電預約，或使用線上表單整理需求後，加園長 LINE 傳送，也可用簡訊聯絡。</p></details>
            <details><summary>幼兒園招收哪些年齡？</summary><p>幼幼班、小班、中班與大班的名額、出生年月對照，將依每學年度核定招生簡章補上。</p></details>
            <details><summary>安親班有提供接送嗎？</summary><p>接送學校、方式與範圍待園方確認；確認後會連同交接流程與費用公開。</p></details>
            <details><summary>收費與退費怎麼計算？</summary><p>115 學年度資料仍在確認正式版本，網站不先刊登未定金額；實際金額以現場詢問為主，歡迎來電或加園長 LINE 索取園方最新版收退費說明。</p></details>
          </div>
        </div>
      </section>

    </>
  );
}
