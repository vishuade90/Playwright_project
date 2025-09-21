import {test,expect}from '@playwright/test';
test('keyboard action',async({page})=>{
//nevigate to the page
await page.goto('https://vinothqaacademy.com/demo-site-keyboard-events/');
await page.keyboard.press('PageDown');
await page.keyboard.press('PageUp');
await page.locator('#search-box').click();
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');
});