let obj1={}
console.log(typeof obj1);

let obe2={
    "Name":"Vijay",
    "Role":"QA Tester",
    "Company":"UST",
    status:true
}
console.log(typeof obe2);
console.log(obe2);

console.log(obe2.Name);
console.log(obe2.Company);
console.log(obe2.status);
console.log(obe2["Name"]);

obe2.salary=100
obe2.exp=2
console.log(obe2);

delete obe2.salary
console.log(obe2);

let obj3={"State":"TN","COutry":"IN"}


obe2.fullAddress=obj3
console.log(obe2);

obe2.MyFamily=["MA","BA"]

console.log(obe2);

console.log(obe2.fullAddress.COutry);

console.log("=====================");


let mukesh=obe2
console.log(typeof obe2);
console.log(mukesh);
console.log("=================");

delete mukesh.fullAddress
console.log(obe2);


obe2.SameRDM="RANDOM"
console.log(mukesh);
