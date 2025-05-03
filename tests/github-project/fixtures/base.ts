import { test as base, expect } from '@playwright/test';
import { CodePage } from '../models/pages/code';
import { IssuesPage } from '../models/pages/issues';
import { SwitchPageFragment } from '../models/pages/fragments/switch-page';

export const test = base.extend<{
  codePage: CodePage;
  issuesPage: IssuesPage;
  switchPageFragment: SwitchPageFragment;
}>({
  codePage: async ({ page }, use) => {
    await use(new CodePage(page));
  },
  issuesPage: async ({ page }, use) => {
    await use(new IssuesPage(page));
  },
  switchPageFragment: async ({ page }, use) => {
    await use(new SwitchPageFragment(page));
  },
});

export { expect };
