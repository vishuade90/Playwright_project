
//-----------------remove duplicate character and find unique character-----------------
function getUniqueChars(str: string): string {
  let result = '';
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      result += char;
    }
  }
  return result;
}
// Example usage
console.log(getUniqueChars("vishal"));        // Output: "vishal"
console.log(getUniqueChars("aabbccdde"));     // Output: "e"
console.log(getUniqueChars("abcabcxyz"));     // Output: "xyz"
//-----------------Armstrong number-----------------        
function isArmstrong(num: number): boolean {
  let sum = 0;
  let temp = num;
  const digits = num.toString().length;
  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}
// Example usage
console.log(isArmstrong(153));   // true
console.log(isArmstrong(123));   // false
console.log(isArmstrong(9474));  // true
//-----------------Reverse string-----------------
function reverseString(input: string): string {
  return input.split('').reverse().join('');
}
// Example usage
console.log(reverseString("vishal"));        // Output: "lahsiv"
console.log(reverseString("TypeScript"));    // Output: "tpircSpeyT"
console.log(reverseString("12345"));    

//--------
function countCharacters(str: string): Record<string, number> {
  const count: Record<string, number> = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  return count;
}

// Example usage
const result = countCharacters("viiishal1222334");
console.log(result);
