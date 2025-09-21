
import{test,expect} from '@playwright/test';

test('loops', async({page}) => {
class MathOps {
  add(a: number, b: number): number;
  add(a: string, b: string): string;

  add(a: any, b: any): any {
    return a + b;
  }
}

const obj = new MathOps();

console.log(obj.add(2, 3));           // 5
console.log(obj.add("Hi ", "TS"));    // Hi TS
});
// MathOps class has an add method.
// The method is overloaded: it can take two numbers or two strings.
// The actual implementation uses any type and returns a + b, which works for both numbers and strings.