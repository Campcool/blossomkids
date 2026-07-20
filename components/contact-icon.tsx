type ContactIconProps = {
  type: "phone" | "line" | "visit";
  className?: string;
};

export function ContactIcon({ type, className = "" }: ContactIconProps) {
  return (
    <span className={`contact-symbol contact-symbol-${type} ${className}`.trim()} aria-hidden="true">
      {type === "line" ? "LINE" : <i />}
    </span>
  );
}
