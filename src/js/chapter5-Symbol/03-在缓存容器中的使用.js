class Cache {
  static data = {};
  static set(name, value) {
    return (this.data[name] = value);
  }
  static get(name) {
    return this.data[name];
  }
}
Cache.set("hdcms", "houdunren");
console.log(Cache.get("hdcms"));

let user = {
  desc: "用户资料",
  key: Symbol("资料"),
  name: "apple",
};
let cart = {
  name: "apple",
  desc: "购物车",
  key: Symbol("资料"),
};
Cache.set(user.key, user);
Cache.set(cart.key, cart);
console.log(Cache.get(user.key));
