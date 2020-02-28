const express = require('express')
const Route = express.Router()
const { register, login } = require('../controllers/user')
const { authentication, authorization } = require('../helpers/auth')

Route
    .post('/register', authentication, authorization, register)
    .post('/login', login)

module.exports = Route