const http = require('node:http')

const server = http.createServer((req,res) => {
    console.log('User hit the server')
}).listen(5002)