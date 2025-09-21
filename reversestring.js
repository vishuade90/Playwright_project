// function reverseString(str: string): string {
//     return str.split("").reverse().join("");
// }
// let inputString: string = "Hello";
// let reversedString: string = reverseString(inputString);
// console.log(reversedString);
// //revers string
// function reverseString(str: string): string {
//     let reversed: string = "";  
//     for (let i=str.length - 1; i >= 0; i--  ) { 
//         reversed =reversed+ str[i];
//     }
//     return reversed;
// }
// console.log("reverse string",reverseString("Hello"));
console.log("------------armstrong--------------");
function isarmstring(num) {
    var numstr = num.toString();
    var digit = numstr.split("");
    console.log("received number is ", digit);
    var power = digit.length;
    console.log("number of digit are ", power);
    var sum = 0;
    //    for (let i=0; i < digit.length; i++) {
    for (var _i = 0, digit_1 = digit; _i < digit_1.length; _i++) {
        var vishal = digit_1[_i];
        sum = sum + Math.pow(parseInt(digit[vishal]), power);
    }
    console.log("sum of digit is ", sum);
    return sum === num;
}
console.log("is armstrong number", isarmstring(153));
console.log("------------remoce duplcate finf unique character--------------");
function getUniqueCharacters(input) {
    var seen = new Set();
    var result = '';
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (!seen.has(char)) {
            seen.add(char);
            result = result + char;
        }
    }
    return result;
}
// Example usage
console.log(getUniqueCharacters("aabbccddeeff")); // Output: "abcdef"
console.log(getUniqueCharacters("hello world")); // Output: "helo wrd"
console.log(getUniqueCharacters("programming")); // Output: "progamin"
