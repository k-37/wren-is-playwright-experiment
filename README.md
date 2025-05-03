# Introduction

This repository is used to practice [Playwright](https://en.wikipedia.org/wiki/Playwright_(software)) 🎭.

For this example project we will be testing [GitHub page of Playwright](https://github.com/microsoft/playwright). Tests are intentionally kept simple to showcase Playwright features without losing sight of the trees for the forest.

🐦

## Highlights

- [Page object models](https://martinfowler.com/bliki/PageObject.html) at [commit](https://github.com/k-37/wren-is-playwright-experiment/commit/1e06ff0f5dff5225919370a2e16f675b10e9d49c).
- [Fixtures](https://playwright.dev/docs/test-fixtures) at [commit](https://github.com/k-37/wren-is-playwright-experiment/commit/e7cf64d5625fdfc56f16cdad2e34326e36c7fe66).
- Linting and type checking with [ESLint](https://typescript-eslint.io/) at [commit](https://github.com/k-37/wren-is-playwright-experiment/commit/0d4aced0c4a4f00b8fb7ed6285424d569d54283d).
- Code formatting with [Prettier](https://prettier.io/) at [commit](https://github.com/k-37/wren-is-playwright-experiment/commit/ea93e2f7edf0892a669ec4d7372c1971ee0dfa1f).
- Any time you try to make a commit, automatically lint and check code formatting with [Husky](https://typicode.github.io/husky/) at [commit](https://github.com/k-37/wren-is-playwright-experiment/commit/6e5169ae1963c4971625fae0f0a01b9e0b0a5a9b).

# Requirements

- [Node.js JavaScript runtime](https://nodejs.org/en/download). On Debian/Ubuntu it can be installed with `sudo apt-get install npm`.

> [!NOTE]
> The project is developed on [Debian 12](https://www.debian.org/) if you use another OS have that in mind if something doesn't work as expected.

# Getting started

After cloning current repository in the root of the project execute:

    npm install
    npx playwright install # Install Playwright browsers
    sudo npx playwright install-deps # Install Playwright operating system dependencies

Use the [`ms-playwright.playwright`](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extension for [Visual Studio Code](https://en.wikipedia.org/wiki/Visual_Studio_Code) to run the tests in the [`./tests`](tests) folder [from VS Code](https://playwright.dev/docs/getting-started-vscode) or run the following command in the terminal:

    npx playwright test --ui

# Usage

Run the end-to-end tests:

    npm run test

Start the interactive UI mode:

    npx playwright test --ui

Run tests in headed mode to visually see how Playwright interacts with the website:

    npx playwright test --headed

Run the tests on desktop Firefox and Chrome:

    npx playwright test --project firefox --project=chromium

Run the tests in a specific file:

    npx playwright test <PATH_TO_FILE>

Run the tests in debug mode:

    npx playwright test --debug

Run last failed tests:

    npx playwright test --last-failed

Auto generate tests with [Codegen](https://playwright.dev/docs/codegen-intro):

    npx playwright codegen <URL_OF_THE_WEBSITE_YOU_WANT_TO_GENERATE_TESTS_FOR>

Update Playwright:

    npm install -D @playwright/test@latest
    # Also download new browser binaries and their dependencies:
    npx playwright install --with-deps

Run [ESLint](https://typescript-eslint.io/) to statically analyze your code to quickly find problems, using either of the commands:

    npm run lint
    npx eslint tests/**

Check code formatting with [Prettier](https://prettier.io/), using either of the commands:

    npm run format
    npx prettier . --check

Format all files with Prettier, using either of the commands:

    npm run format:fix
    npx prettier . --write

# Acknowledgements

Everything here is heavily influenced by these great projects:

- [Official Playwright documentation](https://playwright.dev/docs/intro)
- [microsoft/playwright-examples](https://github.com/microsoft/playwright-examples)

Big thank you for all the ~~🐛~~ worms goes to them. 🙏

🐦
