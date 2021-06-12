//filter()返回过滤后的新数组
let arr = ['hdcms', 'houdunren'];
let newArray = arr.filter((value, index, arr)=> {
    return true;
})
console.log(newArray);

let lessons = [
    { title: '媒体响应式布局', category: 'css' }, 
    { title: 'flex', category: 'css' },
    { title: 'mysql', category: 'mysql' },
];
const cssLessons = lessons.filter(lesson => {
    return lesson['category'] === 'css';
})
console.table(cssLessons);

//自定义filter
let hd = [1, 2, 3, 4, 5];
const filter = (array, callback) => {
    let newArray = [];
    for (const value of array) {
        if(callback(value) === true) {
            newArray.push(value);
        }
    }
    return newArray;
}
console.log(filter(hd, (value) => {
    return value > 2
}));