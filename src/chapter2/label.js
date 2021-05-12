//标签跳出外层循环
houdunren: for(let i = 0; i <= 10; i++) {
    hdcms: for(let j = 0; j <= 10; j++) {
        if(j % 2 == 0) {
            console.log(i, j);
        }
        if(i + j > 10) {
            break houdunren;
        }
    }
}