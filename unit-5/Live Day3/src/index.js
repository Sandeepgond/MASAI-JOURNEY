
// 1 import
const express=require("express")
const fs=require("fs")
const db=require("./db.json")


const productsRoutes=require("./route/products.route")



// 2 Create

const app=express()

/// telling express on how to parse request body
app.use(express.json())
app.use("/products",productsRoutes)

app.get("/",(req,res)=>{
    console.log(req.method,req.url);
    res.send("Hello my name is sandeep")
    
})
app.get("/posts",(req,res)=>{
    console.log(req.method,req.url);
    res.send(db.posts)
    
})

//for getting specific data with putting id
app.get("/posts/:id",(req,res)=>{
    let id=req.params.id
    let numId=Number(id)
    let post=db.posts.find((post)=>post.id===numId)
    if(post){
        res.send(post)
    }
    else{
        res.status(404).send(`post ${id} is not found`)
    }
})

//for filtering the data from the given data
app.get("/posts",(req,res)=>{
    let {name,message}=req.query;
    let posts=db.posts
    if(name){
        posts=posts.filter((post)=>post.name===name)
    }
    if(message){
        posts=posts.filter((post)=>post.name===name)
    }
    res.send(posts)
})

// for posting some data in url
app.post("/posts",(req,res)=>{
    //posting data from frontend
    db.posts.push({...req.body,
     id:Date.now()
    })
    fs.writeFile("./src/db.json",JSON.stringify(db),"utf-8",()=>{
        // res.status(201).set("content-type","application/json")
        res.send(db.posts)   
    })    
})

//for deleting particular data
app.delete("/posts/:id",(req,res)=>{
    let id=req.params.id
    let numId=Number(id)
    let posts=db.posts.filter((post)=>post.id!==numId)
    db.posts=posts  
    fs.writeFile("./src/db.json",JSON.stringify(db),"utf-8",()=>{
        // res.status(201).set("content-type","application/json")
        res.send("Deleted succesfully ")   
    }) 
})


//3 listen/start
app.listen(8080,()=>{
    console.log("Listening on http://localhost:8080");
})