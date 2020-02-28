const db_con = require('../configs/mysql')

module.exports = {
    absent: (data) => {
        return new Promise((resolve, reject) => {
            db_con.query(`INSERT INTO absent_recap SET ?`, data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    absent_recap: (class_id) => {
        return new Promise((resolve, reject) => {
            db_con.query(`select class_schedule.class_name as class, user.name, absent_recap.attend FROM class_schedule
            LEFT JOIN absent_recap ON class_schedule.id = absent_recap.class_id
            LEFT JOIN user ON absent_recap.user_id = user.id
            WHERE absent_recap.class_id = ${class_id}
            `, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}