let name="Vijay K"
console.log(typeof name);

let Lname=new String("Vijay K")
console.log(typeof Lname);


// String method use//

let FName="My name is Vijay K"

console.log(FName.length);

console.log(FName[4]);

console.log(FName.includes("Vijay"));

console.log(FName.includes("vijay"));

console.log(FName.startsWith("My"));

console.log(FName.endsWith("K"));

console.log(FName.split(" "));

console.log(FName.toLowerCase());

console.log(FName.toUpperCase());

console.log(FName.trim());

console.log(FName.replace("K","CEO"));

console.log(FName);


// To check conversion//

let Check="Total price is 201 Item"

let value = Check.split(" ")[3]
console.log(typeof value);

let price=parseInt(value)
console.log(typeof price);
console.log(price);

if(price==200){
    console.log("Pass");

}
    else {
        console.log("Fail");
        
    }


let msg=`Final \tamount is 300 \nUSD`
console.log(msg);

let newMsg='Final amount is "500" INR'
console.log(newMsg);

let newMsg1 = `Final amount is 
"500" INR`;
console.log(newMsg1);

let x=100

let newMsg2=`Final amount is ${x} INR`
console.log(newMsg2);















