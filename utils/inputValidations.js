const Joi=require("@hapi/joi")

const registerValidation=(data)=>{
    const Schema= Joi.object({
        name:Joi.string().min(6).required(),
        email:Joi.string().min(6).required(),
        password:Joi.string().min(6).required()

    })
    return Schema.validate(data)

}


module.exports=registerValidation