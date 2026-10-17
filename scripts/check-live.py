#!/usr/bin/env python3
"""Read-only checks of the published Pages site; run after deployment finishes."""
import hashlib
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import urlparse
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parent.parent
ORIGIN = "https://blossomkids.tw"


def fetch(url):
    with urlopen(Request(url, headers={"Cache-Control": "no-cache"}), timeout=25) as response:
        destination = urlparse(response.geturl())
        assert destination.scheme == "https", f"HTTPS lost: {url}"
        assert destination.hostname in {"blossomkids.tw", "www.blossomkids.tw"}, f"Unexpected destination: {destination.hostname}"
        assert response.status == 200, f"HTTP {response.status}: {url}"
        assert response.headers.get("server", "").lower() == "github.com", f"Unexpected hosting provider: {url}"
        return response.read()


def main():
    for route in ["/", "/preschool", "/after-school", "/campus", "/admissions", "/parents", "/about", "/privacy"]:
        html = fetch(ORIGIN + route).decode("utf-8")
        for marker in ["華兒園", "tel:+886229761536", "line.me/ti/p/~18250021"]:
            assert marker in html, f"Missing brand/contact content: {route}: {marker}"
        if route != "/privacy":
            assert 'class="reading-nav"' in html, f"Updated navigation missing: {route}"
        if route in {"/", "/preschool"}:
            assert 'id="learning-themes"' in html, f"Learning themes missing: {route}"
        if route == "/":
            assert "/images/themes/paper-garden.webp" in html, "New hero missing"
            assert "/images/graduation-30.jpg" not in html, "Unmasked photo reference"
        print(f"PASS HTTPS, provider and content: {route}", flush=True)

    www = fetch("https://www.blossomkids.tw/").decode("utf-8")
    assert "/images/themes/paper-garden.webp" in www, "www does not serve the updated homepage"
    print("PASS www HTTPS and updated homepage", flush=True)

    for path in ["images/themes/paper-garden.webp", "images/graduation-30-masked.jpg", "fonts/Iansui-subset.woff2", "google00a268e494d7ca7a.html"]:
        expected = (ROOT / "public" / path).read_bytes()
        actual = fetch(f"{ORIGIN}/{path}")
        assert hashlib.sha256(actual).digest() == hashlib.sha256(expected).digest(), f"Deployed asset differs from this commit: {path}"
        print(f"PASS deployed file matches commit: {path}", flush=True)

    try:
        fetch(ORIGIN + "/images/graduation-30.jpg")
    except HTTPError as error:
        assert error.code == 404, f"Unexpected old-photo response: {error.code}"
    else:
        raise AssertionError("Unmasked legacy photo is publicly accessible")
    print("PASS legacy unmasked photo returns 404", flush=True)


if __name__ == "__main__":
    main()
