const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');
require('dotenv').config()

const app =express()

const PORT = process.env.PORT

//Middle Ware
app.use(express.json())
app.use(cors({
    //Place domain
}))

// app.get('/',(req,res)=>{
//     res.send("SkyTrippie")
// })

//Routes
readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/'+route)))

const server =()=>{
    // console.log("Port running @",PORT);
    db()
    app.listen(PORT,()=>{
        console.log("Listening to",PORT);
    })
}

server()