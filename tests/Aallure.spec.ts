import {test, expect} from '@playwright/test';

test('Mouse Events', async ({ page }) => {

    //Navigate to the page
    await page.goto('https://vinothqaacademy.com/mouse-event/');

    //page scroll
    await page.mouse.wheel(1000, 1000);
    await page.mouse.move(10000, 10000);

   // page scrolling
    await page.evaluate(() => {
        window.scrollBy(1000, 1000);
    });
    await page.evaluate(() => {window.scrollTo(0, document.body.scrollHeight);});
    await page.evaluate(() => {window.scrollTo(0, 0);});
    //await page.locator('//i[@class="fa fa-search"]').scrollIntoViewIfNeeded();

    //mouse drag and drop
    await page.dragAndDrop('#draggableElement', '#droppableElement');

    //mouse hover
    await page.getByText('Demo Sites').nth(1).hover();

    //mouse click
    await page.getByTitle('Enter First Name').click();

    //await page.waitForTimeout(20000);

    await page.getByTitle('Enter First Name').fill('Jayesh');

    //mouse double click
    await page.getByText('Double Click Me').dblclick();

    //mouse right click
    await page.getByText('Right Click Me').click({ button: 'right' });

    await page.getByText('Alert Popup').click();
});
test('Keyboard Events', async ({ page }) => {


    //Navigate to the page
    await page.goto('https://vinothqaacademy.com/demo-site-keyboard-events/');

    //keyboard page scroll
    await page.keyboard.press('PageDown');
    await page.keyboard.press('PageUp');

    await page.locator('#search-box').click();
    await page.keyboard.type('Jayesh',{delay: 200});
    

    for (let i = 0; i < 6; i++) {
        await page.keyboard.press('Backspace');
    }
    await page.keyboard.type('JAVA', {delay: 200});
    
    //click down arrow key
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    //Keyboard events

});
test('Radio Button', async ({ page }) => {

    //Navigate to the page
    await page.goto('https://vinothqaacademy.com/demo-site/');
    //Select radio button
    await page.locator('#vfb-31-2').check();
    //await page.getByRole('radio', { name: 'like' }).click();
    //Verify radio button is checked    
    const isChecked = await page.locator('#vfb-31-2').isChecked();
    expect(isChecked).toBeTruthy();

});
test('Checkbox', async ({ page }) => {

    //Navigate to the page
    await page.goto('https://vinothqaacademy.com/demo-site/');

    //Verify checkbox is checked    
    const isChecked = await page.locator('#vfb-20-3').isChecked();
    expect(isChecked).toBeTruthy();

    //Select checkbox
    await page.locator('#vfb-20-0').check();
    
    
    //Uncheck checkbox
    await page.locator('#vfb-20-3').uncheck();       
    //Verify checkbox is unchecked
    const isUnchecked = await page.locator('#vfb-20-3').isChecked();
    expect(isUnchecked).toBeFalsy();    
});

test('Alerts', async ({ page }) => {

    //Navigate to the page
    await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html');
    
    //alert box
    await page.locator('#alertexamples').click();
    page.on('dialog', async (dialog) => {
        console.log('Alert box text is : ',dialog.message());
        await dialog.accept();
    });
    //Confirm box
    await page.locator('#confirmexample').click();
    page.on('dialog', async (dialog) => {
        console.log('Confirm box text is : ',dialog.message());
        if(dialog.type() === 'confirm') {
            
            await dialog.dismiss();
        }
    })
    //Prompt box
    await page.locator('#promptexample').click();
     page.on('dialog', async (dialog) => {
        console.log('Prompt box text is : ',dialog.message());
        if(dialog.type() === 'prompt') {
            //await dialog.dismiss();
            await dialog.accept('Jayesh');
        }
    });
});
test('Check', async ({ page }) => {


    await page.goto('https://magento.softwaretestingboard.com/');
    await page.locator('#ui-id-5').click();
    const abc = await page.getByLabel('Men').first();
    await expect(abc).toContainText('Men');
    console.log('Verified');
});