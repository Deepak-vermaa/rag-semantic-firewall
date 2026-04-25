const mongoose = require("mongoose")
const dotenv = require("dotenv")

async function connectDb(){
    try{
        await mongoose.connect(process.env.db_url)
        console.log("conntect to db successfully !!");

    }catch(err){
        console.log("error !!\n database connection failed! err: ",err)
    }
}

module.exports = connectDb;