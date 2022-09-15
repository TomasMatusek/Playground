const { readFile, writeFile } = require('node:fs')
const util = require('node:util')

// 3) Load already existing functions
// const { readFilePromise1, writeFilePromise1 } = require('node:fs').promises

// 1) Created Promise wrapper manually 
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// 2) promissify co transform sync method inso async
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// getText('./content/first.txt')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Async execution using Promises
const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf-8')
        const second = await readFilePromise('./content/second.txt', 'utf-8')
        await writeFilePromise('./content/result-mind-granade.txt', `Result: ${first} + ${second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error);
    }
}

start()
console.log('Continue executing');