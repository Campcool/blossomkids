#!/usr/bin/env python3
"""將 Iansui 手寫字型子集化為 woff2（標題字型，見 globals.css @font-face）。

用法：python3 scripts/subset-font.py
需求：pip install fonttools brotli
注意：新增頁面文案後需重新執行本腳本，否則新字會退回系統字型顯示。
原始 TTF 保存在 fonts-src/（不隨網站發布）；OFL 授權條款見 public/fonts/OFL-Iansui.txt。
"""
import glob
import string
import subprocess

chars = set(string.printable)
for path in glob.glob("app/**/*.tsx", recursive=True) + glob.glob("components/*.tsx") + glob.glob("lib/*.ts"):
    with open(path, encoding="utf-8") as f:
        chars.update(f.read())
chars.update("，。、；：「」『』（）！？．…—－·＋％＆＠＊〈〉《》【】｜～　✓✿✎↗→←©®°NT$0123456789")
text = "".join(sorted(c for c in chars if not c.isspace() or c == " "))

with open("/tmp/font-subset-chars.txt", "w", encoding="utf-8") as f:
    f.write(text)

subprocess.run(
    [
        "pyftsubset",
        "fonts-src/Iansui-Regular.ttf",
        "--text-file=/tmp/font-subset-chars.txt",
        "--flavor=woff2",
        "--output-file=public/fonts/Iansui-subset.woff2",
        "--layout-features=*",
        "--no-hinting",
    ],
    check=True,
)
print(f"完成：{len(text)} 字元 → public/fonts/Iansui-subset.woff2")
