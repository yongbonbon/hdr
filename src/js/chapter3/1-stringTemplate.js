let year = "1908年";
let site = "国际米兰";
console.log(`${site}成立于${year}`);

function show() {
  return "houdunren.com";
}
let hd = `www.${show()}`;
console.log(hd);
let hd2 = `www.${5 + 9}`;
console.log(hd2);

//标签模板
let name = "后盾人";
let website = "hou.com";
console.log(tag`在线教程${name},网址是${website}`);
function tag(strings, ...vars) {
  console.log(vars);
  console.log(strings);
}
