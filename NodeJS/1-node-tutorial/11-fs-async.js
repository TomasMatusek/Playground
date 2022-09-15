const { readFile, writeFile } = require('node:fs')

const rightPath = './content/first.txt'
const rightPath2 = './content/second.txt'
const wrongPath = './content/NOTfirst.txt'

// CALLBACK HELL - but non-blocking - [Promises + Async + Wait] alternative is better approach

console.log('Start')
readFile(rightPath, 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;

    readFile(rightPath2, 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;     

        writeFile(
            './content/result-async.txt', 
            `Here is the requslt ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('Done with this task')
            }
        )
    })
})

console.log('Starting next task');