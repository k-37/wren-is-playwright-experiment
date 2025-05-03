import { test, expect } from './fixtures/base';

const ISSUES_URL = 'https://github.com/microsoft/playwright/issues';

test('should have new issue link', async ({ issuesPage }) => {
  await issuesPage.goto(ISSUES_URL);

  await expect(issuesPage.newIssueLink).toBeVisible();
});
