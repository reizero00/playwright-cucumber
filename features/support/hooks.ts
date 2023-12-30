const { Before, After, Status } = require("@cucumber/cucumber");
const playwright = require('@playwright/test');

interface CustomWorld {
  browser: any;
  page: any;
}

Before(async function (this: CustomWorld) {
  this.browser = await playwright.chromium.launch();

  const context = await this.browser.newContext();
  this.page = await context.newPage();
});

After(async function (this: CustomWorld) {
  await this.page.close();
  await this.browser.close();
});