import Link from "next/link";
import { SentenceText } from "@/components/sentence-text";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  note?: string;
};

export function PageHero({ eyebrow, title, description, note }: PageHeroProps) {
  const titleLines = title.split("｜");

  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{titleLines.map((line) => <span className="slogan-line" key={line}>{line}</span>)}</h1>
          <SentenceText className="page-lead" text={description} />
          <div className="button-row">
            <Link className="button" href="/admissions#visit-form">預約參觀</Link>
            <a className="text-link" href="#page-content">直接看重點 <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="page-hero-panel" aria-label="頁面摘要">
          <span className="panel-index">本頁資訊</span>
          <SentenceText text={note ?? "尚待園方提供的內容，會清楚標示，不以想像填寫。"} />
        </div>
      </div>
    </section>
  );
}
