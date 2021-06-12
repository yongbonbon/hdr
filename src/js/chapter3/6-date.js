//object
const date = new Date();
console.log(date);
console.log(typeof date);
console.log(date * 1);

//string
const hd = Date();
console.log(hd);
console.log(typeof hd);
console.log(hd * 1);

//时间戳
const start = Date.now();
for (let i = 0; i < 200000000; i++) {}
const end = Date.now();
console.log((end - start) / 1000 + '秒');

console.time('for');
for (let i = 0; i < 200000000; i++) {}
console.timeEnd('for');

const date = new Date('1990-9-22 3:22:18');
console.log(date);
console.log(date.getMonth());

const date = new Date(1990, 2, 22, 13, 22, 19);
console.log(date);

const param = [1990, 2, 22, 13, 22, 19];
const date = new Date(...param);
console.log(date);

const date = new Date('1996-7-12 08:22:12');
console.log(date);
console.log(Number(date));
console.log(date.valueOf());
console.log(date.getTime());
const timestamp = date.valueOf()
console.log(timestamp);
console.log(new Date(timestamp));

//封装日期格式化函数
const dateFormat = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
    const config = {
        YYYY: date.getFullYear(),
        MM: date.getMonth(),
        DD: date.getDate(),
        HH : date.getHours(),
        mm : date.getMinutes(),
        ss : date.getSeconds(),
    };
    for(const key in config) {
        console.log(key);
        console.log(config[key]);
        format = format.replace(key, config[key]);
    }
    return format;
}
const date = new Date('1992-2-12 10:22:12');
console.log(dateFormat(date, 'YYYY年MM月DD日'));