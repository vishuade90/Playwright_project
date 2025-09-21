import {test,expect}from '@playwright/test';
test.beforeEach('tags',async({page})=>{

console.log('vishal');
});
test('tags3',async({page})=>{

console.log('vishal123');
});
test.afterAll('tags2',async()=>{

console.log('vishal12');
});
