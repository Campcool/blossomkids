type PhotoSlotProps = {
  label: string;
  detail?: string;
  className?: string;
};

export function PhotoSlot({ label, detail = "實拍照片候補", className = "" }: PhotoSlotProps) {
  return (
    <div
      className={`photo-slot maintenance-slot ${className}`.trim()}
      role="img"
      aria-label={`${label}，${detail}，內容維護中`}
    >
      <span className="maintenance-visual" aria-hidden="true">
        <svg viewBox="0 0 120 88" focusable="false">
          <path className="maintenance-ground" d="M16 72h88" />
          <path className="maintenance-card" d="M31 20h58v47H31z" />
          <path className="maintenance-line" d="M42 34h36M42 44h23" />
          <g className="maintenance-gear">
            <circle cx="78" cy="57" r="13" />
            <circle cx="78" cy="57" r="4" />
            <path d="M78 39v5M78 70v5M60 57h5M91 57h5M65 44l4 4M87 66l4 4M91 44l-4 4M69 66l-4 4" />
          </g>
          <path className="maintenance-tool" d="M29 65l18-18m-2-7 7 7-7 7-7-7z" />
        </svg>
        <span className="maintenance-pulse">調整中</span>
      </span>
      <span className="maintenance-label"><i aria-hidden="true" />內容維護中</span>
      <strong>{label}</strong>
      <small>{detail}</small>
    </div>
  );
}

