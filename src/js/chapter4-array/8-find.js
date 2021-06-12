let arr = ['java', 'js', 'jsx', 'php', 'html'];
let res = arr.find((item) => {
    //console.log(item);
    //return true;
    return item == 'js';
})
console.log(res);

//includes对于引用类型处理存在问题，find比较的是内存地址
let lessons = [{ name: 'js'}, { name: 'jsx' }, { name: 'css'}];
console.log(lessons.includes({name:'js'})); //false;
let status = lessons.find((item) => {
    return item.name == 'css';
});
console.log(status); 

//返回索引
let index = lessons.findIndex((item) => {
    return item.name == 'css';
})
console.log(index);

//自定义find函数
const find = (array, callback) => {
    for(const value of array) {
        if(callback(value)) {
            return true;
        }
    }
    return undefined;
}

let arr = [1, 2, 3, 4, 5];
console.log(find(arr, (item)=>{
    return item == 2;
}));

//使用原型链
Array.prototype.findValue = function(callback) {
    for(const value of this) {
        if(callback(value)) {
            return true;
        }
    }
    return undefined;
};

const res = arr.findValue((item) => {
    return item == 2;
})
console.log(res);
