const express = require('express')
const Route = express.Router()
const class_ = require('./class')
const user = require('./user')
const absent = require('./absent')
const material = require('./material')

Route
    .use('/class', class_)
    .use('/user', user)
    .use('/absent', absent)
    .use('/material', material)
    .use('/file', express.static('./sharing_files'))

module.exports = Route