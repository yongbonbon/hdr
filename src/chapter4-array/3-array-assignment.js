let arr = ['java', 2010];
// let name = arr[0];
// let year = arr[1];
let [name, year] = arr;
console.log(name, year);

const get = () => { 
    return ['java', 2012];
}
let [name, year] = get();
console.log(name);

console.log(...'hdcms');
const [...arr] = 'hdcms';
console.log(arr);

let [name, ...args] = ['java', 'hdcms', 111];
console.log(args);
let a = ['java', ...args];
console.log(a);