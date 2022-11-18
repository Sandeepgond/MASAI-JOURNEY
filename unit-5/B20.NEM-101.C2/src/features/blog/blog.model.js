const mongoose=require("mongoose");
//schema :information about Structure of Data

const blogSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }   
},{
    versionKey:false,
    timestamps:true,
})

// Model :Instance of the collection
const Blog=mongoose.model("blog",blogSchema)


module.exports=Blog