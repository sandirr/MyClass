const con_db = require('../configs/mysql')

module.exports = {
    cekUser: (id) => {
        return new Promise((resolve, reject) => {
            con_db.query(`SELECT * FROM user WHERE id=${id}`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    register: (data) => {
        return new Promise((resolve, reject) => {
            con_db.query('INSERT INTO user SET ?', data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    checkEmail: (email) => {
        return new Promise((resolve, reject) => {
            con_db.query(`SELECT * FROM user WHERE email = '${email}'`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    see_users: () => {
        return new Promise((resolve, reject) => {
            con_db.query(`SELECT * FROM user`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    delete_user: (idUser) => {
        return new Promise((resolve, reject) => {
            con_db.query(`DELETE FROM user WHERE user.id=${idUser}`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }

}
