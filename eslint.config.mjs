// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    // define TypeScript project config to enable "linting with type information"
    languageOptions: {
      parserOptions: {
        // reuse the existing `tsconfig.json`
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    // enable linting rules beneficial for Playwright projects
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',
    },
  },
  // disable formatting rules, see: https://typescript-eslint.io/users/what-about-formatting/#suggested-usage---prettier
  prettierConfig,
);
