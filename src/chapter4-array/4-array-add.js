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