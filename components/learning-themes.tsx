import Image from "next/image";

const themes = [
  {
    name: "把故事，說給世界聽",
    category: "繪本與表達",
    image: "/images/toys/cutouts/tangram-bird.png",
    description: "一頁繪本、一段想像。陪孩子看圖、說故事，也聽聽他眼中的世界。",
    prompt: "如果小鳥來到我們家，你想帶牠看什麼？",
    idea: "挑一本熟悉的繪本，讓孩子選一頁。先聽他描述看見的事，再一起想像故事的下一幕；沒有標準答案。",
    className: "story",
  },
  {
    name: "小小發現，大大好奇",
    category: "自然與觀察",
    image: "/images/toys/cutouts/color-tablets.png",
    description: "葉子的顏色、窗邊的光影，都是提問的開始。從生活裡找線索，一起慢慢發現。",
    prompt: "今天找到的綠色，有哪些不一樣？",
    idea: "散步時一起觀察植物的顏色與形狀，不採摘、不觸碰陌生植物。回家用畫筆記錄一個最喜歡的發現。",
    className: "nature",
  },
  {
    name: "用雙手，玩出新模樣",
    category: "美感與創作",
    image: "/images/toys/cutouts/rainbow.png",
    description: "拼一拼、排一排，讓顏色和形狀變成自己的作品。享受嘗試，也欣賞每一種不同。",
    prompt: "這些形狀，還能變成什麼呢？",
    idea: "準備適齡的大塊紙片與畫筆，由大人陪同，讓孩子自由排列、畫畫，再請他介紹自己的作品。材料依孩子年齡選擇。",
    className: "create",
  },
];

export function LearningThemes() {
  return (
    <section className="section learning-themes" id="learning-themes" aria-labelledby="themes-title">
      <div className="container">
        <div className="theme-heading">
          <div><h2 id="themes-title">每一份好奇<br />都有發芽的地方</h2></div>
          <div><p>從繪本、自然到創作，把生活變成孩子的探索起點。</p><p className="theme-disclaimer">以下為親子延伸活動提案；園內實際課程依班級安排。</p></div>
        </div>
        <div className="theme-grid">
          {themes.map((theme) => (
            <article className={`learning-theme theme-${theme.className}`} key={theme.category}>
              <div className="theme-art" aria-hidden="true"><Image src={theme.image} alt="" width={180} height={150} sizes="180px" /></div>
              <span className="theme-category">{theme.category}</span>
              <h3>{theme.name}</h3>
              <p>{theme.description}</p>
              <details className="theme-idea">
                <summary>和孩子一起玩<span aria-hidden="true">＋</span></summary>
                <div><strong>「{theme.prompt}」</strong><p>{theme.idea}</p></div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
