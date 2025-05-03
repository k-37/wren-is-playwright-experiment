import { test, expect } from './fixtures/base';

const CODE_URL = 'https://github.com/microsoft/playwright';

test.describe('code page', () => {
  test.beforeEach(async ({ codePage }) => {
    await codePage.goto(CODE_URL);
  });

  test('should have title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('code card should have download zip link', async ({ codePage }) => {
    await expect(codePage.codeCard.downloadZipLink).toBeHidden();
    await codePage.openCodeCard();
    await expect(codePage.codeCard.downloadZipLink).toBeVisible();
  });

  test('should be able to switch to issues page', async ({
    issuesPage,
    switchPageFragment,
  }) => {
    await expect(issuesPage.searchIssuesBox).toBeHidden();
    await switchPageFragment.toIssues();
    await expect(issuesPage.searchIssuesBox).toBeVisible();
  });
});
