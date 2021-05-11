"use strict";

const HOST = {
    url: 'http://www.houdunren.com/api',
    port: 443,
};

Object.freeze(HOST);

HOST.port = 80;
console.log(HOST);