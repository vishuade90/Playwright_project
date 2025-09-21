import {test,expect}from '@playwright/test';
test.beforeEach('Hooks2',async({page})=>{

console.log('i am softwear developer');
});

test.afterEach('Hooks1',async({page})=>{

console.log('i am softwear developer2');
});

