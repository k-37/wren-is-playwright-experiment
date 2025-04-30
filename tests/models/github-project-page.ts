import { expect, type Locator, type Page } from '@playwright/test';

class CodeTab {
  private readonly page: Page;

  readonly codeMenu: Locator;
  readonly cloneTextOnCodeMenu: Locator;
  readonly downloadZipLinkOnCodeMenu: Locator;

  constructor(page: Page) {
    this.page = page;

    this.codeMenu = page.getByRole('button', { name: 'Code' });
    this.downloadZipLinkOnCodeMenu = page.getByRole('link', {
      name: 'Download ZIP',
    });
    this.cloneTextOnCodeMenu = page.getByText('Clone', { exact: true });
  }

  async openCodeMenu() {
    await expect(this.cloneTextOnCodeMenu).toBeHidden();
    await this.codeMenu.first().click();
    await expect(this.cloneTextOnCodeMenu).toBeVisible();
  }
}

class IssuesTab {
  private readonly page: Page;

  readonly issuesTab: Locator;
  readonly searchIssuesBox: Locator;
  readonly newIssueLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.issuesTab = page.getByRole('link', { name: /Issues/ });
    this.searchIssuesBox = page.getByRole('combobox', {
      name: 'Search Issues',
    });
    this.newIssueLink = page.getByRole('link', { name: 'New issue' });
  }

  async openIssuesTab() {
    await expect(this.searchIssuesBox).toBeHidden();
    await this.issuesTab.first().click();
    await expect(this.searchIssuesBox).toBeVisible();
  }
}

export class GitHubProjectPage {
  private readonly page: Page;

  private readonly codeTab: CodeTab;
  private readonly issuesTab: IssuesTab;

  constructor(page: Page) {
    this.page = page;

    this.codeTab = new CodeTab(page);
    this.issuesTab = new IssuesTab(page);
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  locatorDownloadZipLinkOnCodeMenuOnCodeTab(): Locator {
    return this.codeTab.downloadZipLinkOnCodeMenu;
  }

  locatorNewIssueLinkOnIssuesTab(): Locator {
    return this.issuesTab.newIssueLink;
  }

  async openCodeMenuOnCodeTab() {
    await this.codeTab.openCodeMenu();
  }

  async openIssuesTab() {
    await this.issuesTab.openIssuesTab();
  }
}
