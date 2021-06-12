let hd = 'houdunren.com';
//slice substr substring
console.log(hd.slice(1)); //oudunren.com
console.log(hd.substring(1)); //oudunren.com
console.log(hd.substr(1)); //oudunren.com

//substr第二个参数为截取到哪，包含.而slice和substring第二个参数为截取多少位
let hd2 = 'houdunren.com';
console.log(hd2.slice(1, 3)); //ou
console.log(hd2.substring(1, 3)); //ou
console.log(hd2.substr(1, 3)); //oud   

//substring参数为负数时没有，从0开始
let hd3 = 'houdunren.com';
console.log(hd3.slice(-3 ,-1));
console.log(hd3.substring(-3, -1));
console.log(hd3.substr(-3 , 2));

const hd4 = 'houdunren.com';
if(hd4.indexOf('h') != -1) {
    console.log('find it');
}
//返回布尔值
console.log(hd4.includes('o',3));
console.log(hd4.lastIndexOf('o', 9)); //倒序查找

//判断该数组是否出现该string
const word = ['java', 'css'];
const string = '我喜欢学习java和css';
const status = word.some(word => {
    console.log(word);
    return string.includes(word);
})
if(status) {
    console.log('find keywords');
}

console.log('*'.repeat(3));
const phone = (mobile, len = 3) => {
    return String(mobile).slice(0, len * -1) + '*'.repeat(len);
}
console.log(phone(98765432101, 4));
