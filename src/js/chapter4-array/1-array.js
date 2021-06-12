const hd = [1,2,3,4,5];
console.log(hd);
console.table(hd);

let arr1 = new Array(6);
console.log(arr1.length);
console.table(arr1);
let arr = Array.of(6); 
console.log(arr.length);
console.table(arr);

let hd = [1,2,3,4,].join('-');
let hd2 = '1,2,3,4,'.split('-');
console.log(typeof hd);
console.log(hd2);
console.log(location.href + "?id=" + hd);

let arr = ['java', 'js'];
let hd = ['php', 'html'];
// for (const value of hd) {
//     arr.push(value);    
// }
// console.table(arr);
arr = [...arr, ...hd];
console.table(arr);

const sum = (...args) => {
    console.log(args);
    return args.reduce(function (s, v) {
        return (s += v);
    }, 0);
}
console.log(sum(1, 2,3, 4, 5));