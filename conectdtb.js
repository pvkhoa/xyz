const {Sequelize}  = require("sequelize")
require('dotenv').config();
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host : process.env.DATABASE_HOST,
        dialect : 'mysql'
    }
)
sequelize.authenticate().then(()=>{
    console.log("Database connected successfully")
}).catch((error)=>{
    console.log("Database connection failed:", error.message)
    console.log("Server will run without database connection")
})
module.exports = sequelize