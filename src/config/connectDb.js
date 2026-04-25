const mongoose = require(mongoose)

async function connectDb(){
    try{
        await mongoose.connect("")
    }catch(err){
        console.log("error !!\n database connection failed! err: ",err)
    }
}