/**
 * NPM - node package manager
 * npm --version
 * 
 * LOCAL - used only in this particular project
 * npm i <pakageName>
 * npm install <pakageName>
 * 
 * GLOBAL - use it in any project
 * sudo npm install -g <packageName>
 * 
 * package.json - manifest file (store important info about project/packages)
 * npm init (create package.json step by step)
 * npm init -y (everything default)
 * 
 * node_modules - contains all dependencies + dependencies of your dependencies
 */

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)