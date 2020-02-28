const db_con = require('../configs/mysql')

module.exports = {
    class_schedule: () => {
        return new Promise((resolve, reject) => {
            db_con.query(`SELECT * FROM class_schedule`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    absent: (data) => {
        return new Promise((resolve, reject) => {
            db_con.query(`INSERT INTO absent_recap SET ?`, data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    materialSharing: (idClass) => {
        return new Promise((resolve, reject) => {

        })
    }
}