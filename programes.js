function removeNumbers(input) {
    //return input.replace(/\d+/g, '');
    return input.replace(/[0-9]/g, '');
}
// Example usage
console.log(removeNumbers("vishal12345")); // Output: "vishal"
console.log(removeNumbers("abc123xyz456")); // Output: "abcxyz"
console.log(removeNumbers("123456")); // Output: ""
