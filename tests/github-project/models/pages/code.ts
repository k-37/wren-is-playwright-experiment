import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base';

class CodeCard {
  readonly cloneText: Locator;
  readonly downloadZipLink: Locator;

  constructor(page: Page) {
    this.cloneText = page.getByText('Clone', { exact: true });
    this.downloadZipLink = page.getByRole('link', { name: 'Download ZIP' });
  }
}

export class CodePage extends BasePage {
  readonly url: string;
  readonly codeButton: Locator;
  readonly codeCard: CodeCard;

  constructor(page: Page) {
    super(page);

    this.url = 'https://github.com/microsoft/playwright';
    this.codeButton = page.getByRole('button', { name: 'Code' });
    this.codeCard = new CodeCard(page);
  }

  async openCodeCard() {
    await expect(this.codeCard.cloneText).toBeHidden();
    await this.codeButton.first().click();
    await expect(this.codeCard.cloneText).toBeVisible();
  }
}
