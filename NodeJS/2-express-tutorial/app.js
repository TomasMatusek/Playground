// API vs SSR
// Api - to server data in JSON
// Server Side Rendering - sending template

const express = require('express')
const log4js = require('log4js')
const logger = log4js.getLogger()
const utils = require('node:util')
const usersService = require('./service/userService')

const app = express()
logger.level = 'debug'

const { products, people } = require('./data')

app.listen(5001, () => {
    logger.info(`Server started at port ${5001}`)
})

app.get('/', (req,res) => {
    res.status(200).json();
})

app.get('/api/people', (req, res) => {
    usersService.getAllUsers()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json())
})

app.get('/api/people/:personId', (req, res) => {
    const { peronsId } = req.params
    const { name } = req.query
    logger.info(`${name}`)
    usersService.getUsersById(Number(peronsId))
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json())
})

app.get('/api/products', (req, res) => {
    logger.info('Products!')
    res.status(200).json(products)
})