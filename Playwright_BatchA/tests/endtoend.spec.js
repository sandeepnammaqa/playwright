const {test}=require('@playwright/test');
const {LoginPage}=require('../pageobjects/LoginPage');
const {InventoryPage}=require('../pageobjects/InventoryPage');
const {CartPage}=require('../pageobjects/CartPage');


test('@regression abcd1234',async({page})=>{
    const loginPage=new LoginPage(page);
    const inventoryPage=new InventoryPage(page);
    const cartPage=new CartPage(page);
    await loginPage.goTo();
    await loginPage.validLogin("standard_user","secret_sauce"); 
    await inventoryPage.addToCart();
    await inventoryPage.cartButtonClick();
    await cartPage.clickCheckout();
   
});


