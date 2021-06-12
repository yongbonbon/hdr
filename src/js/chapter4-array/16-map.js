let lessons = [
    { title: '媒体响应式布局', category: 'css' }, 
    { title: 'flex', category: 'css' },
    { title: 'mysql', category: 'mysql' },
];
let arr = ['hdcms', 'houdunren'];
// let hd = arr.map((value, index, arr) => {
//     value = `后盾人-${value}`;
//     return value;
// });
lessons.map(function(value) {
    value.click = 10;
})
//console.table(hd);
console.table(lessons);

