const models = require('../models/class_schedule')
const helpers = require('../helpers/index')
const { PORT } = require('../configs/consume_env')
const uniqid = require('uniqid')
const userModel = require('../models/user')

module.exports = {
    class_schedule: async (req, res) => {
        try {
            result = await models.class_schedule()
            helpers.response(res, 200, result)
        } catch (error) {
            if (error) console.log(error)
            helpers.customErrorResponse(res, 404, 'Not Found!')
        }
    },
    detail_class_schedule: async (req, res) => {
        try {
            const idClass = req.params.idClass
            result = await models.detail_class_schedule(idClass)
            helpers.response(res, 200, result)
        } catch (error) {
            if (error) console.log(error)
            helpers.customErrorResponse(res, 404, 'Not Found!')
        }
    },
    add_class_schedule: async (req, res) => {
        try {
            const id = req.headers["user-id"]
            const cekUser = await userModel.cekUser(id)
            const user = cekUser[0]
            if (user.status !== 'admin') return res.json({ message: `Your're Unauthorized` })

            data = {
                date: req.body.date,
                class_name: req.body.class_name,
                class_room: req.body.class_room
            }
            result = await models.add_class_schedule(data)
            helpers.response(res, 200, "success add class")
        } catch (error) {
            if (error) console.log(error)
            helpers.customErrorResponse(res, 500, 'Server maybe busy!')
        }
    },
    edit_class_schedule: async (req, res) => {
        try {
            const id = req.headers["user-id"]
            const cekUser = await userModel.cekUser(id)
            const user = cekUser[0]
            if (user.status !== 'admin') return res.json({ message: `Your're Unauthorized` })

            const idClass = req.params.idClass
            data = {
                date: req.body.date,
                class_name: req.body.class_name,
                class_room: req.body.class_room
            }
            result = await models.edit_class_schedule(data, idClass)
            helpers.response(res, 200, "success edit class")
        } catch (error) {
            if (error) console.log(error)
            helpers.customErrorResponse(res, 500, 'Server maybe busy!')
        }
    },
    delete_class_schedule: async (req, res) => {
        try {
            const idClass = req.params.idClass
            result = await models.delete_class_schedule(idClass)
            helpers.response(res, 200, "success delete class")
        } catch (error) {
            if (error) console.log(error)
            helpers.customErrorResponse(res, 500, 'Server maybe busy!')
        }
    }
}