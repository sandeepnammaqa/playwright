const {Given, When, Then} = require('@cucumber/cucumber');
const {test,expect}=require('@playwright/test');


  Given('I am in login page', function () {
           // Write code here that turns the phrase above into concrete actions
         
         });

  When('I enter {string}', function (string) {
            // Write code here that turns the phrase above into concrete actions
           
          });

   When('I click on Login button', function () {
           // Write code here that turns the phrase above into concrete actions
           
         });

  Then('Inventory page is displayed', function () {
           // Write code here that turns the phrase above into concrete actions
          
         });

         Given('I am logged in', function () {
          // Write code here that turns the phrase above into concrete actions
          console.log("I am logged in");
        });

        When('I navigate to the dashboard', function () {
          // Write code here that turns the phrase above into concrete actions
        console.log("I navigate to the dashboard");
        });


        Then('I should see my recent activity', function () {
          // Write code here that turns the phrase above into concrete actions
         console.log("I should see my recent activity");
        });


        Then('I should see my notifications', function () {
          // Write code here that turns the phrase above into concrete actions
       console.log("I should see my notifications");
        });


        Given('the user is on the Login page', function () {
          // Write code here that turns the phrase above into concrete actions
          console.log("the user is on the Login page");
        });

        When('the user clicks on the {string} link', function (string) {
          // Write code here that turns the phrase above into concrete actions
          console.log("the user clicks on the link" + string);
        }); 

        Then('the user should be redirected to the {string} page', function (string) {
          // Write code here that turns the phrase above into concrete actions
          console.log("the user should be redirected to the page" + string);
        });