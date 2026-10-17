/** Real browser checks against the GitHub Pages output. Build out/ first. */
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat, mkdir, writeFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { chromium } from '@playwright/test';

const root = resolve('out');
const evidence = resolve(process.env.EVIDENCE_DIR || 'outputs/editorial');
await mkdir(evidence, { recursive: true });
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.woff2': 'font/woff2', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.txt': 'text/plain' };
const server = createServer(async (req, res) => {
  try {
    let file = resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://local').pathname));
    if (file !== root && !file.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    // Next 16 also creates /route/ RSC payload folders beside /route.html.
    // Prefer the HTML document for clean URLs, as Pages does.
    if (!extname(file) && (await stat(file + '.html').catch(() => null))?.isFile()) file += '.html';
    else if ((await stat(file).catch(() => null))?.isDirectory()) file = resolve(file, 'index.html');
    res.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
    res.end(await readFile(file));
  } catch { res.writeHead(404).end('Not found'); }
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({
  ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}),
  args: ['--no-sandbox'],
});
const report = { routes: [], checks: [], externalNetwork: 'Map embeds isolated; external destinations checked as URLs only.' };
const issues = [];
const pageAnchors = new Map();
const internalAnchors = new Set();
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  await context.route('**/*', route => route.request().url().startsWith(origin) ? route.continue() : route.fulfill({ contentType: 'text/html', body: '<p>External map isolated for layout test.</p>' }));
  const page = await context.newPage();
  page.on('pageerror', e => issues.push(`JavaScript: ${e.message}`));
  page.on('response', r => { if (r.url().startsWith(origin) && r.status() >= 400) issues.push(`HTTP ${r.status()}: ${r.url()}`); });
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ['/', '/preschool', '/after-school', '/campus', '/admissions', '/parents', '/about', '/privacy']) {
      await page.goto(origin + path, { waitUntil: 'networkidle' });
      await page.evaluate(async () => {
        document.querySelectorAll('img[loading="lazy"]').forEach(img => img.loading = 'eager');
        await Promise.all([...document.images].map(img => img.decode().catch(() => {})));
        await document.fonts.ready;
        window.scrollTo(0, 0);
      });
      const result = await page.evaluate(() => {
        const nav = document.querySelector('.reading-nav');
        const links = nav ? [...nav.querySelectorAll('a')] : [];
        const h1 = document.querySelector('h1');
        return {
          anchorIds: [...document.querySelectorAll('[id]')].filter(el => el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden').map(el => el.id),
          internalAnchors: [...document.querySelectorAll('a[href]')].map(a => new URL(a.href)).filter(u => u.origin === location.origin && u.hash).map(u => u.pathname + u.hash),
          pendingMedia: document.querySelectorAll('.maintenance-slot').length,
          overflow: document.documentElement.scrollWidth - innerWidth,
          h1Count: document.querySelectorAll('h1').length,
          h1Size: h1 && parseFloat(getComputedStyle(h1).fontSize),
          images: [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.getAttribute('src')),
          missingAnchors: links.filter(a => !document.getElementById(a.hash.slice(1))).map(a => a.hash),
          smallLinks: links.filter(a => a.getBoundingClientRect().height < 44).map(a => a.textContent),
          fontLoaded: document.fonts.check('24px Iansui'),
          phone: !!document.querySelector('a[href="tel:+886229761536"]'),
          line: !!document.querySelector('a[href="https://line.me/ti/p/~18250021"]'),
        };
      });
      pageAnchors.set(path, new Set(result.anchorIds));
      result.internalAnchors.forEach(href => internalAnchors.add(href));
      delete result.anchorIds;
      delete result.internalAnchors;
      report.routes.push({ width, path, ...result });
      if (result.pendingMedia || result.overflow > 1 || result.h1Count !== 1 || result.images.length || result.missingAnchors.length || result.smallLinks.length || !result.phone || !result.line || !result.fontLoaded) issues.push({ width, path, result });
      if ([390, 1440].includes(width) && ['/', '/preschool', '/admissions', '/campus', '/about'].includes(path)) {
        const name = path === '/' ? 'home' : path.slice(1);
        await page.screenshot({ path: `${evidence}/${name}-${width}.png`, fullPage: true });
        if (path === '/') {
          await page.screenshot({ path: `${evidence}/home-opening-${width}.png` });
          await page.locator('#learning-themes').screenshot({ path: `${evidence}/themes-${width}.png`, style: '.site-header, .contact-dock, .skip-link { visibility: hidden !important; }' });
        }
      }
    }
  }
  for (const href of internalAnchors) {
    const target = new URL(href, origin);
    const path = target.pathname.replace(/\/$/, '') || '/';
    assert.ok(pageAnchors.get(path)?.has(decodeURIComponent(target.hash.slice(1))), `Internal link must target visible content: ${href}`);
  }
  report.checks.push('Every internal fragment link targets rendered, visible content across all routes');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(origin + '/');
  await page.locator('.theme-idea summary').first().focus();
  await page.keyboard.press('Enter');
  assert.equal(await page.locator('.theme-idea').first().getAttribute('open'), '');
  assert.ok(await page.locator('.theme-idea').first().getByText(/挑一本熟悉/).isVisible());
  report.checks.push('Theme activity expands with the keyboard');
  await page.locator('.reading-nav a[href="#home-rhythm"]').click();
  const anchor = await page.locator('#home-rhythm').boundingBox();
  const header = await page.locator('.site-header').boundingBox();
  assert.ok(anchor.y >= header.height - 1, 'Heading is not obscured by the sticky header');
  report.checks.push('Page anchor clears the sticky mobile header');
  for (const route of ['/preschool', '/after-school', '/campus', '/admissions', '/parents', '/about']) {
    await page.locator(`.play-map a[href="${route}"]`).click();
    await page.waitForURL(origin + route);
    assert.equal(await page.locator('.play-map a[aria-current="page"]').getAttribute('href'), route);
  }
  report.checks.push('All six primary navigation links and current-page states work');
  const submissions = [];
  page.on('request', req => {
    if (!['GET', 'HEAD'].includes(req.method()) || /0900000000|%E6%B8%AC%E8%A9%A6%E5%AE%B6%E9%95%B7/i.test(req.url())) submissions.push(req.method() + ' ' + req.url());
  });
  await page.goto(origin + '/admissions#visit-form');
  await page.locator('[name="parentName"]').fill('測試家長');
  await page.locator('[name="phone"]').fill('0900000000');
  await page.locator('[name="birthMonth"]').fill('2023-04');
  await page.locator('[name="service"]').selectOption({ label: '幼兒園' });
  await page.locator('[name="message"]').fill('測試用資料：想了解參觀安排。');
  await page.locator('.consent-field input').check();
  await page.getByRole('button', { name: '整理預約訊息', exact: true }).click();
  await page.locator('.composed-message').waitFor();
  assert.match(await page.locator('.composed-message').inputValue(), /測試家長[\s\S]*幼兒園/);
  assert.equal(await page.getByRole('link', { name: '開啟 LINE 貼上訊息' }).getAttribute('href'), 'https://line.me/ti/p/~18250021');
  assert.deepEqual(submissions, [], 'The form must not upload personal data automatically');
  report.checks.push('Visit form composes the entered request and never claims automatic submission or uploads data');
  const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  await noJs.route('**/*', route => route.request().url().startsWith(origin) ? route.continue() : route.abort());
  const fallback = await noJs.newPage();
  await fallback.goto(origin + '/');
  await fallback.locator('.theme-idea summary').first().click();
  assert.equal(await fallback.locator('.theme-idea').first().getAttribute('open'), '');
  await fallback.locator('.faq-list summary').first().click();
  assert.equal(await fallback.locator('.faq-list details').first().getAttribute('open'), '');
  assert.ok(await fallback.locator('.contact-dock a[href="tel:+886229761536"]').isVisible());
  report.checks.push('Without JavaScript: theme activities, FAQ and phone contact remain usable');
  await noJs.close();
  assert.deepEqual(issues, []);
} catch (error) {
  report.failure = error.message;
  throw error;
} finally {
  report.issues = issues;
  await writeFile(`${evidence}/results.json`, JSON.stringify(report, null, 2) + '\n');
  await browser.close();
  await new Promise(r => server.close(r));
}
console.log(`PASS: ${report.routes.length} route/viewport combinations; ${report.checks.length} interaction checks. Evidence: ${evidence}`);
