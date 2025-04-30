import { test, expect } from '@playwright/test';
import { IssuesPage } from './models/pages/issues';

const ISSUES_URL = 'https://github.com/microsoft/playwright/issues';

test('should have new issue link', async ({ page }) => {
  const issuesPage = new IssuesPage(page);

  await issuesPage.goto(ISSUES_URL);

  await expect(issuesPage.newIssueLink).toBeVisible();
});
