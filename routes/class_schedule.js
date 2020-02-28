const express = require('express')
const Route = express.Router()
const { class_schedule } = require('../controllers/index')
const { authentication, authorization } = require('../helpers/auth')

Route
    .get('/', authentication, authorization, class_schedule)

module.exports = Route