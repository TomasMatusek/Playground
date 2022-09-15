const http = require('node:http')

// Emitter
const server = http.createServer()

// Listener
// Alternative using events
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5001)
