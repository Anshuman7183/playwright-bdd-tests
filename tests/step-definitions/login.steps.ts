import { Given, When, Then } from '@cucumber/cucumber';

Given('user navigates to login page', async function () {
    console.log('Navigating to login page');
});

When('user enters valid username', async function () {
    console.log('Entering valid username');
});

When('user enters valid password', async function () {
    console.log('Entering valid password');
});

When('user selects remember me option', async function () {
    console.log('Selecting remember me option');
});

When('user clicks on login button', async function () {
    console.log('Clicking on login button');
});

Then('user should be redirected to dashboard page', async function () {
    console.log('Redirected to dashboard page');
});