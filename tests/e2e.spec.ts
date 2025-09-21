
import {test, expect} from '@playwright/test';
import { HomePage } from '../pagesdemo/homepage';


test('User Navigates to Men Page', async ({ page }) => {
  
  const homePage = new HomePage(page);

  // Navigate to the base URL
    await homePage.goto('/');
    console.log('Navigated to base URL');   
  
    await homePage.searchepage
    const xyz = await homePage.verifymainpage();
    await expect(xyz).toContainText('Mobiles');
    console.log('Verified');

});
