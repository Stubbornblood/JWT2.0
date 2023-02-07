const express = require("express")
const app = express()
require("dotenv").config();


app.get("/api",(req,res)=>{
    res.json({

 
        success  : 1,
        message : "Working Fine"

         

    })
})





app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on Port ${process.env.PORT} `)
})