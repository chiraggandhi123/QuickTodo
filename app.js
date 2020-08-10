var express = require('express')
var app = express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/static')
})

app.listen('4444',()=>{
    console.log("Server listening on http://localhost:4444/")
})