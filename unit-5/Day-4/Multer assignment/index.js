const express=require("express")
const multer = require("multer")

const app=express()
app.use(express.json())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

app.post("/profile", upload.single("avatar"),function(req,res){
  res.send("file uploaded");
});

app.listen("8080",()=>{
    console.log("Listening on http://localhost:8080");
})