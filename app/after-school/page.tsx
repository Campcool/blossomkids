import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";

export const metadata: Metadata = { title: "安親課後照顧", description: "華兒園安親班與課後照顧的接送、作業、活動、供餐與寒暑假服務欄位。" };

const serviceItems = [
  ["安心交接", "接送學校、方式、點名與未到班通知，逐項說明。"],
  ["作業陪伴", "說清楚作業檢查、訂正與閱讀安排，讓家長掌握進度。"],
  ["生活照顧", "點心、晚餐、休息、託藥與臨時狀況，都有固定流程。"],
  ["多元活動", "才藝、主題、戶外與自由活動，會公布實際時段與比例。"],
];

export default function AfterSchoolPage() {
  return (
    <>
      <PageHero eyebrow="AFTER SCHOOL · ELEMENTARY" title="放學有人接｜課後有人陪" description="從放學接送、點名，到作業、點心、活動和接回時間，每一步都說清楚。" note="正式立案名稱、招收年級與服務內容，將依園方證照確認。" />
      <div id="page-content">
        <section className="section after-priorities toy-section toy-stair">
          <div className="container">
            <SectionHeading eyebrow="WHAT WE CARE ABOUT" title="接送、作業、餐點、活動" description="四件事逐項公開，家長不用猜。" />
            <div className="feature-grid">
              {serviceItems.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p><StatusBadge>流程待園方確認</StatusBadge></article>)}
            </div>
          </div>
        </section>

        <section className="section after-schedule toy-section toy-beads">
          <div className="container content-split">
            <div><p className="eyebrow">AFTER-SCHOOL RHYTHM</p><h2>先安頓身心<br />再從容完成</h2><p className="large-copy">從接到孩子、點心緩衝、完成作業到家長接回，按時間排列。</p></div>
            <div className="vertical-timeline">
              <div><time>放學</time><h3>接送與點名</h3><p>接送學校、方式與安全交接待補。</p></div>
              <div><time>抵達後</time><h3>點心與緩衝</h3><p>先安頓身心，再進入課後任務。</p></div>
              <div><time>核心時段</time><h3>作業與複習</h3><p>年級分組、師生比與訂正流程待補。</p></div>
              <div><time>完成後</time><h3>閱讀／多元活動</h3><p>活動課表與師資待補。</p></div>
              <div><time>離班</time><h3>晚餐與家長交接</h3><p>供餐及最晚接回時間待補。</p></div>
            </div>
          </div>
        </section>

        <section className="section soft-section programs-section toy-section toy-shapes">
          <div className="container">
            <SectionHeading eyebrow="PROGRAMS" title="服務逐項整理｜安排一目了然" description="招收年級、時間、費用與師資；尚未確認的內容直接標示待補。" />
            <div className="program-table">
              <div className="program-head"><span>項目</span><span>需說明內容</span><span>目前狀態</span></div>
              <div><strong>平日安親</strong><p>招收年級、時段、作業輔導、師生比</p><StatusBadge /></div>
              <div><strong>接送服務</strong><p>服務學校、接送方式、安全交接、費用</p><StatusBadge /></div>
              <div><strong>供餐</strong><p>點心／晚餐、菜單、過敏原、供餐方式</p><StatusBadge /></div>
              <div><strong>才藝活動</strong><p>項目、上課日、授課老師、是否另收費</p><StatusBadge /></div>
              <div><strong>寒暑假班</strong><p>期間、每日作息、戶外活動、收費</p><StatusBadge /></div>
            </div>
          </div>
        </section>

        <section className="section handoff-section toy-section toy-jigsaw">
          <div className="container info-grid compact-info">
            <div><p className="eyebrow">SAFETY HANDOFF</p><h2>交接有流程<br />接送更安心</h2><p>公開接送方式、點名通知、代理接送人與最晚接回時間。</p></div>
            <dl className="public-preview"><div><dt>專用車輛</dt><dd>公開索引顯示 0 輛</dd></div><div><dt>接送學校</dt><dd><StatusBadge /></dd></div><div><dt>點名通知</dt><dd><StatusBadge /></dd></div><div><dt>最晚接回</dt><dd><StatusBadge /></dd></div></dl>
          </div>
        </section>
      </div>
    </>
  );
}
