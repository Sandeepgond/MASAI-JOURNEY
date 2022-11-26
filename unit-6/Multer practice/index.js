const express = require('express')
const multer = require('multer')
const app = express()

// app.use(express.urlencoded({extended: true}))
// app.use(express.json())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './image')
    },
    filename: function (req, file, cb) {
      cb(null, "private" + '-' + file.originalname)
    }
  })
   
const upload = multer({ storage: storage })

app.get("/", (req,res) => {
    res.send("welcome to Homepage")
})

app.post("/singlefile", upload.single("image"), (req,res) => {
    console.log(req.file, "myfile")
    res.send("Single file added")
})

app.post("/multiplefile", upload.array("image",2), (req,res) => {
    console.log(req.file, "myfile")
    res.send("Multiple file added")
})

app.listen(8080, () => {
    console.log('server started on port 8080')
})