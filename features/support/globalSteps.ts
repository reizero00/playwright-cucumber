import { Given, When, Then } from "@cucumber/cucumber"
import { chromium, Page, Browser, expect } from "@playwright/test"

let browser: Browser;
let page: Page;

Given('Browser is open to {string}', async function (url) {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
    await page.goto(url)
});