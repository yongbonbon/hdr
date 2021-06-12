let arr = ['hdcms', 'houdunren'];
let keys = arr.keys();
console.log(keys.next());

let arr = ['hdcms', 'houdunren'];
let values = arr.values();
// console.log(values);
//{done: true, value: 'xxx'}
while(({ value, done } = values.next()) && done === false) {
    console.log(value);
}
for(const [key, value] of arr.entries()) {
    console.log(value);
}