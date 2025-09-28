function reverseString(input) {
    return input.split('').reverse().join('');
}
// Example usage
console.log(reverseString("vishal")); // Output: "lahsiv"
console.log(reverseString("TypeScript")); // Output: "tpircSpeyT"
console.log(reverseString("12345")); // Output: "54321"
//-----------------remove duplicate character and find unique character-----------------
function getUniqueChars(str) {
    var result = '';
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            result += char;
        }
    }
    return result;
}
// Example usage
console.log(getUniqueChars("vishal")); // Output: "vishal"
console.log(getUniqueChars("aabbccdde")); // Output: "e"
console.log(getUniqueChars("abcabcxyz")); // Output: "xyz"
//-----------------Armstrong number-----------------        
function isArmstrong(num) {
    var sum = 0;
    var temp = num;
    var digits = num.toString().length;
    while (temp > 0) {
        var digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}
// Example usage
console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false
console.log(isArmstrong(9474)); // true
