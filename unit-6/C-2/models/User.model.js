const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name:String,
  email: { 
    type: String, 
    unique:true
  },
  Password: String,
  age: Number,
  role: {
    type: String,
    enum: ["HR", "Employee", "Guests"],
    default:"Guests"
  },
  verified: false,
});

const UserModel = model("user", UserSchema);

module.exports = UserModel;
