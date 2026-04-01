for(let i=0;i<=5;i++)
{
    console.log("Value i is ",i);
    
}

let arr=[2,3,2,3,"Vijay",8]
console.log("Array Output");
for(let i=0;i<=arr.length-1;i++){
    console.log("Array Value ",arr[i]);
    
}
arr.forEach(Element =>
{
    console.log("Using for each ",Element);
    
})

for(let myarrvalue in arr)
{
 console.log("For Each ",myarrvalue);
 console.log("Array value ",arr[myarrvalue]);
 
 
}
console.log("=====================================");

let fname="Selenium Web"
for(x of fname)
{
    console.log(x);
    
}

let obj={"name":"Vijay",
    status:true
}
for(let x in obj){
    console.log(x);
    console.log(obj[x]);
    
    
}

let sum=5

while(sum<=10){
    console.log(sum);
    
    if(sum==10){
        break;
    }sum++
}