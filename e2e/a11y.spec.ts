import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { path: '/en', name: 'home (en)' },
  { path: '/es', name: 'home (es)' },
  { path: '/en/work/imperfect-gaming', name: 'case study (en)' },
];

for (const { path, name } of pages) {
  test(`a11y: ${name} has no WCAG AA violations`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState('networkidle');
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });
}
