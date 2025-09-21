import {test,expect}from '@playwright/test';
test.describe.only('Payment Flow', () => {
test.fail('has title 1', async ({ page }) => {
   
  console.log('test 1');
});
test('has title 2', async ({ page }) => {
  // test.skip(UserName === 'Jayesh', 'Skipping test for admin user');
  
  console.log('test 2');
});
});

test.describe('Purchase flow', () => {
test.fixme('has title 3', async ({ page }) => {
  
  console.log('test 3');
});
test.only('has title 4', async ({ page }) => {

  console.log('test 4');
 });
 test('has title 5', async ({
page }) => {

  console.log('test 4');
 });})