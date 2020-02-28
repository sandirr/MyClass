const express = require('express')
const Route = express.Router()
const { register, login, see_users, delete_user } = require('../controllers/user')
const { authentication, authorization } = require('../helpers/auth')

Route
    .post('/register', register)
    .post('/login', login)
    .get('/', authentication, authorization, see_users)
    .delete('/delete/:idUser', authentication, authorization, delete_user)

module.exports = Route