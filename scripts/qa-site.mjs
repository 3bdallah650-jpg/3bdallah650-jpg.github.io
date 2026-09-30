import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { existsSync } from 'node:fs';

const base = process.env.QA_BASE_URL || 'http://localhost:4321';
const macChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browser = await chromium.launch({
  headless: true,
  ...(existsSync(macChrome) ? { executablePath: macChrome } : {}),
});
const routes = [
  '/', '/ar/', '/evidence/', '/ar/evidence/', '/plans/', '/ar/plans/',
  '/partners/', '/ar/partners/', '/partners/investment/', '/ar/partners/investment/',
  '/partners/research/', '/ar/partners/research/', '/partners/organizations/',
  '/ar/partners/organizations/', '/privacy/', '/ar/privacy/',
];
const widths = [390, 820, 1440];
let failures = 0;

function assert(value, message) {
  if (!value) {
    failures++;
    console.error(`FAIL ${message}`);
  }
}

for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  for (const route of routes) {
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('response', (response) => {
      if (response.url().startsWith(base) && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
    });
    const response = await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      const images = Array.from(document.images).filter((image) => image.hasAttribute('src'));
      images.forEach((image) => { image.loading = 'eager'; });
      await Promise.all(images.map((image) => image.decode().catch(() => {})));
    });
    assert(response?.status() === 200, `${width} ${route}: route status`);
    assert(await page.locator('html').getAttribute('lang') === (route.startsWith('/ar/') ? 'ar' : 'en'), `${width} ${route}: lang`);
    assert(await page.locator('html').getAttribute('dir') === (route.startsWith('/ar/') ? 'rtl' : 'ltr'), `${width} ${route}: dir`);
    assert(await page.locator('main h1').count() === 1, `${width} ${route}: one h1`);
    assert(await page.locator('link[rel="canonical"]').count() === 1, `${width} ${route}: canonical`);
    assert(await page.locator('link[hreflang="en"]').count() === 1 && await page.locator('link[hreflang="ar"]').count() === 1, `${width} ${route}: hreflang`);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${width} ${route}: no page overflow`);
    assert(await page.evaluate(() => Array.from(document.images).filter((image) => image.hasAttribute('src')).every((image) => image.naturalWidth > 0)), `${width} ${route}: images decoded`);
    assert(errors.length === 0, `${width} ${route}: ${errors.join('; ')}`);
    if (width === 390) {
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
      assert(axe.violations.length === 0, `${width} ${route}: axe ${axe.violations.map((item) => item.id).join(', ')}`);
    }
    await page.close();
  }
  await context.close();
}

const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
const page = await context.newPage();
await page.goto(`${base}/`, { waitUntil: 'networkidle' });
await page.locator('.mobile-menu summary').focus();
await page.keyboard.press('Enter');
assert(await page.locator('.mobile-menu').evaluate((node) => node.open), 'mobile menu keyboard operation');
assert(await page.locator('.mobile-menu a[href="/plans/"]').count() === 1, 'mobile plans navigation');
assert(await page.locator('.mobile-menu a[href="/partners/"]').count() === 1, 'mobile partners navigation');
assert(await page.locator('.product-gallery .product-capture').count() === 3, 'three real prototype captures');
assert(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior === 'auto'), 'reduced-motion scroll behavior');
assert(!(await page.locator('html').evaluate((node) => node.classList.contains('motion-ready'))), 'reduced-motion reveals disabled');
assert(await page.locator('.problem-scene').evaluate((node) => getComputedStyle(node).opacity === '1'), 'reduced-motion content visible');
assert(await page.locator('.watch-frame[src]').count() === 1, 'reduced-motion loads one watch angle');
assert(await page.locator('.watch-frame').first().evaluate((node) => getComputedStyle(node).opacity === '1'), 'reduced-motion watch visible');

const internalTargets = new Map();
for (const route of routes) {
  await page.goto(`${base}${route}`, { waitUntil: 'domcontentloaded' });
  const links = await page.locator('a[href]').evaluateAll((anchors) =>
    anchors
      .map((anchor) => new URL(anchor.href))
      .filter((url) => url.origin === location.origin)
      .map((url) => `${url.pathname}${url.hash}`),
  );
  for (const target of links) internalTargets.set(target, route);
}
for (const [target, source] of internalTargets) {
  const url = new URL(`${base}${target}`);
  const response = await page.request.get(`${base}${url.pathname}`);
  assert(response?.status() === 200, `${source}: internal link ${target} status`);
  await page.goto(`${base}${target}`, { waitUntil: 'domcontentloaded' });
  const hash = url.hash;
  if (hash) {
    assert(await page.locator(`[id="${decodeURIComponent(hash.slice(1))}"]`).count() === 1, `${source}: internal link ${target} anchor`);
  }
}

const motionContext = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'no-preference' });
const motionPage = await motionContext.newPage();
for (const [locale, route] of [['en', '/'], ['ar', '/ar/']]) {
  await motionPage.goto(`${base}${route}`, { waitUntil: 'networkidle' });
  assert(await motionPage.locator('html').evaluate((node) => node.classList.contains('motion-ready')), `${locale}: motion enhancement active`);
  for (let index = 0; index < 5; index++) {
    await motionPage.locator(`[data-ai-step="${index}"]`).evaluate((node) => node.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await motionPage.waitForTimeout(180);
    assert(await motionPage.locator('[data-ai-visual]').getAttribute('data-stage') === String(index), `${locale}: AI story stage ${index + 1}`);
  }
  assert(await motionPage.locator('#wearable .watch-frame').count() === 5, `${locale}: five wearable angles`);
  await motionPage.locator('[data-wearable-scroll]').evaluate((node) => window.scrollTo({ top: node.getBoundingClientRect().top + scrollY + (node.offsetHeight - innerHeight) * .5, behavior: 'instant' }));
  await motionPage.waitForTimeout(450);
  assert(await motionPage.locator('[data-watch-counter]').textContent() === '03 / 05', `${locale}: wearable scroll angle`);
  assert(await motionPage.locator('.watch-frame[src]').count() === 5, `${locale}: wearable angles loaded near viewport`);
  assert(await motionPage.locator('#roadmap').textContent().then(text => text?.includes('03')), `${locale}: stage 3 of 6`);
  const teamText = await motionPage.locator('#team').textContent();
  assert(teamText?.includes(locale === 'ar' ? 'عنان رواس' : 'Anan S. Rawass'), `${locale}: approved team name`);
}
await motionContext.close();

const noScriptContext = await browser.newContext({ viewport: { width: 390, height: 844 }, javaScriptEnabled: false });
const noScriptPage = await noScriptContext.newPage();
await noScriptPage.goto(`${base}/`, { waitUntil: 'load' });
assert(await noScriptPage.locator('.problem-scene').evaluate((node) => getComputedStyle(node).opacity === '1'), 'no-JavaScript content visible');
assert(await noScriptPage.locator('.watch-frame').first().evaluate((node) => getComputedStyle(node).opacity === '1'), 'no-JavaScript watch visible');
assert(await noScriptPage.locator('.evidence-dashboard__bar-rail i').first().evaluate((node) => node.getBoundingClientRect().width > 0 && getComputedStyle(node).opacity === '1'), 'no-JavaScript evidence chart visible');
await noScriptContext.close();
await browser.close();

console.log(`Site smoke: ${widths.length * routes.length} route/viewport combinations, ${routes.length} axe audits, ${internalTargets.size} internal links, 10 AI scroll stages, keyboard, reduced-motion and no-JavaScript checks. ${failures} failure(s).`);
process.exitCode = failures ? 1 : 0;
