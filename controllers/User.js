const db = require("../database/index");
const User = db.user;

 //find users
const getUsers= async(req,res,next)=>{

      try {

        const users = await User.findAll();
        res.status(200).json(users);

      } catch (err) {

        next(err)

      }
  }

//finding one User 
const getUser=async (req, res,next)=> {

    try {

      const user = await User.findByPk(req.params.id);
      res.status(200).json(user);

    } catch (err) {

      next(err)
    }
}



module.exports = {
  getUsers,getUser

}

