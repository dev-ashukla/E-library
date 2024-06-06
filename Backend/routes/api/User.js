const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config({path : "../../process.env"})
const bcrypt = require("bcrypt")
// Load User Model
const User = require("../../models/User");


// Creating a new user
router.post("/signup", async (req, res) => {
  try {
    const { Name, Email_Id, Password } = req.body;
    const newUser = new User({ Name, Email_Id, Password });
    await newUser.save();
    
    res.status(201).json(true);
    console.log("user created successfully");
  } catch (e) {
    console.log(e);
  }
});

// Log_In API
router.post("/log-in", async (req,res)=>{
    try {
        const {Email_Id, Password} = await req.body;
        console.log(req.body)
        if(!Email_Id || !Password){
            return res.status(400).json({msg : "Both Fields are required"})
        }
        
        const user = await User.findOne({Email_Id});
        if(!user){
            return res.status(400).json({msg : "User not existed with the Email"})
            
        }

      const isValid = await bcrypt.compare(Password, user.Password)
      if( !isValid){
        
        return res.status(401).json({msg : "incorrect password"})
      }
      else{
        const token = jwt.sign({ email: user.Email_Id }, process.env.Secret_Key, {expiresIn: '1h'})
        console.log(token)
        return res.status(200).json({token})
      }
    }
    catch (e){
        return res.json({msg :"Internal server error"}).status(500)
    }
})

module.exports = router;
