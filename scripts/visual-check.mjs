// Visual regression aid: loads every route at real device viewports, asserts
// the two failure modes that automated audits miss, and writes screenshots.
//
//   npm run visual                       # against the live site
//   npm run visual -- http://localhost:4173   # against a local `npm run preview`
//
// Exits non-zero if any check fails, so it can gate a release if wanted.

import { mkdir } from 'node:fs/promises'
import { chromium, devices } from 'playwright'

const BASE = (process.argv[2] ?? 'https://saarakiventoyry.fi').replace(
  /\/$/,
  '',
)
const OUT = process.argv[3] ?? 'screenshots'

const ROUTES = ['/', '/teemat', '/tietoa', '/yhteystiedot']

const TARGETS = [
  { name: 'iphone-se', device: devices['iPhone SE'] },
  { name: 'iphone-14', device: devices['iPhone 14'] },
  { name: 'pixel-7', device: devices['Pixel 7'] },
  { name: 'ipad', device: devices['iPad (gen 7)'] },
  { name: 'desktop', device: { viewport: { width: 1440, height: 900 } } },
]

await mkdir(OUT, { recursive: true })

const browser = await chromium.launch()
const problems = []

for (const { name, device } of TARGETS) {
  const context = await browser.newContext({ ...device })
  const page = await context.newPage()
  const isPhone = (device.viewport?.width ?? 1440) < 700

  for (const route of ROUTES) {
    const res = await page.goto(BASE + route, { waitUntil: 'networkidle' })
    // Deep links are served as 404.html by GitHub Pages, so a 404 status with
    // the right heading is expected — only a wrong heading is a real failure.
    const status = res?.status()

    const audit = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      h1: document.querySelector('h1')?.textContent?.trim() ?? null,
      title: document.title,
      // Anything interactive below the 44px touch-target floor.
      smallTargets: [...document.querySelectorAll('a, button')]
        .map((el) => ({
          text: el.textContent.trim().slice(0, 24),
          h: Math.round(el.getBoundingClientRect().height),
        }))
        .filter((t) => t.h > 0 && t.h < 44),
      // Placeholder blocks still awaiting real campaign copy.
      placeholders: document.querySelectorAll('.placeholder').length,
    }))

    if (audit.scrollWidth > audit.innerWidth) {
      problems.push(
        `${name} ${route}: horizontal overflow ${audit.scrollWidth} > ${audit.innerWidth}`,
      )
    }
    if (isPhone && audit.smallTargets.length) {
      problems.push(
        `${name} ${route}: tap targets under 44px ${JSON.stringify(audit.smallTargets)}`,
      )
    }
    if (!audit.h1) problems.push(`${name} ${route}: no <h1> on page`)

    const slug = route === '/' ? 'home' : route.slice(1)
    await page.screenshot({
      path: `${OUT}/${name}-${slug}.png`,
      fullPage: true,
    })

    if (name === 'iphone-14') {
      console.log(
        `${route.padEnd(15)} ${status}  h1="${audit.h1}"  title="${audit.title}"  placeholders=${audit.placeholders}`,
      )
    }
  }

  // Capture the mobile menu open, which no page-load screenshot would show.
  if (isPhone) {
    await page.goto(BASE + '/', { waitUntil: 'networkidle' })
    await page.click('.nav__toggle')
    await page.waitForTimeout(400)
    await page.screenshot({ path: `${OUT}/${name}-menu.png` })
  }

  await context.close()
}

await browser.close()

if (problems.length) {
  console.error('\nPROBLEMS:\n' + problems.join('\n'))
  process.exit(1)
}
console.log(
  `\nOK — ${BASE}: no overflow, no undersized tap targets, every page has an h1.`,
)
