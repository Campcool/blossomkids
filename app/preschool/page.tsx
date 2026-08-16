import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { PhotoSlot } from "@/components/photo-slot";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";

export const metadata: Metadata = { title: "幼兒園課程", description: "華兒園幼幼班、小班、中班與大班課程、作息、餐點及學習紀錄欄位。" };

const ageGroups = [
  {
    name: "幼幼班",
    age: "2–3 歲",
    focus: "在安全依附中練習走、抓、穿、放，建立身體控制與生活自理。",
    activities: ["大肌肉遊戲", "小肌肉操作", "生活自理"],
    image: "/images/curriculum/toddler-motor-play.webp",
    alt: "幼幼班孩子走低階軟墊並串大木珠，進行大肌肉與小肌肉活動",
  },
  {
    name: "小班",
    age: "3–4 歲",
    focus: "跟著節奏唱歌、跳舞與遊戲，練習表達、模仿和團體互動。",
    activities: ["音樂律動", "唱歌跳舞", "遊戲表達"],
    image: "/images/curriculum/small-music-movement.webp",
    alt: "小班孩子使用手鼓、沙鈴和彩帶唱歌跳舞",
  },
  {
    name: "中班",
    age: "4–5 歲",
    focus: "透過教具操作、感官比較與合作任務，發現規律並解決問題。",
    activities: ["啟蒙教具", "感官探索", "合作任務"],
    image: "/images/curriculum/middle-material-exploration.webp",
    alt: "中班孩子合作操作啟蒙教具與幾何教具",
  },
  {
    name: "大班",
    age: "5–6 歲",
    focus: "透過生活遊戲、圖像配對與任務規劃，練習專注、表達與自理，從容銜接小學生活。",
    activities: ["生活遊戲", "圖像配對", "入小準備"],
    image: "/images/curriculum/senior-literacy-play.webp",
    alt: "大班孩子操作圖像配對卡與啟蒙教具",
  },
];

const schedule = [
  { time: "07:30–09:00", title: "幼兒入園與早餐", note: "晨間安頓，準備展開一天", image: "/images/toys/cutouts/jigsaw.png" },
  { time: "09:00–10:00", title: "單元活動／學習區探索", note: "依班級課程與孩子興趣安排", image: "/images/toys/cutouts/pink-tower.png" },
  { time: "10:00–11:30", title: "大肌肉活動", note: "依單元進度輪流使用滑梯室", image: "/images/toys/cutouts/rainbow.png" },
  { time: "11:30–12:30", title: "補水與午餐", note: "11:30 補水，11:40 開始午餐", image: "/images/toys/cutouts/color-tablets.png" },
  { time: "12:30–13:00", title: "午休前準備", note: "刷牙、整理與環境整潔", image: "/images/toys/cutouts/pink-tower.png" },
  { time: "13:00–14:30", title: "午休時間", note: "三歲以上幼兒午休不超過 90 分鐘", image: "/images/toys/cutouts/brown-stair.png" },
  { time: "14:30–15:00", title: "起床與自理", note: "整理寢具、穿衣與生活自理", image: "/images/toys/cutouts/tangram-bird.png" },
  { time: "15:00–15:40", title: "點心時間", note: "補充體力，準備午後互動", image: "/images/toys/cutouts/color-tablets.png" },
  { time: "15:40–16:30", title: "綜合時間", note: "小肌肉活動、分享互動與本土語", image: "/images/toys/cutouts/jigsaw.png" },
  { time: "16:30–18:29", title: "整理書包與離園", note: "與家長安心交接一天", image: "/images/toys/cutouts/brown-stair.png" },
  { time: "18:30 起", title: "延托時段", note: "延托安排請向園方確認", image: "/images/toys/cutouts/rainbow.png" },
];

