const models = require('../models/material')
const helpers = require('../helpers/index')
const { PORT } = require('../configs/consume_env')
const uniqid = require('uniqid')
const userModel = require('../models/user')

module.exports = {
    getMaterial: async (req, res) => {
        try {
            const class_id = req.query.class_id
            const result = await models.getMaterial(class_id)
            helpers.response(res, 200, result)
        } catch (error) {
            if (error) console.log(error)
            helpers.customErrorResponse(res, 500, 'Server maybe busy!')
        }
    },
    getDetailMaterial: async (req, res) => {
        try {
            const idMaterial = req.params.idMaterial
            const result = await models.getDetailMaterial(idMaterial)
            helpers.response(res, 200, result)
        } catch (error) {
            if (error) console.log(error)
            helpers.customErrorResponse(res, 500, 'Server maybe busy!')
        }
    },
    uploadMaterial: async (req, res) => {
        try {
            const id = req.headers["user-id"]
            const cekUser = await userModel.cekUser(id)
            const user = cekUser[0]
            if (user.status !== 'admin') return res.json({ message: `Your're Unauthorized` })

            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).send('No files were uploaded.')
            }
            const material_file = req.files.material_file
            const mfArr = material_file.name.split('.')
            const mfExt = (mfArr[mfArr.length - 1]).toLowerCase()
            const filename = uniqid() + '.' + mfExt

            if (mfExt != 'pdf' && mfExt != 'ppt' && mfExt != 'pptx' && mfExt != 'doc' && mfExt != 'docx') { return res.json({ message: `Not allowed upload another file except pdf/ppt/pptx/doc/docx` }) }

            if (material_file.size > (1024 * 1024 * 25)) { return res.json({ message: 'Not allowed upload more than 25MB' }) }

            uploadPath = __dirname + '/../sharing_files/' + filename

            material_file.mv(uploadPath, (err) => {
                if (err) {
                    return res.status(500).send(err)
                }
                console.log('Upload file success')
            })

            const fileAccess = `http://localhost:${PORT}/v1/file/${filename}`
            data = {
                class_id: req.query.class_id,
                material_name: req.body.material_name,
                material_file: fileAccess
            }

            await models.uploadMaterial(data)
            helpers.response(res, 200, 'material has been added')

        } catch (error) {
            if (error) console.log(error)
            helpers.customErrorResponse(res, 500, 'Server maybe busy!')
        }
    },
    updateMaterial: async (req, res) => {
        try {
            const id = req.headers["user-id"]
            const cekUser = await userModel.cekUser(id)
            const user = cekUser[0]
            if (user.status !== 'admin') return res.json({ message: `Your're Unauthorized` })

            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).send('No files were uploaded.')
            }
            const material_file = req.files.material_file
            const mfArr = material_file.name.split('.')
            const mfExt = (mfArr[mfArr.length - 1]).toLowerCase()
            const filename = uniqid() + '.' + mfExt

            if (mfExt != 'pdf' && mfExt != 'ppt' && mfExt != 'pptx' && mfExt != 'doc' && mfExt != 'docx') { return res.json({ message: `Not allowed upload another file except pdf/ppt/pptx/doc/docx` }) }

            if (material_file.size > (1024 * 1024 * 25)) { return res.json({ message: 'Not allowed upload more than 25MB' }) }

            uploadPath = __dirname + '/../sharing_files/' + filename

            material_file.mv(uploadPath, (err) => {
                if (err) {
                    return res.status(500).send(err)
                }
                console.log('Upload file success')
            })

            const fileAccess = `http://localhost:${PORT}/v1/file/${filename}`
            data = {
                material_name: req.body.material_name,
                material_file: fileAccess
            }
            const idMaterial = req.params.idMaterial
            await models.updateMaterial(data, idMaterial)
            helpers.response(res, 200, 'material has been updated')

        } catch (error) {
            if (error) console.log(error)
            helpers.customErrorResponse(res, 500, 'Server maybe busy!')
        }
    },
    deleteMaterial: async (req, res) => {
        try {
            const id = req.headers["user-id"]
            const cekUser = await userModel.cekUser(id)
            const user = cekUser[0]
            if (user.status !== 'admin') return res.json({ message: `Your're Unauthorized` })

            idMaterial = req.params.idMaterial
            await models.deleteMaterial(idMaterial)
            helpers.response(res, 200, 'material has been deleted')
        } catch (error) {
            if (error) console.log(error)
            helpers.customErrorResponse(res, 404, 'Not found!')
        }
    }
}