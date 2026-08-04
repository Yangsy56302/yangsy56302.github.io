#!/usr/bin/env python3
"""Migrate hand-maintained HTML pages to the Jekyll site layout.

For every templated page, extracts the shared chrome (head, aside frame,
header, footer) into front matter (title/keywords/description + the
per-page Index <ol> TOC and the <header> h1), leaving only the content that
belongs inside <div class="content">.

Special pages are skipped: epochalypse/ (iframe targets) and blue_archived/
(third-party-styled Ren'Py error page).
"""
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
SKIP_PARTS = {"epochalypse", "blue_archived", "_tools", "_layouts", "_includes"}


def block_scalar(s: str, indent: int = 2) -> str:
    lines = [ln.strip() for ln in s.splitlines()]
    while lines and lines[0] == "":
        lines.pop(0)
    while lines and lines[-1] == "":
        lines.pop()
    pad = " " * indent
    return "\n".join(pad + ln for ln in lines) if lines else ""


def migrate(path: pathlib.Path) -> tuple:
    s = path.read_text(encoding="utf-8-sig")

    lang = "en"
    m = re.search(r"<html\s+lang=\"([^\"]+)\"", s)
    if m:
        lang = m.group(1)

    tm = re.search(r"<title>(.*?)</title>", s, re.S)
    title = tm.group(1).strip() if tm else path.stem

    kw = re.search(r'name="keywords"\s+content="([^"]*)"', s)
    keywords = kw.group(1) if kw else ""

    dm = re.search(r'name="description"\s+content="([^"]*)"', s)
    description = dm.group(1) if dm else ""

    adofai = ("adofai.css" in s) or ("adofai.zh.css" in s)
    tutotile = 'class="tutotile"' in s

    hm = re.search(r"<header>\s*<h1>(.*?)</h1>\s*</header>", s, re.S)
    header = hm.group(1).strip() if hm else title

    toc = ""
    nav_h1_plain = ""
    nav = re.search(r"<nav>(.*?)</nav>", s, re.S)
    if nav:
        nb = nav.group(1)
        n1 = re.search(r"<h1[^>]*>(.*?)</h1>", nb, re.S)
        if n1:
            toc = nb[n1.end():].strip()
            nav_h1_plain = re.sub(r"<[^>]+>", "", n1.group(1)).strip()
        else:
            toc = nb.strip()
        if re.sub(r"<[^>]+>|\s", "", toc) == "":
            toc = ""

    is_meta = path.name in ("nav.html", "nav.zh.html")
    index_label = nav_h1_plain if is_meta else ""

    cm = re.search(r'<div class="content">(.*?)</div>\s*<footer>', s, re.S)
    content = cm.group(1).strip() if cm else ""

    if lang == "zh":
        twin_name = path.name[: -len(".zh.html")] + ".html"
    else:
        twin_name = path.name[: -len(".html")] + ".zh.html"
    twin_exists = path.with_name(twin_name).exists()

    needs_raw = ("{{" in content) or ("{%" in content)

    lines = ["---", "layout: site", "lang: " + lang]
    lines.append("title: " + json.dumps(title, ensure_ascii=False))
    if keywords:
        lines.append("keywords: " + json.dumps(keywords, ensure_ascii=False))
    if description:
        lines.append("description: " + json.dumps(description, ensure_ascii=False))
    if adofai:
        lines.append("adofai: true")
    if tutotile:
        lines.append("tutotile: true")
    if is_meta:
        lines.append("is_meta: true")
        lines.append("index_label: " + json.dumps(index_label, ensure_ascii=False))
    if not twin_exists:
        lines.append("twin: false")
    hb = block_scalar(header)
    if hb:
        lines.append("header: |")
        lines.append(hb)
    tb = block_scalar(toc)
    if tb:
        lines.append("toc: |")
        lines.append(tb)
    lines.append("---")
    body = content
    if needs_raw:
        body = "{% raw %}\n" + body + "\n{% endraw %}"
    lines.append(body)

    path.write_text("\n".join(lines) + "\n", encoding="utf-8", newline="\n")
    return lang, adofai, tutotile, twin_exists, needs_raw, bool(tb)


def main() -> None:
    for path in sorted(ROOT.rglob("*.html")):
        rel = path.relative_to(ROOT)
        if any(part in SKIP_PARTS for part in rel.parts):
            print(f"skip  {rel}")
            continue
        lang, adofai, tutotile, twin, raw, has_toc = migrate(path)
        print(f"ok    {rel} lang={lang} adofai={adofai} tutotile={tutotile} "
              f"twin={twin} raw={raw} toc={has_toc}")


if __name__ == "__main__":
    main()