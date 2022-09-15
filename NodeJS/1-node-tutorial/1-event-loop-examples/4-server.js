const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log('Request event')
    res.end('Hello World')
})

// Synchronous so process will stay alive
// Event Loop is just waiting for request to come in
server.listen(5001, () => {
    console.log('Server lsitening on port: 5001')
})