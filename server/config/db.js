const mongoose = require("mongoose");


const connectdb = async ()=>{
    
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true, // for deprecation warning in mongoose
            useUnifiedTopology: true, // for deprecation warning in mongoose
        })
        console.log(`${connect.connection.host} is connected`.cyan.underline.bold);
}catch(err){
    console.log(`err : ${err}`.red.underline.bold);

}
}

module.exports = connectdb;