import type { NextConfig } from "next";

// STATIC_EXPORT=1 時（GitHub Actions 部署 GitHub Pages 用）輸出純靜態站到 out/；
// 未設定時維持原本 vinext（chatgpt.site 預覽）行為，兩條部署路線互不影響。
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  ...(isStaticExport
    ? {
        output: "export" as const,
        // GitHub Pages 沒有影像最佳化伺服器，next/image 需直接輸出原圖
      }
    : {}),
};

export default nextConfig;
