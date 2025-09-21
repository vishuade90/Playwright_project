
class Calculator {
  // Method Overloads (Signatures)
  add(a: number, b: number): number;
  add(a: string, b: string): string;

  // Single Implementation
  add(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculator();

console.log(calc.add(10, 5));         // Output: 15
console.log(calc.add("Hello, ", "TS")); // Output: Hello, TS
