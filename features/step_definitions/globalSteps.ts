import { Given, When, Then } from "@cucumber/cucumber"
import { chromium, Page, Browser, expect } from "@playwright/test"
const playwright = require('@playwright/test');

Given('Browser is open to {string}', async function (url) {
    await this.page.goto(url)
});