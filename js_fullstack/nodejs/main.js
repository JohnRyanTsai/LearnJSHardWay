'use strict';

// var greet = require('./hello');

// var name = 'John';

// greet(name);

// var basic_module = require('./basic_module');
// basic_module();

// var fs_main = require('./fs');
// fs_main();

// var stream_main = require('./stream');
// stream_main();

var crypto_main = require('./crypto');
crypto_main();


//模块加载机制:CommonJS规范
//http://javascript.ruanyifeng.com/nodejs/module.html
//每个js文件都是一个模块，内部使用的变量名和函数名都互不冲突

//一个模块想要对外暴露变量，可以用module.exports = variable
//一个模块要引用其他模块暴露的变量,用var ref = require('module_name')
