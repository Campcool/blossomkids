import Link from "next/link";
import { site } from "@/lib/site-data";
import { PlayfulPageMap } from "@/components/playful-page-map";
import { ContactIcon } from "@/components/contact-icon";

export function SiteHeader() {
  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>新北市三重區｜兩歲專班、幼兒園、國小課後照顧</span>
          <a href={site.mapsHref} target="_blank" rel="noreferrer"><span className="location-pin" aria-hidden="true" />{site.address} <b aria-hidden="true">↗</b></a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label={`${site.shortName}首頁`}>
            <span className="brand-copy">
              <strong className="brand-name" aria-label={site.shortName}>
                <span aria-hidden="true">華</span><span aria-hidden="true">兒</span><span aria-hidden="true">園</span>
              </strong>
              <small>{site.descriptor}</small>
            </span>
          </Link>

          <PlayfulPageMap />

          <div className="header-actions" aria-label="快速聯絡">
            <a className="header-contact header-call" href={site.phoneHref} aria-label={`立即致電 ${site.phoneDisplay}`}>
              <ContactIcon type="phone" className="header-action-mark" />
              <span className="header-action-copy"><small>招生專線</small><strong>2976-1536</strong></span>
            </a>
            <a className="header-contact header-line" href={site.lineHref} target="_blank" rel="noreferrer" aria-label="開啟華兒園 LINE 熱點"><ContactIcon type="line" /></a>
            <Link className="button button-small header-cta" href="/admissions#visit-form"><ContactIcon type="visit" />預約參觀</Link>
          </div>

          <div className="mobile-header-actions" aria-label="手機快速聯絡">
            <a className="mobile-head-action mobile-head-call" href={site.phoneHref} aria-label={`立即致電 ${site.phoneDisplay}`}>
              <ContactIcon type="phone" />
            </a>
            <a className="mobile-head-action mobile-head-line" href={site.lineHref} target="_blank" rel="noreferrer" aria-label="開啟華兒園 LINE 熱點">
              <ContactIcon type="line" />
            </a>
          </div>

        </div>
      </header>
    </>
  );
}
