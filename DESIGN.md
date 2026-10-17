---
name: Blossom Kids Design System
colors:
  background: "#FFFDF8"
  foreground: "#18352E"
  primary: "#0D2923"
  primary-foreground: "#FFFFFF"
  secondary: "#F7F2E8"
  muted-foreground: "#64756F"
  accent: "#E6B94C"
  clay: "#D97856"
  border: "#CFD8D1"
  focus: "#E6B94C"
  media-caption: "rgba(12, 45, 37, 0.93)"
typography:
  body: '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif'
  display: '"Iansui", "Klee One", "DFKai-SB", "BiauKai", cursive'
  base: "1rem"
  small: ".875rem"
  metadata: ".75rem"
  reading-line-height: "1.75"
media-caption:
  size: "clamp(1rem, .85vw + .35rem, 1.15rem)"
  desktop-min-height: "60px"
  mobile-min-height: "56px"
---

# Blossom Kids Design System

## Direction

Warm, trustworthy and child-friendly without looking childish. The interface should make parents feel calm and informed, while the real school environment and practical details remain the main visual evidence.

## Typography

- Use 16px or larger for normal reading copy.
- Use 14px for supporting copy, form labels, table cells, times and compact actions.
- Reserve 12–13px for short metadata or decorative English labels only.
- Never shrink navigation or meaningful copy to force it into one line. Wrap it, increase the container, or hide low-value metadata instead.
- Use a line height around 1.65–1.8 for paragraph-length Traditional Chinese.

## Media Captions

- Use a full-width dark green bar at the bottom of real visitor-facing photos.
- Keep caption text white, bold, horizontally and vertically centered.
- Maintain at least 16px text and 56px height on mobile; use 60px or more on larger screens.
- Keep wording short enough to scan without covering too much of the photo.

## Spacing and Density

- Preserve visible separation between label, heading and description.
- Mobile touch targets should be at least 44px high.
- Tables keep readable text and scroll horizontally on narrow screens; do not compress type to fit.
- Fixed mobile contact actions must remain readable without covering the final page content.
- Mobile uses one persistent contact surface: keep the bottom contact dock and do not duplicate phone or LINE controls in the sticky header.
- Hide the utility strip on mobile so the school identity and page map remain the only sticky header content.
- Use fixed heading sizes at mobile breakpoints; do not scale Traditional Chinese display type continuously with viewport width.

## Accessibility and Motion

- Use the yellow focus color with a visible outline.
- Maintain strong contrast for white-on-green and green-on-cream text.
- Honor `prefers-reduced-motion` for non-essential animation.
- Icons support text labels; they do not replace labels when the action may be unclear.

## Content Guardrails

- Do not publish raw documents that contain private personal information.
- Use honest maintenance states for known but unfinished public content.
- Prefer clear school-specific facts over generic promotional copy.

## 2026-10-17 — school field guide extension

`app/editorial.css` is the final cascade for the existing component system; DESIGN.md remains the authority. Applies to the homepage and all six information routes. Keep the original Iansui display face, system Traditional Chinese body stack, verified school facts, photo captions and contact contract.

- Surfaces: paper `#fffdf8`, cream `#f7f2e8`, sage `#e7eee5`; ink `#18352e`, deep ink `#0d2923`, supporting copy `#52665e`, focus `#a56712`.
- Reading pace: section gap 56–92px desktop / 52px mobile; headings 2.65rem / 2rem; body 1rem at 1.8–1.85 line height. Interior H1 3.8rem / 3rem / 2.65rem. Preserve semantic sentence spans.
- Opening: a picture-book illustration beside one invitation, then local section links and verified school facts. Decorative teaching materials frame content, never sit over paragraphs or controls.
- Native section navigation wraps into two columns on phones and does not become another sticky bar. Touch rows are at least 44px. Section anchors clear the sticky site header.
- Three learning themes: picture books/expression, nature/observation and art/creation. Native details reveal optional parent-child ideas. These are explicitly proposals, not a published class schedule.
- Daily schedule uses ordered rows, visible times and quiet dividers instead of rotated cards. Class information uses two desktop columns and one narrow-phone column.
- New illustration is AI-generated brand imagery, visibly labelled as non-photographic. Source/prompt: `docs/design/paper-garden-source.json`. It is not evidence of facilities. Existing pending content remains explicit.
- No new animation library. Maintenance decorations no longer loop. Reduced motion removes transitions and smooth scrolling. Phone contact and native disclosures remain usable without JavaScript.
