function sayHello()
{
    console.log("Hello CEO Vijay");
    
}
sayHello()

console.log("===========");
function showName(fname,lname){
    return fname+" "+lname
}
console.log( showName("Vijay","CEO"));
console.log(typeof showName);


let myfuc=function f1()
{
    console.log("I am Fan");
    return 30
    
}
let result=myfuc()
console.log(result);

console.log("=====================");

let f2=function f2(n1,n2,n3)
{
    return n1+n2+n3
}
console.log(f2(10,5,20));


let arr=[2,3,f1=function()
    {
        console.log("I am Vijay");
        
    }
]
let y=arr[2]
y()

let z=(x1,x2) =>
{
    console.log("Hello JS");
    return x1*x2
}
console.log(z(2,3));

console.log("===========================");

let myaddres=() =>
    console.log("Bangalore");
myaddres()
    
let myFamily=(Mother,Father) => console.log(`${Mother} ${Father} Vijay`);

myFamily("Latha","Kumar")

