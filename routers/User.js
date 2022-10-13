const router = require("express").Router();
const {getUsers,getUser}=require("../controllers/User")



router.get("/",getUsers);
router.get("/:id",getUser);


module.exports = router;
