# Introduction

This repository is used to practice [Playwright](https://en.wikipedia.org/wiki/Playwright_(software)) 🎭.

For this simple example project we will be testing [GitHub page of Playwright](https://github.com/microsoft/playwright).

🐦

# Requirements

- [Node.js JavaScript runtime](https://nodejs.org/en/download). On Debian/Ubuntu it can be installed with `sudo apt-get install npm`.

> [!NOTE]
> The project is developed on [Debian 12](https://www.debian.org/) if you use another OS have that in mind if something doesn't work as expected.

# Getting started

After cloning current repository in the root of the project execute:

    npm install
    npx playwright install # Install Playwright browsers
    sudo npx playwright install-deps # Install Playwright operating system dependencies

Use the [`ms-playwright.playwright`](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extension for [Visual Studio Code](https://en.wikipedia.org/wiki/Visual_Studio_Code) to run the tests in the [`./tests`](tests) folder from VS Code or run the following command in the terminal:

    npx playwright test --ui

# Usage

Run the end-to-end tests:

    npx playwright test

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

Auto generate tests with Codegen:

    npx playwright codegen <URL_OF_THE_WEBSITE_YOU_WANT_TO_GENERATE_TESTS_FOR>

Update Playwright:

    npm install -D @playwright/test@latest
    # Also download new browser binaries and their dependencies:
    npx playwright install --with-deps

# Acknowledgements

Everything here is heavily influenced by these great projects:

- [Official Playwright documentation](https://playwright.dev/docs/intro)

Big thank you for all the ~~🐛~~ worms goes to them. 🙏

🐦
