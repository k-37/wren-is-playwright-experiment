import { type Locator, type Page } from '@playwright/test';

export class SwitchPageFragment {
  readonly issuesItem: Locator;

  constructor(page: Page) {
    this.issuesItem = page.getByRole('link', { name: /Issues/ });
  }

  async toIssues() {
    await this.issuesItem.first().click();
  }
}
