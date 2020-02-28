const express = require('express')
const Route = express.Router()
const {
    getMaterial,
    uploadMaterial,
    updateMaterial,
    getDetailMaterial,
    deleteMaterial
} = require('../controllers/material')
const { authentication, authorization } = require('../helpers/auth')

Route
    .get('/', authentication, authorization, getMaterial)
    .get('/:idMaterial', authentication, authorization, getDetailMaterial)
    .post('/', authentication, authorization, uploadMaterial)
    .patch('/:idMaterial', authentication, authorization, updateMaterial)
    .delete('/:idMaterial', authentication, authorization, deleteMaterial)

module.exports = Route