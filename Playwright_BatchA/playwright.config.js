// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  
  reporter: [["line"], ["allure-playwright"]],
  retries:2,
 
  
  expect: {
    timeout:10000,
  },
  use: {
    browserName: 'chromium',
    headless:false,
    
   
    ignoreHTTPSErrors:true,
    permissions: ['geolocation'],
    
    
   
    trace: 'on-first-retry',
  },
});

