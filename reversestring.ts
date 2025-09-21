// function reverseString(str: string): string {
//     return str.split("").reverse().join("");
// }
// let inputString: string = "Hello";
// let reversedString: string = reverseString(inputString);
// console.log(reversedString);


console.log("------------Reverse string--------------");
//revers string
function reverseString(str: string): string {
    let reversed: string = "";  
    for (let i=str.length - 1; i >= 0; i--  ) { 
        reversed =reversed+ str[i];
    }
    return reversed;
}
console.log("reverse string",reverseString("Hello"));

console.log("------------Armstrong--------------");

function isarmstring (num: number): boolean {
    const numstr: string = num.toString();
    const digit = numstr.split("");
    console.log("received number is ",digit);
    const power = digit.length;
    console.log("number of digit are ",power);
    let sum: number = 0;
//    for (let i=0; i < digit.length; i++) {
for(let vishal of digit){
    sum = sum+Math.pow(parseInt(digit[vishal]), power);
}
console.log("sum of digit is ",sum);
return sum === num;
}
console.log("is armstrong number",isarmstring(153));


console.log("------------Remove duplcate finf unique character--------------");

function getUniqueCharacters(input: string): string {
  const seen = new Set<string>();
  let result = '';

  for (const char of input) {
    if (!seen.has(char)) {
      seen.add(char);
      result = result+char;
    }
  }

  return result;
}
// Example usage
console.log(getUniqueCharacters("aabbccddeeff")); // Output: "abcdef"
console.log(getUniqueCharacters("hello world"));  // Output: "helo wrd"
console.log(getUniqueCharacters("programming"));   // Output: "progamin"
    
