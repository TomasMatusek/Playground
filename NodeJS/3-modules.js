// CommonJS (NodeJS uses that under the hood) - every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const sayHi = require('./5-utils');
const { john, peter } = require("./4-names");
const names = require("./4-names");
require('./7-mind-grenade')

sayHi(john);
sayHi(peter);

sayHi(names.john);
sayHi(names.peter);