const mongoose = require("mongoose")

const userScheme = new mongoose.Schema({
    username:{
        type:String,
        
        requied:true
    },
    email:{
        type:String,
        unique:true,
        requied:true
    },
    password:{
        type:String,
        requied:true
    }
})


const userModel =mongoose.model('User',userScheme);


module.exports=userModel;

