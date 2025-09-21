import {test,expect}from '@playwright/test';
test('broserlaunch',async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.getByText('Swag Labs')).toHaveText('Swag Labs');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    const product =page.getByText('Sauce Labs Bolt T-Shirt').first();
 //const product =page.getByText('Sauce Labs').first();
    await expect(product).toBeVisible();
 const priceLocator = page.locator('//*[@id="inventory_container"]/div/div[3]/div[2]/div[2]/div');
 //   const priceLocator = page.locator('//*[@id="inventory_container"]/div/div[2]/div[2]/div[2]/div');

 await expect(priceLocator).toBeVisible();
  const addToCartBtn = page.locator('//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]');
  await addToCartBtn.click();
  const removeBtn = page.locator('//*[@id="remove-sauce-labs-bolt-t-shirt"]');
  await expect(removeBtn).toBeVisible();
  await expect(removeBtn).toHaveText('Remove');
});


