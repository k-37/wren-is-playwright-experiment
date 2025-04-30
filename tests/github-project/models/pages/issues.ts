import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base';

export class IssuesPage extends BasePage {
  readonly searchIssuesBox: Locator;
  readonly newIssueLink: Locator;

  constructor(page: Page) {
    super(page);

    this.searchIssuesBox = page.getByRole('combobox', {
      name: 'Search Issues',
    });
    this.newIssueLink = page.getByRole('link', { name: 'New issue' });
  }
}
