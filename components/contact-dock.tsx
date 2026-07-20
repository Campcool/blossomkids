import Link from "next/link";
import { site } from "@/lib/site-data";
import { ContactIcon } from "@/components/contact-icon";

export function ContactDock() {
  return (
    <nav className="contact-dock" aria-label="快速聯絡園所">
      <a className="dock-action dock-phone" href={site.phoneHref} aria-label={`立即致電 ${site.phoneDisplay}`}>
        <ContactIcon type="phone" className="dock-symbol" />
        <span className="dock-copy"><small>招生專線</small><strong>立即致電</strong></span>
      </a>
      <a className="dock-action dock-line" href={site.lineHref} target="_blank" rel="noreferrer" aria-label="開啟華兒園 LINE 熱點">
        <ContactIcon type="line" className="dock-symbol" />
        <span className="dock-copy"><small>線上聯絡</small><strong>LINE 熱點</strong></span>
      </a>
      <Link className="dock-action dock-visit" href="/admissions#visit-form">
        <ContactIcon type="visit" className="dock-symbol" />
        <span className="dock-copy"><small>到園了解</small><strong>預約參觀</strong></span>
      </Link>
    </nav>
  );
}
