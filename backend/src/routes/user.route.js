const express = require("express")
const router = express.Router();
const {loginUser,signupUser,logoutUser} = require("../controller/auth.controller")
const verifyToken = require("../middleware/auth.middleware")

router.post("/login",loginUser)
router.post("/signup" ,signupUser)
router.get("/me",verifyToken,(req,res) =>{
    
    
    res.status(200).json(req.user)

})
router.post("/logout" ,logoutUser)


module.exports=router;