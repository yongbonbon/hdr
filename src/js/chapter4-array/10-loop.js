let lessons = [
    { title: '媒体响应式布局', category: 'css' }, 
    { title: 'flex', category: 'css' },
    { title: 'mysql', category: 'css' },
];
for(let i = 0; i < lessons.length; i++) {
    lessons[i].title = `后盾人${lessons[i].title}`;
}
for (const value of lessons) {
    value.title = `bonbon${value.title}`;
}
for(const key in lessons) {
    lessons[key].title = `www${lessons[key].title}`;
}
console.table(lessons);
