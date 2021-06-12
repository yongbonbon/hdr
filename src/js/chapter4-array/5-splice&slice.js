let arr = [1, 2, 3, 4, 5];
let hd = arr.slice(1, 2); //从索引1开始截到2，返回一个新数组，不改变原数组；如果没传参数，则截取所有数；若传一个数，则从当前索引出截到末尾
console.log(hd);
console.table(arr);

let arr = [1, 2, 3, 4, 5];
let hd = arr.splice(0, 3, "hdcms", "houudnren"); //从索引0开始，截取多少位，改变原数组，后面可传参数继续在原位置进行填充
console.log(hd);
console.table(arr);

//splice()可实现增删改
let arr = [1, 2, 3, 4, 5];
//arr.splice(0,0,'dd'); //添加到首
arr.splice(1, 0, "xxx2");
console.log(arr);

//移动数组封装函数
const move = (array, from, to) => {
  if (from < 0 || to >= array.length) {
    console.error("参数错误");
    return;
  }
  const newArray = [...array];
  let item = newArray.splice(from, 1);
  console.log(newArray);
  newArray.splice(to, 0, ...item);
  return newArray;
};
let arr = [1, 2, 3, 4, 5];
console.table(move(arr, 1, 3));
