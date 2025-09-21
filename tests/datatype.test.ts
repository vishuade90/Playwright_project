import {test,expect}from '@playwright/test';
//test('loops', async({page}) => {
test('datatype', async({page})=>{

/*Number-->Representing numeric value
 ex.let age:number =23;
String -->Representing test value
ex.let name:String ="john";
boolean-->Representing true or false values
let isadmin:boolean=true;
*/
/*complex data type
Array-->Representing a collection of values.
ex. let number:number[]=[1,2,3];
Tuple--> Representing an array with a fixed number of element
ex.let person:[String ,number]=["john",25];
*/
/*
let age:number=23;
console.log(age);
*/
let name:string="vishal ade";
//String concatenation
let greeeting:string="vijay "+name;
console.log(greeeting);
})




