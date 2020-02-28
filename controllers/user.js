const JWT = require('jsonwebtoken')
const userModel = require('../models/user')
const helper = require('../helpers')
const { JWT_KEY } = require('../configs/consume_env')

module.exports = {
    register: async (req, res) => {
        try {
            const salt = helper.generateSalt(18)
            const hashPassword = helper.setPassword(req.body.password, salt)
            const status = 'user'
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
    },
    see_users: async (req, res) => {
        try {
            const id = req.headers["user-id"]
            const cekUser = await userModel.cekUser(id)
            const user = cekUser[0]
            if (user.status !== 'admin') return res.json({ message: `Your're Unauthorize` })
            const result = await userModel.see_users()
            helper.response(res, 200, result)
        } catch (error) {
            res.json({ message: `You're Unauthorize` })
        }
    },
    delete_user: async (req, res) => {
        try {
            const id = req.headers["user-id"]
            const cekUser = await userModel.cekUser(id)
            const user = cekUser[0]
            if (user.status !== 'admin') return res.json({ message: `Your Unauthorized` })

            const idUser = req.params.idUser
            const cek = await userModel.cekUser(idUser)
            const cek_user = cek[0]
            if (cek_user.status === 'admin') return res.json({ message: `Can't delete admin` })

            await userModel.delete_user(idUser)
            helper.response(res, 200, "User has been deleted")
        } catch (error) {
            res.json({ message: `server error` })
        }
    }
}
