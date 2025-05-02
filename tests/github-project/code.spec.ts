import { test, expect } from '@playwright/test';
import { CodePage } from './models/pages/code';
import { IssuesPage } from './models/pages/issues';
import { SwitchPageFragment } from './models/pages/fragments/switch-page';

const CODE_URL = 'https://github.com/microsoft/playwright';

test.describe('code page', () => {
  test.beforeEach(async ({ page }) => {
    const codePage = new CodePage(page);

    await codePage.goto(CODE_URL);
  });

  test('should have title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('code card should have download zip link', async ({ page }) => {
    const codePage = new CodePage(page);

    await expect(codePage.codeCard.downloadZipLink).toBeHidden();
    await codePage.openCodeCard();
    await expect(codePage.codeCard.downloadZipLink).toBeVisible();
  });

  test('should be able to switch to issues page', async ({ page }) => {
    const issuesPage = new IssuesPage(page);
    const switchPageFragment = new SwitchPageFragment(page);

    await expect(issuesPage.searchIssuesBox).toBeHidden();
    await switchPageFragment.toIssues();
    await expect(issuesPage.searchIssuesBox).toBeVisible();
  });
});
