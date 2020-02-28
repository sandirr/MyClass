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
    detail_class_schedule: (idClass) => {
        return new Promise((resolve, reject) => {
            db_con.query(`SELECT * FROM class_schedule WHERE id=${idClass}`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    add_class_schedule: (data) => {
        return new Promise((resolve, reject) => {
            db_con.query('ALTER TABLE class_schedule AUTO_INCREMENT=0')
            db_con.query(`INSERT INTO class_schedule SET ?`, data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    edit_class_schedule: (data, idClass) => {
        return new Promise((resolve, reject) => {
            db_con.query(`UPDATE class_schedule SET ? WHERE id=${idClass}`, data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    delete_class_schedule: (idClass) => {
        return new Promise((resolve, reject) => {
            db_con.query(`DELETE FROM class_schedule WHERE id=${idClass}`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}