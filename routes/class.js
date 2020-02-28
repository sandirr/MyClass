const express = require('express')
const Route = express.Router()
const { class_schedule, materialSharing } = require('../controllers/index')
const { authentication, authorization } = require('../helpers/auth')

Route
    .get('/', authentication, authorization, class_schedule)
    .get('/:idClass', materialSharing)

module.exports = Route