const express = require('express')
const Route = express.Router()
const class_ = require('./class')
const user = require('./user')
const absent = require('./absent')

Route
    .use('/', class_)
    .use('/user', user)
    .use('/absent', absent)

module.exports = Route