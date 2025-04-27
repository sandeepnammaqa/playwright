// @ts-check
import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('https://paytm.com/');

  await page.locator("//li[text()='Recharge & Bills']").hover();
  await page.waitForTimeout(5000);
  await page.locator("//li[text()='Recharge & Bills']/..//a[text()='Mobile Recharge']").click();
  await page.waitForTimeout(5000);
 
  await page.locator("//label[normalize-space()='Postpaid']").click();
  await page.waitForTimeout(2000);
  await page.locator("//label[normalize-space()='Prepaid']").click();
  await page.pause();
  //await page.locator("//input[@type='tel']").fill("1234567890");
  
  //handle radio button
 // await page.locator("//label[@id='rt']").click();
 // await page.waitForTimeout(5000);
  
});

test.only('get started link', async ({ browser }) => {
  const context=await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://paytm.com/');
  const mobileRechargeLink=page.locator("//li[text()='Recharge & Bills']/..//a[text()='Mobile Recharge']")
  await page.locator("//li[text()='Recharge & Bills']").hover();
     const [newPage]=await Promise.all([
     context.waitForEvent('page'),
    mobileRechargeLink.click(),
  ])
  // this step should be executed when both the above step are complete
  await newPage.locator("//label[normalize-space()='Postpaid']").click();
  await newPage.waitForTimeout(2000);
  await newPage.locator("//label[normalize-space()='Prepaid']").click();
  await page.locator("//button[@id='flightSearch']").click();
  await newPage.waitForTimeout(2000);
  //await newPage.pause();

});
