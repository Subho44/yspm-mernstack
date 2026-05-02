const mongoose = require("mongoose");

const USERschema = new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
    role:{
        type:String,
        enum:["admin","student"],
        default:"student",
    },

},
{timestamps:true});

module.exports = mongoose.model("User",USERschema);