
import { test, expect } from '@playwright/test';

test('overridung', async({page}) => {
class Animal {
  sound() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.sound(); // Dog barks

});