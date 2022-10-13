const db=require("../database/index")
const registerValidation = require("../utils/inputValidations")
const { hashPassword } = require("../utils/passwordHash")

const User=db.user

const register=async(req,res,next)=>{

    const {error}=registerValidation(req.body)
    if(error) return res.status(400).json(error.details[0].message)

    const {name,password,email}=req.body

    const hash= hashPassword(password)

    try{

        const newUser= new User({
            name:name,
            email:email,
            password:hash
        })

        const savedUser= await newUser.save()
        
        res.status(200).json(savedUser)
    }
    catch(err){
        next(err)
    }
}

module.exports={register}