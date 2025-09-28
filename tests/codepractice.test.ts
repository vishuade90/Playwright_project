import {test, expect} from '@playwright/test';
test('amazon', async ({page}) => {
    await page.goto('https://www.amazon.in/');
  //  await page.locator('#twotabsearchtextbox').fill('iphone 14');
  //  await page.getByPlaceholder('Search Amazon.in').fill('iphone 14');
   await page.locator('#twotabsearchtextbox').fill('iphone 14');




});