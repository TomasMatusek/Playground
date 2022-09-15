const EventEmitter = require('node:events')

const customEmitter = new EventEmitter()

customEmitter.on('file.updated', () => {
    console.log('File changed !!!')
})

customEmitter.on('file.updated', () => {
    console.log('File changed 2 !!!')
})

customEmitter.emit('file.updated');
customEmitter.emit('file.updated');
customEmitter.emit('file.updated');