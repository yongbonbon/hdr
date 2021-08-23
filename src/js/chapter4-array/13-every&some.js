let arr = ['hdcms', 'houdunren'];
let status = arr.every((value, index, arr) => {
    console.log(value);
    return false;
});
console.log(status);

/**
 * every() 方法用于检测数组所有元素是否都符合指定条件
 * 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
   如果所有元素都满足条件，则返回 true。
 */
const user = [
    { name: '李四', js: 89 },
    { name: '张三', js: 99 },
    { name: '马六', js: 65}, 
]
const res = user.every((item) => {
    return item.js >= 60;
});
console.log(res ? '全部同学合格': '有同学没有合格');

/**
 * every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。
   some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true
 */

/**
 * some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
   some() 方法会依次执行数组的每个元素：
   如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
   如果没有满足条件的元素，则返回false。
 */
let arr = ['hdcms', 'houdunren'];
let res = arr.some((item) => {
    // console.log(item);
    // return false;
    return item === 'hdcms';
})
console.log(res);