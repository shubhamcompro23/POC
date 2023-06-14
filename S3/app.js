const express = require("express")
const dotenv = require('dotenv').config()
const app = express()
const awsRoutes = require("./awsRoutes")



const port = process.env.PORT

// Body parser, reading data from body into req.body
app.use(express.json())

// app.use(
//     (req,res,next)=>{
//         console.log("path",req.path)
//         next()
//     }
// )

//Routes
app.use('/', awsRoutes)



app.use((req,res,next)=>{
    res.send({
        status: 404,
        message: "Not Found"
    })
})

app.listen(port,()=>{
    console.log(`your app is running on port ${port}...!`)
})
