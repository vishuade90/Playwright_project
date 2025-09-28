import { test, expect } from '@playwright/test';
test('webtable pagination', async ({ page }) => {

    await page.goto('https://datatables.net/examples/basic_init/alt_pagination.html');

    //pagination
    //await page.locator('')
    await page.getByRole('link', { name: '3', exact: true }).click();
    //await page.getByRole('button', { name: '6', exact: true }).click();
    await page.waitForTimeout(2000);

});
