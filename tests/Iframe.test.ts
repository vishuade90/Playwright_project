//iFrame handling
import { test, expect } from '@playwright/test';
test('iFrame handling', async ({ page }) => {
    await page.goto('https://demoqa.com/frames');

    
    // const framV = page.frame('frame1');

    const frame1 = page.frameLocator('#frame1');
   // console.log('Frame 1 Text:', frame1);
    const insideFrame = frame1.locator('#sampleHeading');
    //console.log('Inside frame Text:', insideFrame);
    await expect(insideFrame).toHaveText('This is a sample page');
    //expect(page.locator('#sampleHeading')).toHaveText('This is a sample page');

    expect(await page.frameLocator('#frame2').locator('#sampleHeading').textContent()).toBe('This is a sample page');
});
//Nested iFrame handling
test('Nested iFrame handling', async ({ page }) => {

    await page.goto('https://demoqa.com/nestedframes');
    
    const abc = await page.frameLocator('#frame1').frameLocator('iframe').locator('body').textContent();
    console.log('Child frame text is : ',abc);
    //console.log();
    expect(abc).toContain('Child Iframe');
    console.log('Nested frame text verified successfully');

});
test('Nested iFrame handling workaround', async ({ page }) => {

    await page.goto('https://demoqa.com/nestedframes');

    const parentFrame = page.frameLocator('#frame1');
    const childFrame = parentFrame.frameLocator('iframe');

    const childFrameText = childFrame.locator('body');
    await expect(childFrameText).toHaveText('Child Iframe');

    const parentFrameText = parentFrame.locator('body');
    await expect(parentFrameText).toContainText('Parent frame');


});
test('First test case', async ({ page }) => {

    await page.goto('https://demoqa.com/nestedframes');
    
    const abc = await page.frameLocator('#frame1').frameLocator('iframe').locator('body').textContent();
    console.log('Child frame text is : ',abc);
    //console.log();
    expect(abc).toContain('Child Iframe');
    console.log('Nested frame text verified successfully');

}); 