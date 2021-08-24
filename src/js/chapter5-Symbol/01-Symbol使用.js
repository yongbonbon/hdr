//声明方式一
let hd = Symbol("国际米兰");
let edu = Symbol("是冠军");
// console.log(hd === edu); false
console.log(hd.toString());
console.log(hd.description);

//声明方式二  引用 可反复使用
let cms = Symbol.for("hdcms");
let edu = Symbol.for("hdcms");
//console.log(cms === edu);  true
console.log(Symbol.keyFor(cms))
let houdunren = Symbol('houdunren');
console.log(Symbol.keyFor(houdunren))