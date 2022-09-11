// access to some specific function of fs module
const { readFileSync, writeFileSync } = require('node:fs')

console.log('Start')

// access to all using fs
const fs = require('node:fs')
fs.readFileSync

// DANGEROUS this is reading one by one blocking resources and other users

const first = readFileSync('./content/first.txt', 'utf-8')
const seconds = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
    './content/result-sync.txt', 
    `Here is the requslt ${first}, ${seconds}`,
    { flag: 'a' }
)

console.log('Done with this task')

console.log('Starting next task')