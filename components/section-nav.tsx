type SectionNavProps = {
  items: ReadonlyArray<{ href: string; label: string }>;
};

/** Native anchors keep long pages useful before hydration and without JavaScript. */
export function SectionNav({ items }: SectionNavProps) {
  return (
    <nav className="reading-nav" aria-label="本頁段落">
      <div className="container reading-nav-inner">
        <span>想先了解</span>
        <ul>{items.map((item) => <li key={item.href}><a href={item.href}>{item.label}<span aria-hidden="true">↓</span></a></li>)}</ul>
      </div>
    </nav>
  );
}
