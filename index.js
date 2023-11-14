//loads .env file contents into process.env by default.

require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

//creates an express application

const pfServer = express()

pfServer.use(cors())
pfServer.use (express.json())
pfServer.use(router)


//customise port number
const PORT = 4000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log('PROJECT FAIR SERVER STARTED AT port: ${PORT} AND WAITING FOR CLIENT REQUEST');
})
//http get request resolving to http://localhost:4000/
pfServer.get('/',(req,res)=>{
    res.send(`<h1>project fair server started and waiting for client request !!!</h1>`)
})

// pfServer.post('/',(req,res)=>{
//     res.send("Post Request")
// })

// pfServer.put('/',(req,res)=>{
//     res.send("PUT Request")
// })