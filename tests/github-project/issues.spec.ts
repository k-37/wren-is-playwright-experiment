import { test, expect } from './fixtures/base';

test('should have new issue link', async ({ issuesPage }) => {
  await issuesPage.goto();

  await expect(issuesPage.newIssueLink).toBeVisible();
});
