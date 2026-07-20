import { SentenceText } from "@/components/sentence-text";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  const titleLines = title.split("｜");

  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="major-section-title">{titleLines.map((line) => <span className="slogan-line" key={line}>{line}</span>)}</h2>
      {description ? <SentenceText text={description} /> : null}
    </div>
  );
}

