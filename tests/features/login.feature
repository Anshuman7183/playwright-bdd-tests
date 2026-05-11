Feature: Login Functionality

@login @smoke
Scenario: Successful login with valid credentials

Given user navigates to login page
When user enters valid username
And user enters valid password
And user clicks on login button
Then user should be redirected to dashboard page

@regression 
Scenario: Login with invalid credentials

Given user navigates to login page
When user enters invalid username
And user enters invalid password
And user clicks on login button
Then error message should be displayed