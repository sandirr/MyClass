const express = require('express')
const Route = express.Router()
const { absent } = require('../controllers/index')
const { authentication, authorization } = require('../helpers/auth')

Route
    .post('/', authentication, authorization, absent)

module.exports = Route