import Link from "next/link";
import Image from "next/image";
import { schoolContentVisibility } from "@/lib/content-visibility";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";
import { SentenceText } from "@/components/sentence-text";
import { SectionNav } from "@/components/section-nav";
import { LearningThemes } from "@/components/learning-themes";
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
  { title: "本月餐點", text: "每週菜單、過敏原與食材說明", href: "/parents#meals", image: "/images/toys/cutouts/color-tablets.png" },
  { title: "行事與消息", text: "活動、放假與招生公告", href: "/parents#calendar", image: "/images/toys/cutouts/jigsaw.png" },
  { title: "認識老師", text: "照片、資格、年資與教學專長", href: "/about#team", image: "/images/toys/cutouts/pink-tower.png" },
  { title: "成長相簿", text: "已公開的畢業影像紀錄", href: "/campus#alumni", image: "/images/toys/cutouts/rainbow.png" },
].filter((record) => record.href !== "/about#team" || schoolContentVisibility.teacherProfiles);

export default function Home() {
  return (
    <>
      <section className="home-hero storybook-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="hero-place">三重・華兒園精緻幼兒園</p>
            <h1>好好玩<br /><span>慢慢長</span></h1>
            <p className="hero-intro">把每一天，過成充滿發現的小冒險。</p>
            <SentenceText className="hero-lead" text="兩歲專班、幼兒園、國小課後照顧。日程、環境、費用，一頁看清楚。" />
            <div className="button-row">
              <Link className="button" href="/admissions#visit-form">一起來看看華兒園 <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="/preschool">認識幼兒園 <span aria-hidden="true">→</span></Link>
            </div>
            <a className="hero-location" href={site.mapsHref} target="_blank" rel="noreferrer"><span className="location-pin" aria-hidden="true" />{site.locationLandmark}・{site.address}</a>
          </div>
          <div className="hero-visual">
            <figure className="storybook-art">
              <Image src="/images/themes/paper-garden.webp" alt="紙藝繪本化成小花園，小鳥、嫩芽、積木與畫筆陪伴孩子探索世界" width={1440} height={960} priority sizes="(max-width: 780px) 100vw, 58vw" />
              <figcaption>從一個「為什麼」，開始認識世界。<small>品牌主題插畫・非園所實景</small></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <SectionNav items={[{ href: "#choose-path", label: "班別與服務" }, { href: "#learning-themes", label: "探索與學習" }, { href: "#home-rhythm", label: "一日作息" }, { href: "#parent-questions", label: "家長常問" }]} />

      <section className="fact-strip" aria-label="園所基本資料">
        <div className="container fact-grid">
          {schoolFacts.map((fact) => (
            <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>
          ))}
        </div>
      </section>

      <section className="section services-section" id="choose-path">
        <div className="container">
          <SectionHeading eyebrow="TWO PATHS, ONE CARE" title="每個階段｜都有剛剛好的陪伴" description="家有幼兒，或需要國小課後照顧，都能直接找到合適資訊。" />
          <div className="path-grid">
            {paths.map((path) => (
              <Link className={`path-card path-${path.color}`} href={path.href} key={path.href}>
                <Image className="path-material" src={path.color === "sage" ? "/images/toys/cutouts/pink-tower.png" : "/images/toys/cutouts/brown-stair.png"} alt="" width={156} height={156} />
                <span className="path-label">{path.color === "sage" ? "幼幼班・小班・中班・大班" : "國小階段的放學時光"}</span>
                <h3>{path.title}</h3>
                <SentenceText text={path.text} />
                <span className="path-link">完整了解 <b aria-hidden="true">↗</b></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LearningThemes />

      <section className="section soft-section parent-priorities">
        <div className="container question-layout">
          <SectionHeading eyebrow="BEFORE YOU ASK" title="你在意的事｜我們一起了解" description="日程、環境、費用，是家長最常詢問的重點。我們先整理好，讓您查看更輕鬆。" />
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

      <section className="section home-rhythm-section" id="home-rhythm">
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
                <span className="daily-illustration" aria-hidden="true"><Image src={item.image} alt="" width={72} height={72} /></span>
                <time>{item.time}</time>
                <div><strong>{item.title}</strong><span>{item.note}</span></div>
              </li>
            ))}
          </ol>
          <div className="notebook-footer home-notebook-footer"><span aria-hidden="true">✿</span><Link className="text-link" href="/preschool#daily-rhythm">查看完整一日作息 <span aria-hidden="true">→</span></Link></div>
          <span className="notebook-sticker" aria-hidden="true"><Image src="/images/toys/cutouts/rainbow.png" alt="" width={96} height={96} /></span>
        </div>
      </section>

      <section className="section campus-preview">
        <div className="container">
          <div className="split-intro">
            <div><p className="eyebrow">SEE THE REAL PLACE</p><h2>校園有紀錄<br />日常看得見</h2></div>
            <SentenceText text="從生活照顧的設備實拍，到已公開的畢業紀錄，認識華兒園的日常。" />
          </div>
          <div className="photo-grid photo-grid-single">
            <figure className="home-campus-real">
              <Image src="/images/graduation-30-masked.jpg" alt="華兒園第30屆畢業典禮校園紀錄" fill unoptimized sizes="(max-width: 780px) calc(100vw - 36px), 760px" />
              <figcaption className="media-caption">第 30 屆畢業典禮紀錄</figcaption>
            </figure>
          </div>
          <div className="section-link"><Link className="text-link" href="/campus">查看校園環境與安全資訊 <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section records-section">
        <div className="container">
          <SectionHeading eyebrow="GROWTH ARCHIVE" title="每天有紀錄｜成長看得見" description={schoolContentVisibility.teacherProfiles ? "餐點、活動、師資與畢業照片，按日期與主題整理。" : "餐點、行事消息與畢業紀錄，從這裡找到。"} />
          <div className="record-grid">
            {dailyRecords.map((record, index) => (
              <Link href={record.href} key={record.href}>
                <span className="record-card-head">
                  <span className="record-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="record-icon" aria-hidden="true"><Image src={record.image} alt="" width={72} height={72} /></span>
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

      <section className="section faq-section" id="parent-questions">
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
