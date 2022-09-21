// API vs SSR
// Api - to server data in JSON
// Server Side Rendering - sending template

const express = require('express')
const app = express()

app.listen(5001, () => {
    console.log('Server hit!')
})

app.get('')