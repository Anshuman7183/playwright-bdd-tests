import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60000);
import { chromium, Browser, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Before({ timeout: 60000 }, async function () {

    browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    });

    const context = await browser.newContext();

    page = await context.newPage();

    loginPage = new LoginPage(page);
});

After(async function () {
    if (browser) {
        await browser.close();
    }
});

Given('user navigates to login page', async function () {
    await loginPage.navigateToLoginPage();
});

When('user enters valid username', async function () {
    await loginPage.enterUsername();
});

When("user enters invalid username", async function () {
    await page.fill("#user-name", "wrong_user");
});

When('user enters valid password', async function () {
    await loginPage.enterPassword();
});

When("user enters invalid password", async function () {
    await page.fill("#password", "wrong_password");
});

When('user clicks on login button', async function () {
    await loginPage.clickLogin();
});

Then('user should be redirected to dashboard page', async function () {
    console.log('Login verified');
});

Then("error message should be displayed", async function () {
    const error = page.locator('[data-test="error"]');
    await expect(error).toBeVisible();
});
