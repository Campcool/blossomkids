import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";

export const metadata: Metadata = { title: "家長專區", description: "華兒園家長公告、行事曆、菜單、常用文件、聯絡方式與隱私說明。" };

export default function ParentsPage() {
  return (
    <>
      <PageHero eyebrow="FOR FAMILIES" title="消息不漏接｜資料隨手找" description="菜單、行事曆、園務公告與常用文件，都集中在同一頁。" note="公開頁面不刊登孩子姓名、健康、出缺席與個別學習紀錄。" />
      <div id="page-content">
        <section className="section updates-section toy-section toy-rainbow" id="calendar">
          <div className="container">
            <SectionHeading eyebrow="LATEST UPDATES" title="本月重點｜一眼看清楚" description="招生、放假、親師活動與校園紀錄，按日期排列。" />
            <div className="notice-grid">
              <article className="notice-feature"><span>招生資訊</span><time>日期待補</time><h3>最新學年度招生與參觀日</h3><p>簡章、招生年齡、名額與參觀場次由園方確認後發布。</p><StatusBadge /></article>
              <article><span>園務公告</span><time>日期待補</time><h3>學期行事曆</h3><p>開學、放假、親師活動與重要日程。</p><StatusBadge /></article>
              <article><span>活動紀錄</span><time>日期待補</time><h3>本月校園活動</h3><p>活動內容、照片與家長注意事項。</p><StatusBadge /></article>
            </div>
          </div>
        </section>

        <section className="section meal-page toy-section toy-tablets" id="meals">
          <div className="container">
            <SectionHeading eyebrow="MONTHLY MENU" title="每日餐點｜一週清楚掌握" description="上午點心、午餐、下午點心與過敏原逐日列出；安親晚餐另列。" />
            <div className="monthly-menu">
              <div className="menu-controls"><button type="button" disabled>← 上個月</button><strong>月份待選</strong><button type="button" disabled>下個月 →</button></div>
              <div className="menu-week"><span>星期一</span><span>星期二</span><span>星期三</span><span>星期四</span><span>星期五</span></div>
              <div className="menu-empty"><strong>菜單資料候補中</strong><p>可提供 PDF 與手機文字版，方便下載或直接查看。</p><StatusBadge>歷史月份可保留</StatusBadge></div>
              <div className="menu-meta"><span>食材供應：待補</span><span>餐點製備：待補</span><span>過敏原說明：待補</span></div>
            </div>
          </div>
        </section>

        <section className="section soft-section documents-section toy-section toy-shapes">
          <div className="container">
            <SectionHeading eyebrow="DOWNLOADS" title="常用文件｜需要時立即找到" description="行事曆、家長手冊、託藥單與接送申請，都標示日期與版本。" />
            <div className="download-list">
              {[
                ["學期行事曆", "PDF・日期待補"], ["新生入園準備清單", "PDF・日期待補"], ["家長手冊", "PDF・版本待補"], ["託藥單", "PDF・版本待補"], ["接送人變更申請", "PDF・版本待補"], ["收退費辦法", "PDF・學年度待補"],
              ].map(([title, meta]) => <div key={title}><span className="file-mark">文件</span><div><h3>{title}</h3><p>{meta}</p></div><StatusBadge>尚未上傳</StatusBadge></div>)}
            </div>
          </div>
        </section>

        <section className="section privacy-section toy-section toy-cylinders">
          <div className="container info-grid compact-info">
            <div><p className="eyebrow">PRIVACY & COMMUNICATION</p><h2>公開資訊清楚<br />個人資料守好</h2><p>健康、出缺席、學習紀錄與聯絡簿，只在園方指定的個別管道傳送。</p></div>
            <div className="policy-list"><div><strong>一般公告</strong><p>官網與園方正式社群</p></div><div><strong>個別聯繫</strong><p>電話或園方指定系統待補</p></div><div><strong>照片使用</strong><p>書面授權、可撤回與下架流程</p></div><div><strong>資料保存</strong><p>期限、用途與刪除方式待補</p></div></div>
          </div>
        </section>
      </div>
    </>
  );
}
