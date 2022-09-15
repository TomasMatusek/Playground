const EventEmitter = require('node:events')

const customEmitter = new EventEmitter()

customEmitter.on('file.updated', (fileName, fileId) => {
    console.log(`File changed ${fileName} ${fileId}`)
})

customEmitter.emit('file.updated', 'Docs.txt', 1);