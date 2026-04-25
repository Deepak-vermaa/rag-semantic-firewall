const connectDb = require("./src/config/connectDb")
const dotenv = require("dotenv")
dotenv.config()
connectDb();