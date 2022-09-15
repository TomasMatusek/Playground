// STREAMS
// Use to read or write sequentially
// Manipulate or handle streaming data -> e.g. reading big file
// If file is way too big it can't be hold in one variables due to error and memory consumption

const { writeFileSync } = require('node:fs')
for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `Hello World ${i}\n`, { flag : 'a' })
}