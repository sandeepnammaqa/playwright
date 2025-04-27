Feature: login

Scenario: Successful login
Given I am in login page
When I enter "vinay" and "kumar"
And I click on Login button
Then Inventory page is displayed

