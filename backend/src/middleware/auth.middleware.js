const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next) =>{
    try{
        const token =req.cookies.token;
        if(!token){
            return res.status(401).json({message:"no token found"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        req.user = decoded;
        next()
    }catch(error){
        res.status(401).json({message:"invalid token"})
    }
}

module.exports=verifyToken