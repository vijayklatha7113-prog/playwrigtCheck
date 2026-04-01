class Employee {
    #age;

    constructor(age) {
        this.#age = age;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        if (value > 18) {
            this.#age = value;
        } else {
            console.log("Age must be above 18");
        }
    }
}

let e = new Employee(25);

console.log(e.age); // getter
e.age = 30;         // setter