import { Given, When, Then } from "@cucumber/cucumber"
import { chromium, Page, Browser, expect } from "@playwright/test"

Given('the User enters {string} in the Username text field', async function (userName) {
    await this.page.getByPlaceholder('Username').fill(userName);
});

Given('the User enters {string} in the Password text field', async function (password) {
    await this.page.getByPlaceholder('Password').fill(password);
});

When('the User clicks the Login button', async function () {
    await this.page.getByRole('button', { Name: "Login" }).click();
});

Then('the User should see products', async function () {
    await expect(this.page.getByRole('link', { Name: "Sauce Labs Backpack" })).toBeVisible();
});

Then('the User should see the error {string}', async function (loginError) {
    await expect(this.page.getByText(loginError)).toBeVisible();
});