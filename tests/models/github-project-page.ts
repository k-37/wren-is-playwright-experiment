import { expect, type Locator, type Page } from '@playwright/test';

export class GitHubProjectPage {
  readonly page: Page;
  readonly codeLink: Locator;
  readonly downloadZipLink: Locator;
  readonly cloneText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.codeLink = page.getByRole('button', { name: 'Code' });
    this.downloadZipLink = page.getByRole('link', { name: 'Download ZIP' });
    this.cloneText = page.getByText('Clone', { exact: true });
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async clickCode() {
    await expect(this.cloneText).toBeHidden();
    await this.codeLink.first().click();
    await expect(this.cloneText).toBeVisible();
  }
}
