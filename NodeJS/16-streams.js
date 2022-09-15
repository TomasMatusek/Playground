const { createReadStream } = require('node:fs')

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000 // size of buffer 
})

// Event
// @see https://nodejs.org/docs/latest-v16.x/api/stream.html#event-data
stream.on('data', result => {
    console.log(result)
})

stream.on('error', err => {
    console.log(err)
})

/**
 * 3 streams limite to 65486 bytes -> reading data in hcunks
 * default is 64kb
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 30 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 32 0a 48 65 6c 6c 6f 20 57 6f ... 65486 more bytes>
<Buffer 57 6f 72 6c 64 20 33 39 32 30 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 33 39 32 31 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 33 39 32 32 0a 48 65 6c 6c 6f ... 65486 more bytes>
<Buffer 6f 72 6c 64 20 37 37 37 35 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 37 37 37 36 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 37 37 37 37 0a 48 65 6c 6c 6f 20 ... 37768 more bytes>
 */