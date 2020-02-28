const db_con = require('../configs/mysql')

module.exports = {
    getMaterial: (class_id) => {
        return new Promise((resolve, reject) => {
            db_con.query(`SELECT * FROM material_sharing WHERE class_id=${class_id}`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    getDetailMaterial: (idMaterial) => {
        return new Promise((resolve, reject) => {
            db_con.query(`SELECT * FROM material_sharing WHERE id=${idMaterial}`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    uploadMaterial: (data) => {
        return new Promise((resolve, reject) => {
            db_con.query('ALTER TABLE material_sharing AUTO_INCREMENT=0')
            db_con.query(`INSERT INTO material_sharing SET ?`, data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    updateMaterial: (data, idMaterial) => {
        return new Promise((resolve, reject) => {
            db_con.query(`UPDATE material_sharing SET ? WHERE id=${idMaterial}`, data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    deleteMaterial: (idMaterial) => {
        return new Promise((resolve, reject) => {
            db_con.query(`DELETE FROM material_sharing WHERE id=${idMaterial}`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}