console.log("heyy..learning how to connect to the database");
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('chopra5651')
})

app.get('/instagram',(req,res)=>{
    res.send('himanshuxchopra')
})

app.get('/snap',(req,res)=>{
    res.send('chopra_5651')
})


app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
}) 