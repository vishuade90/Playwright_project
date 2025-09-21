import{test,expect} from '@playwright/test';
test('inheritance', async({page}) => {
class Animal {
  move() {
    console.log ("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}
// Example usage
const dog = new Dog();
dog.move();
dog.bark();

});

