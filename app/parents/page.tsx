import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";

export const metadata: Metadata = { title: "家長專區", description: "華兒園家長公告、行事曆、菜單、常用文件、聯絡方式與隱私說明。" };

const menuPreview = [
  { day: "第 1 日", morning: "餛飩湯", lunch: "白飯、馬鈴薯佐雞肉、蝦仁炒蛋、時蔬、蘿蔔貢丸湯、水果", afternoon: "海帶芽毛豆粥" },
  { day: "第 2 日", morning: "銀魚粥", lunch: "地瓜飯、冬瓜佐豆干、番茄炒蛋、時蔬、味噌豆腐湯、水果", afternoon: "香菇米粉湯" },
  { day: "第 3 日", morning: "蘑菇濃湯", lunch: "白飯、滷豬肉豆干、三色炒蛋、時蔬、火鍋湯、水果", afternoon: "銀絲卷" },
  { day: "第 4 日", morning: "鮮肉細粉", lunch: "稀飯、黃瓜雞絲、炒豆包、時蔬、紫菜蛋花湯、水果", afternoon: "關東煮" },
  { day: "第 5 日", morning: "瘦肉粥", lunch: "蛋炒飯、玉米佐四色、豆芽炒火腿、時蔬、火鍋湯、水果", afternoon: "仙草粉條湯" },
];

export default function ParentsPage() {
  return (
    <>
      <PageHero eyebrow="FOR FAMILIES" title="消息不漏接｜資料隨手找" description="菜單、行事曆、園務公告與常用文件，都集中在同一頁。" note="公開頁面不刊登孩子姓名、健康、出缺席與個別學習紀錄。" />
      <div id="page-content">
        <section className="section updates-section toy-section toy-rainbow" id="calendar">
          <div className="container">
            <SectionHeading eyebrow="LATEST UPDATES" title="本月重點｜一眼看清楚" description="招生、放假、親師活動與校園紀錄，按日期排列。" />
            <div className="notice-grid">
              <article className="notice-feature"><span>開學資訊</span><time>2026.08.03</time><h3>115 學年度上學期開學</h3><p>8 月 3 日為註冊及開學日；最新名額與參觀安排請直接洽詢園方。</p><StatusBadge>115 上學期</StatusBadge></article>
              <article><span>健康照顧</span><time>2026.08.25</time><h3>發展檢測與視力檢查</h3><p>期初身高體重、幼兒發展檢測與視力檢查依行事曆安排。</p><StatusBadge>行事曆已取得</StatusBadge></article>
              <article><span>寢具清潔</span><time>每月公告</time><h3>棉被清洗日</h3><p>原則上約每兩週安排一次，實際日期請依園方當月通知準備。</p><StatusBadge>家長請留意通知</StatusBadge></article>
            </div>
          </div>
        </section>

        <section className="section meal-page toy-section toy-tablets" id="meals">
          <div className="container">
            <SectionHeading eyebrow="MONTHLY MENU" title="每日餐點｜一週清楚掌握" description="上午點心、午餐、下午點心與過敏原逐日列出；安親晚餐另列。" />
            <div className="monthly-menu">
              <div className="menu-controls"><span>上午點心</span><strong>115 學年度餐點輪流表・前 5 日預覽</strong><span>下午點心</span></div>
              <div className="menu-table-scroll">
                <table className="menu-preview">
                  <thead><tr><th scope="col">輪流日</th><th scope="col">上午點心</th><th scope="col">午餐</th><th scope="col">下午點心</th></tr></thead>
                  <tbody>
                    {menuPreview.map((meal) => <tr key={meal.day}><th scope="row">{meal.day}</th><td>{meal.morning}</td><td>{meal.lunch}</td><td>{meal.afternoon}</td></tr>)}
                  </tbody>
                </table>
              </div>
              <div className="menu-meta"><span>每日午餐含水果</span><span>肉類採用國產豬、牛肉</span><span>完整 23 日輪流表待正式版本確認</span></div>
            </div>
          </div>
        </section>

        <section className="section soft-section documents-section toy-section toy-shapes">
          <div className="container">
            <SectionHeading eyebrow="DOWNLOADS" title="常用文件｜需要時立即找到" description="行事曆、家長手冊、託藥單與接送申請，都標示日期與版本。" />
            <div className="download-list">
              {[
                ["學期行事曆", "115 上學期資料已取得", "正式版本確認中"],
                ["新生入園準備清單", "用品清單已取得", "內容核對中"],
                ["家長手冊", "115 上學期暫行版已取得", "正式版本確認中"],
                ["託藥單", "須配合家長同意書使用", "表單待上傳"],
                ["接送人變更申請", "園方指定流程", "表單待上傳"],
                ["收退費辦法", "115 學年度資料已取得", "實際金額以現場詢問為主"],
              ].map(([title, meta, status]) => <div key={title}><span className="file-mark">文件</span><div><h3>{title}</h3><p>{meta}</p></div><StatusBadge>{status}</StatusBadge></div>)}
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
