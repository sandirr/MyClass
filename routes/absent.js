const express = require('express')
const Route = express.Router()
const { absent, absent_recap } = require('../controllers/absent')
const { authentication, authorization } = require('../helpers/auth')

Route
    .post('/', authentication, authorization, absent)
    .get('/', authentication, authorization, absent_recap)

module.exports = Route