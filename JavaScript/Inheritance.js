class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

// Child class
class Employee extends Person {
    constructor(name, role) {
        super(name); // call parent constructor
        this.role = role;
    }

    work() {
        console.log(this.name + " is working as " + this.role);
    }
}

// Usage
let emp1 = new Employee("Vijay", "QA Engineer");

emp1.greet(); // from Parent
emp1.work();  // from Child