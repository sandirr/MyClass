const models = require('../models/index')
const helpers = require('../helpers/index')

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
    absent: async (req, res) => {
        try {
            const user_id = req.headers['user-id']
            const class_id = req.body.class_id
            const attend = req.body.attend

            const data = {
                user_id, class_id, attend
            }

            result = await models.absent(data)
            helpers.response(res, 200, "absent has been recap")
        } catch (error) {
            if (error) console.log(error)
            helpers.customErrorResponse(res, 500, 'Server maybe busy!')
        }
    },
    materialSharing: async (req, res) => {
        try {
            const idClass = req.params.idClass


        } catch (error) {
            if (error) console.log(error)
            helpers.customErrorResponse(res, 500, 'Server maybe busy!')
        }
    }

}