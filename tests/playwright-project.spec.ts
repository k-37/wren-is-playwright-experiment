import { test, expect } from '@playwright/test';
import { GitHubProjectPage } from './models/github-project-page';

const PLAYWRIGHT_PROJECT_URL = 'https://github.com/microsoft/playwright';

test('page should have title', async ({ page }) => {
  await page.goto(PLAYWRIGHT_PROJECT_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('code menu on code tab should have download zip link', async ({
  page,
}) => {
  const githubProject = new GitHubProjectPage(page);

  await githubProject.goto(PLAYWRIGHT_PROJECT_URL);

  await expect(
    githubProject.locatorDownloadZipLinkOnCodeMenuOnCodeTab(),
  ).toBeHidden();
  await githubProject.openCodeMenuOnCodeTab();
  await expect(
    githubProject.locatorDownloadZipLinkOnCodeMenuOnCodeTab(),
  ).toBeVisible();
});

test('issues tab should have new issue link', async ({ page }) => {
  const githubProject = new GitHubProjectPage(page);

  await githubProject.goto(PLAYWRIGHT_PROJECT_URL);

  await expect(githubProject.locatorNewIssueLinkOnIssuesTab()).toBeHidden();
  await githubProject.openIssuesTab();
  await expect(githubProject.locatorNewIssueLinkOnIssuesTab()).toBeVisible();
});
