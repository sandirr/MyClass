const express = require('express')
const app = express()
const bp = require('body-parser')
const logger = require('morgan')
const navigator = require('./routes/index')
const { PORT } = require('./configs/consume_env')
const fileUpload = require('express-fileupload')
const cors = require('cors')

app.use(cors('*'))

app.listen(PORT, () => {
    console.log('server is running :' + PORT)
})

app.use(logger('dev'))
app.use(bp.json())
app.use(bp.urlencoded({ extended: false }))
app.use(fileUpload())

app.use('/v1', navigator)