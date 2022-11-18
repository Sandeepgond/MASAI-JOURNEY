const express =require("express")
const res = require("express/lib/response")
const fs=require("fs")
const data=require("./data.json")
const dns=require("dns")

const app=express()

app.use(express.json())


///get request
app.get("/",(req,res)=>{
    // console.log(res);
    res.send("on the home page")
})
//////////////



////For getting ip Address
app.post("/getip",(req,res)=>{
    const{website}=req.body
    dns.lookup(website,(err,address)=>{
        if(err){
            res.send("something went wrong")
        }
        res.send(address)
    })
})
//////////


app.get("/products",(req,res)=>{
     res.send(data.products)
})


//post request/////////////
app.post("/products",(req,res)=>{
    data.products.push(req.body)
    fs.writeFile("./data.json",JSON.stringify(data),"utf8",()=>{
        res.send(data.products)
    })
})
////////////////////////


//delete request/////////
app.delete("/products/:id",(req,res)=>{
    let id=req.params.id
    let numId=Number(id)
    let products=data.products.filter((item)=>item.id!==numId)
    data.products=products
    fs.writeFile("./data.json",JSON.stringify(data),"utf8",()=>{        
        res.send("Deleted succesfully ")
    })
})
/////////////////////


////put request
app.put("/products/:id",(req,res)=>{
    let id=req.params.id
    let numId=Number(id)
    let product=req.body
    let products=data.products.map((item)=>{
        if(item.id==numId){
            return product
        }
        else{
            return item
        }
    })
    data.products=products
    fs.writeFile("./data.json",JSON.stringify(data),"utf8",()=>{        
        res.send("Product Modified")
    })
})
//////////

///Patch request
app.patch("/products/:id",(req,res)=>{
    let id=req.params.id
    let numId=Number(id)
    let product=req.body
    let products=data.products.map((item)=>{
        if(item.id==numId){
            return product
        }
        else{
            return item
        }
    })
    data.products=products
    fs.writeFile("./data.json",JSON.stringify(data),"utf8",()=>{        
        res.send("Patch Product Successfully executed")
    })
})

app.listen(8080,()=>{
    console.log(("listening on http://localhost:8080"));
})