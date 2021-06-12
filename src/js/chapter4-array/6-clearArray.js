let hd = [1, 2, 3, 4, 5];
hd = []; //创建新的空数组
hd.length = 0; //在原数组基础上改变
hd.splice(0, hd.length);
while (hd.pop()) {}

let str = "hdcms, houdunren";
let hd = str.split(",");
console.table(hd);
console.log(hd.join("-"));

let arr = ["hdcms", "houdunren"];
let hd = [1, 2, 3, 4, 5];
let cms = ["shop", "cms"];
//arr = arr.concat(hd, cms);
arr = [...arr, ...hd, ...cms];
console.log(arr);

//copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
let hd = [1, 2, 3, 4, 5, 6];
console.table(hd.copyWithin(3, 1, 3)); //要复制的起始位置，复制目标的起点与终点
