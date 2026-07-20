import Link from "next/link";
import { site } from "@/lib/site-data";
import { SentenceText } from "@/components/sentence-text";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-contact-panel footer-invitation-map">
        <div className="footer-contact-copy">
          <p>VISIT &amp; TALK</p>
          <h2 className="major-section-title"><span>實際看看</span><span>再做打算</span></h2>
          <SentenceText className="footer-contact-note" text="華兒園誠摯邀請您帶小寶貝一同參觀。親自感受教室、活動與每天的溫暖陪伴。" />
          <a className="footer-invite-address" href={site.mapsHref} target="_blank" rel="noreferrer">
            <span className="location-pin" aria-hidden="true" />
            <span><strong>{site.address}</strong><small>{site.locationLandmark}｜{site.locationRoadNote}</small></span>
          </a>
        </div>
        <div className="footer-map-embed footer-map-feature">
          <iframe
            title="華兒園位置互動地圖"
            src={site.mapsEmbedHref}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <span>可拖曳、縮放查看周邊</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.fullName}</span>
        <span>立案、收費及服務內容以園方最新公告為準｜<Link href="/privacy">隱私權說明</Link></span>
      </div>
    </footer>
  );
}
