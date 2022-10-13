const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./database/index");
const UserRoute = require("./routers/User");
const authRoute=require("./routers/auth")
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

//database Connections
db.sequelize.sync().then(()=> {
    console.log("Sync db");
}).catch((err)=>{
    console.log(err.message)
})

// db.sequelize.sync({ force: true}).then(()=> {
//     console.log("dropped tables");
// })

//middlewares
app.use(express.json());
app.use(cors({origin: "*"}))
//error handler middleware
app.use((err,req,res,next)=>{
    const errMsg= err.message || "somethiing went wrong"
    const errStatus= err.status || 500
    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errMsg,
        stack:err.stack
    })
})
//routers
app.use('/api/user', UserRoute);
app.use("/api/auth",authRoute)

app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
})



