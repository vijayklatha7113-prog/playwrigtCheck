const os=require("os")

const assert=require("assert")

console.log(os.type());
console.log(os.platform());
console.log(os.hostname());

assert(50>60,"Value is not greater")
