import{test,expect} from '@playwright/test';

test('loops', async({page}) => {

for (let i = 0; i < 5; i++) {
    console.log("Count is: " + i);
}

   
})