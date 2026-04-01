class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

let a1 = new Dog();
let a2 = new Cat();

a1.speak(); // Dog barks
a2.speak(); // Cat meows

class Calculator {
    add(a, b, c) {
        if (c !== undefined) {
            return a + b + c;
        }
        return a + b;
    }
}

let calc = new Calculator();

console.log(calc.add(2, 3));      // 5
console.log(calc.add(2, 3, 4));   // 9