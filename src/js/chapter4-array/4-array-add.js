let array = ['hdcms', 'houdunren'];
array[array.length] = 'cms';
array[array.length] = 'shop';
console.table(array);

let hd = ['shop', 'cms'];
array = [...array, ...hd];
console.table(array); 

let length = array.push('live', ...hd);
console.table(array)
console.log(length);

rangeArray = (begin, end) => {
    const array = [];
    for (let i = begin; i <= end; i++) {
        array.push(i);
    }
    return array;
}
console.table(rangeArray(11, 14));

let array = ['hdcms', 'houdunren'];
let vars = array.shift(); //从前面弹出
console.log(vars);
console.log(array);
let length = array.unshift('后的内容'); //从前面压入
console.log(array);
console.log(length);
let vars2 = array.pop(); //从后面弹出
console.log(vars2);
console.table(array);

console.table(Array(5).fill('inter'));
console.table([1, 2,3,4,].fill('milan',1,3))