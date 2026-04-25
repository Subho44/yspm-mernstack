const mongoose = require("mongoose");

const courseschema = new mongoose.Schema({
    title:String,
    price:Number
},
{timestamps:true});

module.exports = mongoose.model("Course",courseschema);