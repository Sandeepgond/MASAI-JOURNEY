const fs=require("fs")

////for reading file////
fs.readFile("./Read.test.txt","utf-8",(err,data)=>{
    console.log(data)
})
/////for appending file//////
fs.appendFile("./Append.test.txt"," next--->  my name is sandeep",(err)=>{
    return (err)
})
///for new file created with some data////
fs.writeFile("./newFileCreated","hello node js","utf8",(err)=>{
    return err
})

// fs.writeFileSync("./FileCreated","hello masai","utf8",(err)=>{
//     return err
// })

////for renaming of the existing file /////
fs.rename("./newFileCreated","after_Rename",(err)=>{
    return err
})


////for deleting the existing file///
fs.unlink("./Read.test.txt",(err)=>{
    return err
})

