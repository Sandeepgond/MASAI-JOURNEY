const express=require("express");
const User = require("./user.model");
const app=express.Router()

app.get("/login",async(req,res)=>{
    const {id,email,password}=req.body
    try {
        let user=await User.findOne({email})
        if(user){
            if(password===user.password){
                res.send({
                    token:`${id}:${email}:${password}`,
                    password:user.password
                })
            }else{
                res.status(404).send("Authentication Failure , incorrect password")
            }
        }else{
            res.status(401).send(`Operation not allowed`)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.post("/signup",async(req,res)=>{
    let {email,password,name,age,gender}=req.body

    try {
        let existingUser=await User.findOne({email})
        if(existingUser){
            res.status(404).send("cannot create an user as existing email")
        }else{            
            let user=await User.create({email,password,name,age,gender})
            res.send({token:`${user.id}$:{user.email}:${user.password}`,email:user.email,password:user.password ,id:user.id,age:user.age,gender:user.gender})
        }
    } catch (error) {
        res.status(404).send(error.message)
    }

})

app.get("/:id",  async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(e);
    }
})


app.delete("/:id", async(req,res)=>{

try{
    const user= await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User Deleted Successfull");
} catch (e){
    res.status(500).send(e);
}

})


module.exports=app