export default function PreschoolPage() {
  return (
    <>
      <PageHero eyebrow="PRESCHOOL · 2–6" title="好好玩｜慢慢長" description="幼幼班到大班：班別、學習重點、正式一日作息與餐點資訊，都在這裡。" note="活動時間會依幼童學習興趣微調；餐點與午休維持固定照顧節奏。" />
      <div id="page-content">
        <section className="section age-section toy-section toy-pink">
          <div className="container">
            <SectionHeading eyebrow="AGE GROUPS" title="年齡各有步調｜陪伴各有重點" description="幼幼、小、中、大班的年齡、學習重點與名額分開整理。" />
            <div className="age-grid">
              {ageGroups.map((group) => (
                <article className="age-card" key={group.name}>
                  <figure className="age-card-visual">
                    <Image src={group.image} alt={group.alt} fill unoptimized sizes="(max-width: 780px) calc(100vw - 28px), (max-width: 1050px) 46vw, 22vw" />
                  </figure>
                  <div className="age-card-body">
                    <small className="age-label">{group.age}</small>
                    <h3>{group.name}</h3>
                    <p>{group.focus}</p>
                    <div className="age-activity-tags" aria-label={`${group.name}課程重點`}>
                      {group.activities.map((activity) => <span key={activity}>{activity}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft-section learning-section toy-section toy-tangram">
          <div className="container content-split">
            <div>
              <p className="eyebrow">LEARNING THROUGH LIFE</p>
              <h2>從生活出發<br />在遊戲裡學習</h2>
              <p className="large-copy">從動作、語言、情緒、探索與創作出發，把學習放進每天的遊戲與生活。</p>
              <PhotoSlot label="孩子探索活動" detail="真實活動照片與教師觀察待補" className="content-photo" />
            </div>
            <div className="pillar-list">
              <article><span>01</span><div><h3>身體與動作</h3><p>肢體活動、健康習慣與自我照顧。</p></div></article>
              <article><span>02</span><div><h3>認知與探索</h3><p>從提問、操作與生活情境中發現答案。</p></div></article>
              <article><span>03</span><div><h3>語言與表達</h3><p>傾聽、敘說、閱讀與多元表達經驗。</p></div></article>
              <article><span>04</span><div><h3>社會與情緒</h3><p>理解自己、與人合作，也練習處理衝突。</p></div></article>
              <article><span>05</span><div><h3>美感與創造</h3><p>透過音樂、材料、戲劇與藝術自由創作。</p></div></article>
            </div>
          </div>
        </section>

        <section className="section daily-section toy-section toy-cylinders" id="daily-rhythm">
          <div className="container">
            <SectionHeading eyebrow="DAILY RHYTHM" title="入園的一天" description="從晨間相遇到安心離園，把一天的節奏清楚排給家長看。" />
            <div className="daily-notebook" aria-label="入園的一天示意流程">
              <span className="notebook-tape" aria-hidden="true" />
              <div className="notebook-heading">
                <div><span>HUAERYUAN · DAY PLAN</span><strong>今天，也好好長大。</strong></div>
                <em>正式作息</em>
              </div>
              <ol className="daily-flow">
                {schedule.map((item, index) => (
                  <li key={item.time}>
                    <span className="flow-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="daily-illustration" aria-hidden="true"><img src={item.image} alt="" /></span>
                    <time>{item.time}</time>
                    <div><strong>{item.title}</strong><span>{item.note}</span></div>
                  </li>
                ))}
              </ol>
              <div className="notebook-footer"><span aria-hidden="true">✎</span> 依 115 學年度全園幼兒作息表整理；班級活動會依課程與幼兒狀況調整。</div>
              <span className="notebook-sticker" aria-hidden="true"><img src="/images/toys/cutouts/rainbow.png" alt="" /></span>
            </div>
          </div>
        </section>

        <section className="section meal-feature toy-section toy-tablets">
          <div className="container meal-grid">
            <div>
              <p className="eyebrow">MEALS & CARE</p><h2>菜單看得懂<br />每一餐更安心</h2>
              <p>115 學年度餐點輪流表逐日列出上午點心、午餐、湯品、水果與下午點心，家長能清楚掌握孩子每天吃什麼。</p>
              <StatusBadge>115 學年度餐點輪流表已取得</StatusBadge>
            </div>
            <div className="menu-placeholder">
              <span>餐點照顧原則</span>
              <div><b>四類</b><p>每日涵蓋全穀雜糧、豆魚蛋肉、蔬菜與水果。</p></div>
              <div><b>國產</b><p>肉類採用國產豬、牛肉，於三和早市採買。</p></div>
              <div><b>間隔</b><p>點心與正餐供應時間至少間隔兩小時。</p></div>
              <div><b>餐具</b><p>園方提供的不鏽鋼餐具組，方便清潔與日常使用。</p></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
