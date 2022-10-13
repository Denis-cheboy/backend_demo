require("dotenv").config()

const {Sequelize}=require("sequelize")

const sequelize= new Sequelize(process.env.DB,process.env.USER,process.env.PASSWORD,{
  host:process.env.HOST,
  dialet:"msql"
})

// // testing the connection
// try {

//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');

// } catch (error) {

//   console.error('Unable to connect to the database:', error);

// }

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require("./User")(sequelize, Sequelize);

module.exports = db;