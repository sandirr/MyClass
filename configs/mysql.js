const mysql = require('mysql')
const { database } = require('./consume_env')

const con = mysql.createConnection(database)

con.connect((error) => {
    if (error) return console.log(error)
    console.log('database connection succes')
})

module.exports = con