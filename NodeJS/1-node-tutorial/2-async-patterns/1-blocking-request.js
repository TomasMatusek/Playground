const http = require('node:http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('Home Page')
        return
    }
    if (req.url === '/about') {
        // Blocking code - this will block all other users
        // Java is spamming new thread for each request, but NodeJS is single threded !!!
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
        return
    }
    res.end('Error Page')
})

server.listen(5001, () => {
    console.log('Server lsitening on port: 5001')
})