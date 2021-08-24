let symbol = Symbol("this is a Symbol type");
let hd = {
  name: "米兰",
  [symbol]: "hdr.com",
};
// 遍历不到symbol
// for (const key in hd) {
//   console.log(key);
// }

//只便利key
// for (const key of Object.getOwnPropertySymbols(hd)) {
//    console.log(key);
// }

//都能遍历到
// for (const key of Reflect.ownKeys(hd)) {
//   console.log(key);
// }

let site = Symbol("这是一个Symbol");
class User {
  constructor(name) {
    this.name = name;
    this[site] = "hdr";
  }
  getName() {
    return `${this[site]} ${this.name}`;
  }
}
let lisi = new User("李四");
console.log(lisi.getName());
for (const key in lisi) {
  console.log(key);
}
