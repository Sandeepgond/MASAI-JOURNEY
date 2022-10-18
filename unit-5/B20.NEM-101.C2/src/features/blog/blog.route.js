const express=require("express");
const User = require("../user/user.model");

const Blog=require("./blog.model")

const app=express.Router()

const authMiddleware= (req,res,next)=>{
    let token= req.headers.token;
    console.log(token)
    if(!token){
      return res.send("Missing Token")
   }
    if(token){
        let [id,email,password]=token.split("::");
        console.log(token)
        let user = User.findById(id);
        if(user.email===email && user.password===password){
            req.userId=id;
            next();
        }else{
            res.status(401).send(" Operation not allowed");
        }
    }else{
        res.status(401).send(" Operation not allowed");
    }
}


app.use(authMiddleware)

app.get("/",async(req,res)=>{

  try {
      let blog=await Blog.find({user:req.userId}).populate([
          {path:"user",select:["name","email","age"]}])
      res.send(blog) 
  } catch (error) {
      res.status(404).send(error.mesage)
  }
})


app.post("/",async(req,res)=>{
    try {
        let blog =Blog.create({...req.body,
          user:req.userId,
         })
        res.send(blog)
    } catch (error) {
        res.status(404).send(error.mesage)
    }
})


app.get("/:id", authMiddleware, async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
  
      res.status(200).send(user);
    } catch (err) {
      res.status(404).send(err);
    }
  });
  


app.delete("/:id", authMiddleware, async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
  
      res.status(200).send("user deleted successfully!!");
    } catch (err) {
      res.status(404).send(err);
    }
  });

module.exports=app