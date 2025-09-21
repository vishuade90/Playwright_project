// pages/homePage.ts
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  
  constructor(page: Page) {
    super(page);
  }
   
  async searchepage() {
//await this.page.locator("//*[@id='twotabsearchtextbox']").fill("iphone 14 pro max");
//const searchBox = this.page.locator('#twotabsearchtextbox');
const searchBox = this.page.getByPlaceholder("Search Amazon.in");
await searchBox.fill('sofas');
 await this.page.click('#nav-search-submit-button');
  }

  async verifymainpage() {
    return await this.page.locator("(//*[contains(text(),'Mobiles')])[2]");
  }
}
