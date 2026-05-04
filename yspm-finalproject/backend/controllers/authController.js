const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register
exports.register = async (req,res)=>{
    try {
        const {name,email,password,role} = req.body;
        const oldUser = await User.findOne({email});
        const hashedpassword = await bcrypt.hash(password,10);

        const user = await User.create({
            name,
            email,
            password:hashedpassword,
            role,
        });
        res.status(201).json({message:"register successful", user});

    } catch(err) {
         res.status(500).json({message:err.message});
    }
};

//login
exports.login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return   res.status(400).json({message:"invalid user"});
        }
        const ismatch = await bcrypt.compare(password,user.password);
        if(!ismatch){
            return   res.status(400).json({message:"invalid user"});
        }

       const token = jwt.sign(
        {id:user._id, role:user.role},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
       );
        res.status(201).json({message:"login successful", token});

    } catch(err) {
         res.status(500).json({message:err.message});
    }
};
