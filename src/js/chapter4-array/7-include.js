let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(2)); //返回索引
if(arr.indexOf(2) != -1) {
    console.log('find it');
}

console.log(arr.includes(2)); //返回布尔值
console.log(arr.includes(399));
if(arr.includes(399)) {
    console.log('find it');
}

//自定义includes
let arr = [1, 2, 3, 4, 5];
const includes = (array, find) => {
    for(const value of array) {
        if(value === find) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(includes(arr, 99));