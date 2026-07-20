type SentenceTextProps = {
  text: string;
  className?: string;
};

function splitSentences(text: string) {
  return text.match(/[^。！？]+[。！？]?/g)?.map((sentence) => sentence.trim()).filter(Boolean) ?? [text];
}

export function SentenceText({ text, className = "" }: SentenceTextProps) {
  return (
    <p className={`sentence-copy ${className}`.trim()}>
      {splitSentences(text).map((sentence) => <span key={sentence}>{sentence}</span>)}
    </p>
  );
}
