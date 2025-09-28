import { test, expect } from '@playwright/test';
test('New Window Handle', async ({ page, context }) => {
    // Navigate to the page
    await page.goto('https://vinothqaacademy.com/multiple-windows/');

    // // Click on the "New Window" button
    // const [newPage] = await Promise.all([
    //     context.waitForEvent('page'),
    //     page.locator('#button1').click(),
    // ]);


// Wait for the new tab to open
  const [newPage] = await Promise.all([
    context.waitForEvent("page"), // listen for new tab
    page.click("#button1"),     // action that opens new tab
  ]);
  await newPage.waitForLoadState(); // wait until loaded
  console.log(await newPage.title());
   // await newPage.waitForLoadState();
    await newPage.getByPlaceholder('Name').fill('Jayesh');
    await newPage.getByPlaceholder('Role').fill('QA Engineer');
    await newPage.locator('#emailInput').fill('jayesh@gmail.com');
    await newPage.getByPlaceholder('Location').fill('India');
    await newPage.getByPlaceholder('Department').fill('Testing');
    await newPage.getByRole('button', { name: 'Add Row' }).click();
    await page.bringToFront();
    await page.waitForTimeout(3000);

});
