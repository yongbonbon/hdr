let arr = [1, 1, 1, 1];
console.table(arr);

let set = new Set();
set.add("1");
set.add(1);
console.log(set);

let set = new Set([1, 1, 2, 3, 4, 5]);
console.log(set);

//对象的key会转为字符串
let obj = {
  1: "hdcms",
  1: "houdunren",
};
obj[1] = "houdu";
console.log(obj);
let hd = {
  [obj]: "hdr",
};
console.log(hd.toString());
console.log(hd[obj.toString()]);
