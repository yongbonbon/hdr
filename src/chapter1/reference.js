//传值 传址
let a = 1;
let b = a;
console.log(a, b);
b = 3;
console.log(a, b);
let e = { name: "xxx" };
let f = e;
console.log(e, f);
f.name = "xxx2";
console.log(e, f);

let b = null;
console.log(typeof b);