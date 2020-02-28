const models = require('../models/index')

module.exports = {
    class_schedule: async(req, res)=>{
        try {
            result = await models.class_schedule()
            res.json(result)
        } catch (error) {
            if(error)console.log(error)
        }
    },
    absent: async(req,res)=>{
        try {
            
        } catch (error) {
            if(error)console.log(error)
        }
    }

}