require("dotenv").config()
const express=require("express")
const cors=require("cors")

const connect=require("./config/db")

const userRoute=require("./features/user/user.route")
const blogRoute=require("./features/blog/blog.route")

const PORT =process.env.PORT

const app=express()
app.use(express.json())
app.use(cors())


app.use("/users",userRoute)
app.use("/blogs",blogRoute)

app.get("/",(req,res)=>{
    res.send("on the home page")
})
app.listen(PORT,async()=>{
    await connect()
    console.log(`listening on http://localhost:${PORT}`);
})