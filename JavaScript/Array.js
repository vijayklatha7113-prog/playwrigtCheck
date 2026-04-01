let arr=[1,3,"Vijay",-1,true]
console.log(arr);

console.log(typeof arr);
console.log(arr[2]);
console.log(typeof arr[2]);
console.log(arr[1]);
console.log(arr.length);
console.log(arr[7]);
console.log(arr[arr.length-2]);

//add last arr

console.log(arr.push(100));
console.log(arr);

//add first arr

console.log(arr.unshift("CEO"));
console.log(arr);

//Remove last arra
console.log(arr.pop());
console.log(arr);


// Remove First Arr

console.log(arr.shift());
console.log(arr);

//Remove from specific

console.log(arr.splice(1,2));
console.log(arr);


console.log("=======================");

let arr2=[4,2,"Vijay",true,'c']
let arr3=["Vijay", "Testiung",-1]

arr2.push(arr3)
console.log(arr2);

console.log(arr2[5]);
console.log(arr2[5][1]);

let obj1={"Fname":"Vijay","LName":"CEO"}

arr2.push(obj1)
console.log(arr2);

console.log(arr2[6].Fname);
console.log(arr2[6]["LName"]);

console.log("====================");


let arr4=[3,'Done',"LOK",-1,true]

for(i=0;i<=arr4.length-1;i++)
{
    console.log(arr4[i]);
    
}












