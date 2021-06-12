let houdunren = ["hdcms", "houdunren.com"];
for(let key in houdunren) {
    console.log(houdunren[key]);
}
const a = {
    d: 0,
    data: [1,2,3,4,5],
}
for(let key in a) {
    console.log(key);
    console.log(a[key]);
}

//for of直接遍历值
let houdunren2 = ["hdcms", "houdunren.com"];
for (const value of houdunren2) {
    console.log(value);    
}
const b = {
    d: 0,
    data: [1,2,3,4,5],
}
console.table(b);
for(let value of b) {
    console.log(value);
}
//for of不能直接遍历对象