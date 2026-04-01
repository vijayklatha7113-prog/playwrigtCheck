class Vehicle {
    start() {
        throw new Error("Method 'start()' must be implemented");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Car starts with key");
    }
}

let c = new Car();
c.start(); // Car starts with key