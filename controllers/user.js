const JWT = require('jsonwebtoken')
const userModel = require('../models/user')
const helper = require('../helpers')
const { JWT_KEY } = require('../configs/consume_env')

module.exports = {
    register: async (req, res) => {
        try {
            const salt = helper.generateSalt(18)
            const hashPassword = helper.setPassword(req.body.password, salt)
            const status = req.query.status || 1
            const data = {
                name: req.body.name,
                email: req.body.email,
                salt: hashPassword.salt,
                password: hashPassword.passwordHash,
                status
            }
            await userModel.register(data)
            helper.response(res, 200, 'user has been added')
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 500, 'Failed')
        }
    },
    login: async (req, res) => {
        const data = {
            password: req.body.password,
            email: req.body.email
        }
        console.log(data.email)
        const emailValid = await userModel.checkEmail(data.email)
        const dataUser = emailValid[0]
        const hashPassword = helper.setPassword(data.password, dataUser.salt)

        if (hashPassword.passwordHash === dataUser.password) {
            const token = JWT.sign({
                email: dataUser.email,
                id: dataUser.id
            }, JWT_KEY, { expiresIn: '1d' })

            delete dataUser.salt
            delete dataUser.password
            delete dataUser.status

            dataUser.token = token
            helper.response(res, 200, dataUser)
        } else {
            res.json({ message: 'Login error!' })
        }
    }
}
