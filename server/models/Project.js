const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        enum:["Not Started", "In progress", "Completed"],
    },
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Clients",
    }
})

module.exports = mongoose.model("Project", ProjectSchema)