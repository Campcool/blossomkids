type PhotoSlotProps = {
  label: string;
  detail?: string;
  className?: string;
};

export function PhotoSlot({ label, detail = "實拍照片候補", className = "" }: PhotoSlotProps) {
  return (
    <div className={`photo-slot ${className}`.trim()} role="img" aria-label={`${label}，${detail}`}>
      <span className="photo-slot-number" aria-hidden="true">＋</span>
      <strong>{label}</strong>
      <small>{detail}</small>
    </div>
  );
}

