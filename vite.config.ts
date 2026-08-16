import vinext from "vinext";
import { defineConfig } from "vite";
import { sites } from "./build/sites-vite-plugin";

// NOTE (Manus 2026-08-16): The starter template wired `./.openai/hosting.json`
// (D1/R2 bindings) and a site-creator Cloudflare Worker into the Cloudflare
// Vite plugin. Neither is used by the production site (GitHub Pages + Next.js
// static export), and both artifacts were removed as template leftovers.
// The Cloudflare plugin is retained for the RSC/SSR pipeline only; the config
// keeps `main` pointing at the (still-present) `worker/index.ts` because the
// plugin requires a valid worker entry, and an empty config has been observed
// to break the RSC build. Local D1/R2 bindings are intentionally omitted.

// macOS Seatbelt blocks FSEvents, so Codex previews need polling for HMR.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";

export default defineConfig(async () => {
  // Keep Wrangler and Miniflare state project-local. These are non-secret tool
  // settings; application environment belongs in ignored `.env*` files.
  process.env.WRANGLER_WRITE_LOGS ??= "false";
  process.env.WRANGLER_LOG_PATH ??= ".wrangler/logs";
  process.env.MINIFLARE_REGISTRY_PATH ??= ".wrangler/registry";

  // Wrangler snapshots its log path while the Cloudflare plugin is imported.
  const { cloudflare } = await import("@cloudflare/vite-plugin");

  return {
    server: isCodexSeatbeltSandbox
      ? { watch: { useFsEvents: false, usePolling: true } }
      : undefined,
    plugins: [
      vinext(),
      sites(),
      cloudflare({
        viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
        config: { main: "./worker/index.ts" },
      }),
    ],
  };
});
