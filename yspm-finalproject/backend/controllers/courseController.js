const Course = require("../models/Course");

//add course
exports.addcourse = async (req,res)=>{
    try {
        const newcourse = await Course.create({...req.body});
        res.json(newcourse);
    } catch (err) {
        console.log(err);
    }
}
//get all course
exports.getcourses = async (req,res)=>{
    try {
        const course = await Course.find();
        res.json(course);
    } catch (err) {
        console.log(err);
    }
}
//delete
exports.deletecourses = async (req,res)=>{
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.json({msg:"deleted"});
    } catch (err) {
        console.log(err);
    }
}