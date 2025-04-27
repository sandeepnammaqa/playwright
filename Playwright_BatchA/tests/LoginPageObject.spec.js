const {test}=require('@playwright/test');
const {LoginPage}=require('../pageobjects/LoginPage');


test('Login Page',async({page})=>{
    const loginPage=new LoginPage(page);
   await loginPage.goTo();
   await loginPage.validLogin("standard_user","secret_sauce"); 
   await page.pause();  
  
})
