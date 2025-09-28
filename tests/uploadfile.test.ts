import {test, expect} from '@playwright/test';
import * as fs from 'fs';
import path from 'path';

test('Togle Button Test', async ({page}) => {

    await page.goto('https://ng-toggle-button.netlify.app/');
    const toggleButton = page.locator('#ng-toggle-1');
    const isToggled = await toggleButton.getAttribute('aria-checked') === 'true';

    if (isToggled) {
        console.log('Toggle button is already toggled on.');
       // await toggleButton.click();
        page.locator('//div[@class="ng-toggle-switch-core"]').nth(0).click();
       
        
    }

    await expect(toggleButton).toHaveAttribute('aria-checked', 'false');
    
});


test('Select dropdown Test', async ({page}) => {
    await page.goto('https://letcode.in/dropdowns');

    await page.locator('#fruits').selectOption('Apple');
    await page.locator('#superheros').selectOption(['Aquaman', 'Batman','Batwoman']);
    await page.locator('#lang').selectOption({ label: 'Python' });
    await page.locator('#country').selectOption({ index: 2 });
    await page.selectOption('#fruits', 'Mango');

});
test('Multi Select dropdown Test', async ({page}) => {
    await page.goto('https://leafground.com/checkbox.xhtml');

   
  await page.getByRole('list').filter({ hasText: /^$/ }).click();
  await page.getByRole('listitem').filter({ hasText: 'London' }).locator('div').nth(2).click();
  await page.getByRole('listitem').filter({ hasText: 'Paris' }).locator('div').nth(2).click();
  

});
test('File Download', async ({page}) => {
    // Navigate to the page
    await page.goto('https://demoqa.com/upload-download');

    // Click on the download link
    const [download] = await Promise.all([
        page.waitForEvent('download'),  
        page.locator('#downloadButton').click(),
    ]);

    // await download.saveAs('Jayeshdownloaded-file.txt'); // Save the downloaded file with a specific name
    // expect(fs.existsSync('Jayeshdownloaded-file.txt')).toBeTruthy();
    // Save the downloaded file
    const path = await download.path();
    console.log(`File downloaded to: ${path}`);
});
test('File Upload', async ({page}) => {
    // Navigate to the page
    await page.goto('https://demoqa.com/upload-download');

    // Upload a file
    const filePath = path.resolve(__dirname, '../test-results.xml'); 
    console.log('File path is :', filePath)
    await page.setInputFiles('#uploadFile', filePath);
    await page.locator('#uploadFile').click();

    // Verify the uploaded file name
});
test('New Window Handle', async ({ page, context }) => {
    // Navigate to the page
    await page.goto('https://vinothqaacademy.com/multiple-windows/');

    // Click on the "New Window" button
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#button1').click(),
    ]);

    await newPage.waitForLoadState();
    await newPage.getByPlaceholder('Name').fill('Jayesh');
    await newPage.getByPlaceholder('Role').fill('QA Engineer');
    await newPage.locator('#emailInput').fill('jayesh@gmail.com');
    await newPage.getByPlaceholder('Location').fill('India');
    await newPage.getByPlaceholder('Department').fill('Testing');
    await newPage.getByRole('button', { name: 'Add Row' }).click();

});