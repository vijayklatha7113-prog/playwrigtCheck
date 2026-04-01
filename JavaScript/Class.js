class Test
{
    constructor(name,age){
    this.name=name;
    this.age=age;
    }

greet(){
    console.log("Class " +this.name+" "+this.age);
    
}
}
let p1 = new Test("Vijay", 25);

console.log(p1.name); // Vijay
p1.greet();           // Hello Vijay

