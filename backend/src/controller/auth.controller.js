const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const salt =  10;
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser");




 async function signupUser(req,res){
    const{username,email,password ,confirmPassword } =req.body

    if(confirmPassword != password){
       return  res.status(400).json({message:"password and conform password is not same"})
    }

    const UserExist =  await userModel.findOne({$or: [{username},{email}]})

    if(UserExist){
        return res.status(409).json({message:"user already exists"})
    }
    const hashedPassword = await bcrypt.hash(password,salt)
    
    const token = jwt.sign({username,email},process.env.JWT_SECRET)
     
    
    const newUser = new userModel({
        username,
        email,
        password:hashedPassword
    });


    await newUser.save()
    res.cookie("token",token,{
        httpOnly: true,
        sameSite: "lax",
        secure: false,
    }).status(201).json({message:"user created succesfully",});
}



 async function loginUser(req,res){
    const{username,email,password } =req.body

     const User =  await userModel.findOne( {email})

     
     

    if(!User){
         return res.status(404).json({message:"user not exists"})
    }

    const passwordCheck =  await bcrypt.compare(password,User.password)
    if(!passwordCheck){
        return res.status(401).json({message:"incorrect email and password"}) 
    }

    

    const hashedPassword = await bcrypt.hash(password,salt)
    
    const token = jwt.sign({username:User.username,email:User.email,},process.env.JWT_SECRET)

      res.cookie("token",token,{
        httpOnly: true,
        sameSite: "lax",
        secure: false,
    }).status(201).json({message:"user logined succesfully",});




}

const logoutUser = (req,res)=>{
    
    res.clearCookie("token",{
        httpOnly:true,
        secure:false,
        sameSite:"lax",
    });
    res.status(200).json({message:"Logged out succesfully"})
}


module.exports={loginUser , signupUser , logoutUser}