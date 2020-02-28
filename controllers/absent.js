const models = require('../models/absent')
const helpers = require('../helpers/index')

module.exports = {
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
    absent_recap: async (req, res) => {
        try {
            const class_id = req.query.class_id
            result = await models.absent_recap(class_id)
            helpers.response(res, 200, result)
        } catch (error) {
            if (error) console.log(error)
            helpers.customErrorResponse(res, 404, 'Not Found!')
        }
    }
}