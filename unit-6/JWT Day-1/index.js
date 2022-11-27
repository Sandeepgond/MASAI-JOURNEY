const express = require("express");
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const UserModel=require("./models/userModels")

const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post('/signup',async(req,res)=>{
    const {name,email,password,age}=req.body


    const user=new UserModel({name,email,password,age})
    await user.save()

    return res.status(201).send("User created successfully")
})


app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    const user=await UserModel.findOne({email,password})
    if(user){
        // generate token here 
        const token=jwt.sign({id:user._id,name:user.name,age:user.age},'SECRET1234')
        return res.send({message:'login success',token})
    }
    return res.status(401).send("invalid credentials")
    // return res.status(201).send("User created successfully")
})

app.get('/user/:id',async(req,res)=>{
    const {id}=req.params
    const token =req.headers['authorization']
    if(!token){
        return res.send("Unauthorized")
    }
    try {
        const verification=jwt.verify(token,'SECRET1234')
        if(verification){
            const user=await UserModel.findOne({_id:id})
            res.send(user)
        }
        
    } catch (error) {
        res.send("invalid credentials")
    }
})

app.get('/',(req,res)=>res.send('hello'))

mongoose.connect('mongodb://localhost:27017/b21').then(()=>{
    app.listen(8080,()=>{
        console.log("server started")
    })

})
