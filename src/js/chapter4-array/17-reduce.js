let arr = [1, 2, 3, 4, 5];
arr.reduce((pre, value, index, array) => {
    console.log(pre, value);
    return 99;
})
arr.reduce((pre, value, index, array) => {
    console.warn(pre, value);
    return 99;
}, 0);


let arr = [1, 2, 3, 1, 1];
function arrayCount(arr, item) {
    return arr.reduce(function(total, cur) {
        total += item == cur ? 1 : 0;
        return total;
    },0);
}
console.log(arrayCount(arr, 1));

let arr = [1, 2, 3, 1, 6];
function arrMax(arr) {
    return arr.reduce(function(pre, cur) {
        return pre > cur ? pre : cur;
    });
}
console.log(arrMax(arr));

let cart = [
    { name: 'John', price: 12000 },
    { name: 'Joe', price: 18000 },
    { name: 'ipad', price: 32000 },
];
const maxPrice = (cart) => {
    return cart.reduce((pre, value) => {
        return pre.price > value.price ? pre : value;
    });
};
console.log(maxPrice(cart));
const sum = (cart) => {
    return cart.reduce((total, cur) => {
        return (total += cur['price']);
    }, 0);
}
console.log(sum(cart));

/**
 * 获取商品超过15000元的名字
 */
 let cart = [
    { name: 'John', price: 12000 },
    { name: 'Joe', price: 18000 },
    { name: 'ipad', price: 32000 },
];
const getNameByPrice = (goods, price) => {
    return goods.reduce((arr, cur) => {
        if(cur.price > price) arr.push(cur);
        return arr;
    },[]).map(item => item.name);
}
console.table(getNameByPrice(cart, 15000));

/**
 * 去重
 */
let arr = [1, 2, 3, 3, 1, 4, 2];
let newArray = arr.reduce((arr, cur) => {
    if(arr.includes(cur) === false) {
        arr.push(cur);
    }
    return arr;
},[]);
console.table(newArray);

/**
 * 商品去重
 */
 let cart = [
    { name: 'John', price: 12000 },
    { name: 'Joe', price: 18000 },
    { name: 'ipad', price: 32000 },
    { name: 'Joe', price: 18000 },
    { name: 'ipad', price: 32000 },
];
const filterGoods = goods => {
    return goods.reduce((arr, cur) => {
        let find = arr.find(v => v.name == cur.name);
        if(!find) arr.push(cur);
        return arr;
    }, []);
}
console.table(filterGoods(cart));
