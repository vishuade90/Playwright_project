import { test, expect } from '@playwright/test';
test('Date Picker', async ({ page }) => {

    //Navigate to the page
    await page.goto('https://demoqa.com/date-picker');

    //Select date from date picker
   const dateInput = page.locator('#datePickerMonthYearInput');

    await dateInput.click();
    await dateInput.fill('12/07/2025');
    await dateInput.press('Enter');

    //Verify selected date
    const selectedDate = await dateInput.inputValue();
    expect(selectedDate).toBe('12/07/2025');
})
test('Date picker with calendar', async ({ page }) => {

    //Navigate to the page
    await page.goto('https://vinothqaacademy.com/demo-site/');

    //Select date from date picker
    // await page.locator('.react-datepicker__input-container').click();
    // await page.locator('.react-datepicker__month-select').selectOption('0'); // January
    // await page.locator('.react-datepicker__year-select').selectOption('2024'); //
    // await page.locator('.react-datepicker__day--015').click(); // 15th day

      await page.getByRole('textbox', { name: 'Date of Demo' }).click();
     await page.getByTitle('Prev').click();
      await page.getByRole('link', { name: '8', exact: true }).click();
    //await page.locator('.react-datepicker__day--015').click(); // 15th day
});

test('Flatpick Date Picker', async ({ page }) => {

    //Navigate to the page
    await page.goto('https:flatpickr.js.org/examples/');

    page.on('dialog', async (dialog) => {
        console.log('Alert box text is : ',dialog.message());
        await dialog.accept();
    });

    //Select date from date picker
    await page.locator('.flatpickr').first().click();
    await page.getByRole('spinbutton', { name: 'Year' }).nth(1).click();
    await page.locator('.arrowUp').nth(1).click();
    // await page.getByLabel('Month').click(); // December
    // await page.getByLabel('Month').selectOption('11');
    await page.getByRole('combobox').nth(1).selectOption('9');
    await page.getByLabel('October 20, 2026').click(); 
    expect(page.locator('.flatpickr').first()).toHaveValue('2026-10-20');
    //await page.locator('.flatpickr').first().fill('2027-10-20');// 25th day
});
