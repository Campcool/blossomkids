export function StatusBadge({ children = "待補資料" }: { children?: React.ReactNode }) {
  return <span className="status-badge">{children}</span>;
}

