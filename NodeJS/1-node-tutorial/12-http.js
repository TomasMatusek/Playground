
/**
 * 1) Own modules
 * 2) Build in modules
 * 3) External modules (alias packages, dependnecies) - NPM
 */

 const http = require('node:http')

 const server = http.createServer((req, res) => {
     if (req.url === '/') {
         res.end('Welcome to home page')
         return
     }
     else if (req.url === '/about') {
         res.end('About page')
         return
     }
     res.end(`<h1>Ooops!</h1>`)
 });
 
 server.listen(5555)