let arr = [1, 3, 4, 2, 8, 22, 9];
arr = arr.sort((a, b) => {
    //a-b为从小到大，b-a为从大到小
    return b - a;
})
console.log(arr);

let cart = [
    { name: 'imac', price: 12000},
    { name: 'huawei', price: 18000},
    { name: 'ipad', price: 32000},
];
cart.sort((a, b) => {
    return a.price - b.price;
});
console.table(cart);

//自定义排序
let arr = [1, 5, 3, 9, 7];
const sort = (array) => {
    for (const n in array) {
        for(const m in array) {
            if(array[n] < array[m]) {
                const temp = array[n];
                array[n] = array[m];
                array[m] = temp;
            }
        }
    } 
    return array;
}
console.table(sort(arr));

//使用callback
let arr = [1, 5, 3, 9, 7];
function sort(array, callback) {
    for(const n in array) {
        for(const m in array) {
            if(callback(array[n], array[m]) < 0) {
                const temp = array[n];
                array[n] = array[m];
                array[m] = temp;
            }
        }
    }
    return array;
}
arr = sort(arr, function(a, b) {
    return a - b;
});
console.table(arr);