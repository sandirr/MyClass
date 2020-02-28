const express = require('express')
const Route = express.Router()
const class_schedule = require('./class_schedule')
const absent = require('./absent')

Route
    .use('/v1', class_schedule)
    .use('/v1/user', absent)

module.exports = Route