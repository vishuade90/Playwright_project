// import { test } from "@playwright/test";

// test("Maximize browser using viewport null", async ({ browser }) => {
//   const context = await browser.newContext({
//     viewport: null, // disables viewport and uses full window
//   });

//   const page = await context.newPage();
//   await page.goto("https://www.testometer.co.in/v2.php/student-login");
//   await page.waitForTimeout(3000);
// });
import { chromium, test } from "@playwright/test";

test("Maximize using args", async () => {
  const browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"],
  });

  const context = await browser.newContext({
    viewport: null, // important with start-maximized
  });

  const page = await context.newPage();
  await page.goto("https://www.testometer.co.in/v2.php/student-login");
  await page.waitForTimeout(3000);
});
