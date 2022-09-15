const http = require('node:http')
const fs = require('node:fs')

http.createServer(function(req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf-8')
    // res.end(text)

    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8')
    fileStream.on('open', () => {
        // Write stream -> response
        // Developer Tool -> Network -> Response Headers: Transfer-Encoding: chunked
        // File is not send in one huge chunk but in more smaller chunks
        fileStream.pipe(res)
    })
    fileStream.on('error', error => {
        res.end(error)
    })
})
.listen(5001)