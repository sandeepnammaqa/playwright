// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  
  reporter: [["line"], ["allure-playwright"]],
  retries:1,
  
  expect: {
    timeout:10000,
  },
  use: {
    browserName: 'webkit',
    headless:false,
   

    
    
   
    trace: 'on-first-retry',
  },
});

