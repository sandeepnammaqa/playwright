const {test,expect}=require('@playwright/test');

async function login(page){
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name','standard_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator("#login-button").click();
}

test.only('@Smoke TC011- Verify Adding an Item to the cart',async({page})=>{
    await login(page);
    const product1AddToProduct=await page.locator("//button[@data-test='add-to-cart-sauce-labs-backpack']");
    const product2AddToProduct=await page.locator("//button[@data-test='add-to-cart-sauce-labs-bike-light']");
    //await page.pause();
    await product1AddToProduct.click();
    const allvalue=await page.locator("//*[@class='inventory_list']//div[@class='inventory_item_label']/a");
    console.log(await allvalue.allTextContents());
    //await page.locator("//button[@data-test='add-to-cart-sauce-labs-backpack']").click();
    //await page.click("//button[@data-test='add-to-cart-sauce-labs-backpack']");
    await product2AddToProduct.click();
    await expect( page.locator(".shopping_cart_badge")).toHaveText('2');
    
})

test.only('@smoke TC012- Verify Removing items to the cart',async({page})=>{
    await login(page);
    //await page.pause();
    await page.click("//button[@data-test='add-to-cart-sauce-labs-backpack']");
    await page.click("//button[@data-test='remove-sauce-labs-backpack']");
    await expect( page.locator(".shopping_cart_badge")).toBeVisible();
})

test.only('@sandeep TC013- Verify viewing the cart',async({page})=>{
    await login(page);
    
    await page.click("//button[@data-test='add-to-cart-sauce-labs-backpack']");
    await expect( page.locator(".shopping_cart_badge")).toHaveText('1');
    await page.click(".shopping_cart_badge");
    const cartTitle=await page.locator(".inventory_item_name").textContent();
    console.log(cartTitle);  

    await expect( page.locator(".inventory_item_name")).toHaveText('Sauce Labs Backpack');

    


    
})

test("TC014-Verify checkout process",async({page})=>{
    await login(page);
    await page.click("//button[@data-test='add-to-cart-sauce-labs-backpack']");
    await page.click(".shopping_cart_badge");
    await page.click("#checkout");
    await page.fill("#first-name","sandeep");
    await page.fill("#last-name","kumar");
    await page.fill("#postal-code","566660");
    await page.click("#continue");
    await page.click("//button[text()='Finish']");
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order');
    await page.pause();
});


test('TC017-Verify Sorting items from low to high',async({page})=>{
    await login(page);
    //await page.pause();
    const dropdown=await page.locator("//select[@class='product_sort_container']");
    await dropdown.selectOption('lohi');
    await page.waitForTimeout(5000);

    //validation 
});

test('TC018-Verify Sorting items from high to low',async({page})=>{
    await login(page);
    await page.pause();
    const dropdown=await page.locator("//select[@class='product_sort_container']");
    await dropdown.selectOption('hilo');
    await page.waitForTimeout(5000);
});

test('TC019-Verify Sorting items from z to a',async({page})=>{
    await login(page);
    //await page.pause();
    const dropdown=await page.locator("//select[@class='product_sort_container']");
    await dropdown.selectOption('za');
    await page.waitForTimeout(5000);
});
test('TC016-	Go to about page of Sauce demo and verify the url ',async({page})=>{
    await login(page);
    await page.locator("//button[@id='react-burger-menu-btn']").click();
    await page.click('#about_sidebar_link');
    await expect(page).toHaveURL('https://saucelabs.com/');
});


test('Login Functionality',async({page})=>{

// playwright scripts 
await login(page);

await page.waitForSelector("#inventory_container");
await page.screenshot({path:"dashboard.png"});
await page.click("#add-to-cart-sauce-labs-backpack");
await page.click("#shopping_cart_container");

await page.screenshot({path:"cartpage.png"});
//await page.pause();
await page.click("#checkout");
await page.fill("#first-name","sandeep");
await page.fill("#last-name","kumar");
await page.fill("#postal-code","566660");
await page.click("#continue");
await page.click("//button[text()='Finish']");
//await page.pause();

await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

});

test('Sample Test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.locator('text=Get Started')).toBeVisible();
    });

    test('Sample Test1', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');



        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        
        
        await page.pause();
    });

    test.only('Inbuilt Playwright locators',async({page})=>{
       
        await page.goto('https://paytm.com/recharge');
        await page.waitForTimeout(2000);
        await page.locator("//label[normalize-space()='Postpaid']").click();
        await page.waitForTimeout(2000);
        await page.locator("//label[normalize-space()='Prepaid']").click();

       
    });

    test.only('@SmokeRegression Hide or Visible Concept',async({page})=>{
       
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await page.waitForTimeout(5000);
        await expect(page.locator("#displayed-text")).toBeVisible();
        await page.locator("#hide-textbox").click();
        await page.waitForTimeout(5000);
        await expect(page.locator("#displayed-text")).toBeHidden();

       
    });

    
    test.only('Navigation ',async({page})=>{
       
        await page.goto('https://paytm.com/recharge');
        await page.goto("https://paytm.com");
        await page.goBack();
        await page.goForward();
        await page.locator("//label[normalize-space()='Postpaid']").click();
        await page.waitForTimeout(2000);
        await page.locator("//label[normalize-space()='Prepaid']").click();

       
    });

    test.only('Navigation methods ',async({page})=>{
       
        await page.goto('https://paytm.com/recharge');
        await page.goto("https://paytm.com");
        await page.goBack();
        await page.goForward();
        await page.locator("//label[normalize-space()='Postpaid']").click();
        await page.waitForTimeout(2000);
        await page.locator("//label[normalize-space()='Prepaid']").click();

       
    });

    test.only("Java Dailog",async({page})=>{
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        
       // await page.locator("//input[@id='alertbtn']").click();
       //page.on('dialog',dialog=>dialog.accept());
       await page.locator("//input[@id='confirmbtn']").click();
       page.on('dialog',dialog=>dialog.dismiss());
       await page.waitForTimeout(2000);
        //await page.locator("//a[@id='opentab']").click();
    
    });

    test.only("@Smoke dyanamic dropdown and webtable",async({page})=>{
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        const rowCount=await page.locator("//table[@name='courses']//tr").count();
        console.log(rowCount);
        const columnCount=await page.locator("//table[@name='courses']//th").count();
        console.log(columnCount);
        
        console.log(await page.locator("//table[@name='courses']//td").allTextContents());
        await page.locator("//input[@id='autocomplete']").pressSequentially("British Indian Ocean Te");
    
    });


    test.only("iframe example",async({page})=>{
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        //await page.locator("li[class='current'] a[class='new-navbar-highlighter']").click();
       
       const framePage= page.frameLocator("#courses-iframe")
       await framePage.locator("li a[href='lifetime-access']:visible").click();
       await framePage.locator("//th[@class='text-center bronze-plan border-0 pb-5']//button[@class='btn btn-block btn-outline-primary btn-rounded'][normalize-space()='ENROLL']").click();
       
    });
	
    test.only("Visual Testing",async({page})=>{
      await page.goto("https://www.saucedemo.com/");
      expect(await page.screenshot()).toMatchSnapshot("saucedemo.png");

    });		

test('10 minutes timer',async({browser})=>{
   const context= await browser.newContext();
  const page=await context.newPage();
  await page.goto('https://vclock.com/set-timer-for-10-minutes/');
  await expect(page).toHaveTitle('Google');
 //console.log(await page.title());
 console.log(await page.locator("//h1[@id='lbl-title']").textContent());

  


})


