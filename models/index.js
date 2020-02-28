const db_con = require('../configs/mysql')

module.exports = {
    class_schedule:()=>{
        return new Promise((resolve, reject)=>{
            db_con.query(`SELECT * FROM class_schedule`, (error, result)=>{
                if(error)reject(new Error(error))
                resolve(result)
            })
        })
    }
}