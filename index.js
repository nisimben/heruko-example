const express = require('express')

const app =express()

app.use(express.static('public'))

app.get('/',(erq,res)=>{
    res.sendFile('index.html',{root:__dirname +'/public'})
})
const port = process.env.PORT||5000
app.listen( port,()=>{
    console.log(`server run on port ${port}`);
    
})