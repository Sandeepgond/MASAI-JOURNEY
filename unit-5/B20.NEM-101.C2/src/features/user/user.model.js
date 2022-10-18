const mongoose=require("mongoose");
//schema :information about Structure of Data

const userSchema=new mongoose.Schema({
    name:{
     type:String,
     required:true
    },
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    required:true
   },
   age:{
    type:String,
    min:20,
    max:100
   },
   gender:{
    type:String,
    enum:["Male","Female"]
   }
},
{
    versionKey:false,
    timestamps:true,
}
)

// Model :Instance of the collection
const User=mongoose.model("user",userSchema)


module.exports=User