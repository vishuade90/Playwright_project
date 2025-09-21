import {test, expect} from '@playwright/test';

test('Amazon Search Test', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('iPhone 14');
    await page.locator('#nav-search-submit-button').click();
    const title = await page.title();
    console.log(title); 
    expect(title).toContain('iPhone 14');

});
test('Amazon Header', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    const headerCount = await page.locator('#nav-xshop-container').locator('li').count();
    console.log('Header count is :', headerCount);

    for (let i = 0; i < headerCount; i++) {
        const text = await page.locator('#nav-xshop-container').locator('li').nth(i).textContent();
        console.log(text?.trim);
    }

    // const expectedHeaders = ['Best Sellers', 'Mobiles', 'Customer Service', 'Electronics', 'Fashion', 'New Releases', 'Amazon Pay', 'Computers', 'Home & Kitchen'];
    // for (let i = 0; i < expectedHeaders.length; i++) {
    //     const actualHeader = await page.locator('#nav-xshop a').nth(i).textContent();
    //     expect(actualHeader).toBe(expectedHeaders[i]);
    // }

});
test('test header', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    const headerCount = await page.locator('#nav-xshop-container');
    
    const headers = await headerCount.locator('li').all();
    console.log('Total headers:', headers.length);

    const headerTexts = await Promise.all(headers.map(header => header.textContent()));
    console.log('Header Texts:', headerTexts.map(text => text?.trim())); // Trim whitespace
});
test('Amazon broken links', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    const brokenLinks = await page.$$eval('a', links => { links.map(a=>a.href); return links.map(a => a.href); });
    console.log('Total links:', brokenLinks.length);

    const validLinks = brokenLinks.filter(link => link && (link.startsWith('http') || link.startsWith('https')));
    console.log('Valid links:', validLinks.length);

    for (const link of validLinks) {
        try {
            const response = await page.request.get(link);
            if (response.status() >= 400) {
                console.log(`Broken link: ${link} - Status: ${response.status()}`);
            }
        } catch (error) {
            console.log(`Error accessing link: ${link} - Error: ${error}`);
        }
    }
});
test('Amazon broken links 2', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    const brokenLinks = await page.$$eval('a', links => { links.map(a=>a.href); return links.map(a => a.href); });
    console.log('Total links:', brokenLinks.length);

    const validLinks = brokenLinks.filter(link => link && (link.startsWith('http')));
    console.log('Valid links:', validLinks.length);

    const checkedLinks = new Set<string>();

    for (const link of validLinks) {
        if(!link.startsWith('http')) {
            continue; // Skip non-http(s) links
        }
        if(checkedLinks.has(link)) {
            continue; // Skip already checked links
        }
        checkedLinks.add(link);
        const res = await page.request.get(link);
        if (res.status() >= 400) {
            console.log('Broken link');
        }
        else{
            console.log('Valid link');
        }
    }
});

//write down for loop for me
test('Booking broken links 2', async ({ page }) => {

    await page.goto('https://www.booking.com/');

    const brokenLinks = await page.$$eval('a', links => { links.map(a=>a.href); return links.map(a => a.href); });
    console.log('Total links:', brokenLinks.length);

    const validLinks = brokenLinks.filter(link => link && (link.startsWith('http')));
    console.log('Valid links:', validLinks.length);

    const checkedLinks = new Set<string>();

    for (const link of validLinks) {
        if(!link.startsWith('http')) {
            continue; // Skip non-http(s) links
        }
        if(checkedLinks.has(link)) {
            continue; // Skip already checked links
        }
        checkedLinks.add(link);
        const res = await page.request.get(link);
        if (res.status() >= 400) {
            console.log('Broken link');
        }
        else{
            console.log('Valid link');
        }
    }
});

test('booking broken 3', async ({ page }) => {  
    await page.goto('https://demoqa.com/forms');

    const links = await page.locator('a').all();
    const brokenLinks: string[] = [];
    for (const link of links){
        const url = await link.getAttribute('href');
        if(!url || url.startsWith('javascript') || url.startsWith('#')) {
            continue; // Skip non-http(s) links
        }
        let abUrl = url.startsWith('http') ? url : new URL(url, 'https://www.booking.com/').toString();
        //https://www.booking.com/aboutUs
        try {
            const res = await page.request.get(abUrl);
            if(res.status() >= 400) {   
                brokenLinks.push(abUrl);
            }
        }
        catch{
                console.log(`Could not access ${abUrl}`);
            }
            finally{};
    }
    console.log('Total broken links:', brokenLinks.length);
});
test("Check broken links", async ({ page }) => {
  await page.goto("https://example.com");

  // Get all links
  const links = await page.$$eval("a", as => as.map(a => (a as HTMLAnchorElement).href));
  console.log(links);

  for (const link of links) {
    if (!link.startsWith("http")) continue; // Skip invalid ones

    const response = await page.request.get(link);  // Playwright's built-in API request
    if (response.status() >= 400) {
      console.log(`❌ Broken link: ${link} (status ${response.status()})`);
    } else {
      console.log(`✅ Valid link: ${link}`);
    }
  }
});
