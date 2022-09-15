/**
 * NPM - node package manager
 * npm --version
 * 
 * NPX (execute - package runner, feature introduced in npm 5.2+)
 * - to run npm command you need to install dependency first -> anoying
 * - to just test without eny setup you can run any command using npx directly in terminal
 * - ability to execute a package which wasn't previously installed (npm remote repository)
 * - e.g.: [user@machine] npx cowsay hello
 * 
 * LOCAL - used only in this particular project
 * npm i <pakageName>
 * npm install <pakageName>
 * 
 * GLOBAL - use it in any project
 * sudo npm install -g <packageName>
 * e.g. nodemon is usually used in all projects so make life easier it can be installed as global
 * e.g. framework CLI
 * 
 * PACAKGE.JSON
 * package.json - manifest file (store important info about project/packages)
 * package-lock.json - in ideal world package.json produce same node_modules but here can be differences in versions of NPM, update in library that uses other library
 *                   - file describes an exact, and more importantly reproducible node_modules tree
 * npm init (create package.json step by step)
 * npm init -y (everything default)
 * 
 *
 * 
 * NODE_MODULES
 * node_modules - contains all dependencies + dependencies of your dependencies
 * npm install - to install all dependencies from package.json 
 * npm uninstall <packageName> (OR remove dependenci from package.json + from node_modules and run: npm install -> remove cache issues)
 * 
 * DEV DEPENDENCIES - local host demon, in production we dont need that, AWS provide such a functionality
 * - testing, formatting, linting, compiling, TS -> JS
 * - dependencies usedduring development rather than library udes in production
 * npm i <packageName> -D (OR --save-dev)
 * 
 * SCRIPTS (package.json) - showrtcuts for running commands
 * npm run <scriptName>
 * 
 * Stopping deamon COMMAND+C
 * 
 */

 const _ = require('lodash')

 const items = [1,[2,[3,[4,5]]]]
 const newItems = _.flattenDeep(items)
 console.log(newItems)