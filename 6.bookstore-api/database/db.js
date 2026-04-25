const mongoose = require('mongoose');

const connectToDB = async()=>{
    try{
       await mongoose.connect("mongodb+srv://furkan83cvk34_db_user:HJfdyDBDZ1FDdDAs@cluster0.yzqhoze.mongodb.net/")
       console.log("mongodb connected");
    }catch(error){
        console.error('MongoDB connection failed', error);
        process.exit(1);
    }
}

module.exports = connectToDB;