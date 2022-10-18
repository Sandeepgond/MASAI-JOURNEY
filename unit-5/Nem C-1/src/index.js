// Start here

const express=require("express")

let data=require("../person.json")

const fs=require("fs")

const app=express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("on the home page")
})


app.get("/person",(req,res)=>{
    res.send(data)
})

app.get("/person/:id",(req,res)=>{
    let id=req.params.id
    let numId=Number(id)
    let persons=data.find((item)=>item.id===numId)
    if(persons){
        res.send(persons)
    }
    else{
        res.send("particular data is not found")
    }
})


app.delete("/person/:id",(req,res)=>{
    let id=req.params.id
    let numId=Number(id)
    let person=data.filter((item)=>item.id!==numId)
    data=person
    fs.writeFile("./person.json",JSON.stringify(data),"utf8",()=>{
        res.send("deleted successfuly")
    })
})

app.post("/person",(req,res)=>{
    data.push(req.body)
    fs.writeFile("./person.json",JSON.stringify(data),"utf8",()=>{
        res.send(data.person)
    })
})

app.put("/person/:id",(req,res)=>{
    let id=req.params.id
    let numId=Number(id)
    let product=req.body
    let products=data.map((item)=>{
        if(item.id==numId){
            return product
        }
        else{
            return item
        }
    })
    data=products
    fs.writeFile("./person.json",JSON.stringify(data),"utf8",()=>{        
        res.send("Product Modified")
    })
})

app.patch("/person/:id",(req,res)=>{
    let id=req.params.id
    let numId=Number(id)
    let product=req.body
    let products=data.map((item)=>{
        if(item.id==numId){
            return product
        }
        else{
            return item
        }
    })
    data=products
    fs.writeFile("./person.json",JSON.stringify(data),"utf8",()=>{        
        res.send("Product Modified")
    })
})


app.get("/person",(req,res)=>{
    let {birth,current,visited}=req.query;
    let persondata=data
    if(birth){
        persondata=persondata.filter((item)=>item.birth===birth)
    }
    else if(current){
        persondata=persondata.filter((item)=>item.current===current)
    }
    else if(visited){
        persondata=persondata.filter((item)=>item.visited===visited)
    }
    else if(birth && visited){
        persondata=persondata.filter((item)=> item.birth===birth && item.visited===visited)
    }
    res.send(persondata)
})




app.listen(8000,()=>{
    console.log("listening on http://localhost:8000");
})