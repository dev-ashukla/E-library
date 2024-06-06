const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const UserSchema = new mongoose.Schema({
Name:{
    required : true,
    type: String,
},
Email_Id : {
    required : true,
    type : String,
    unique : true
},
Password : {
    required : true,
    type : String
}
})

UserSchema.pre('save', async function (next) {
    try {
      const salt = await bcrypt.genSalt(8);
      const hashedPassword = await bcrypt.hash(this.Password, salt);
      this.Password = hashedPassword;
      next();
    } catch (error) {
      console.error("Error in generating hash:", error);
      next(error);
    }
  });

const User = mongoose.model('User', UserSchema)

module.exports = User