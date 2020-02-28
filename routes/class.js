const express = require('express')
const Route = express.Router()
const {
    class_schedule,
    detail_class_schedule,
    add_class_schedule,
    edit_class_schedule,
    delete_class_schedule
} = require('../controllers/class_schedule')
const { authentication, authorization } = require('../helpers/auth')

Route
    .get('/', authentication, authorization, class_schedule)
    .get('/:idClass', authentication, authorization, detail_class_schedule)
    .post('/', authentication, authorization, add_class_schedule)
    .patch('/:idClass', authentication, authorization, edit_class_schedule)
    .delete('/:idClass', authentication, authorization, delete_class_schedule)

module.exports = Route