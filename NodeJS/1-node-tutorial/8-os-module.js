const os = require('node:os')
const user = os.userInfo()

// info about current user
console.log(user)

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem()/1024/1024,
    freeMemory: os.freemem()/1024/1024 
}

console.log(currentOs);