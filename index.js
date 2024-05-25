// Require needed modules
const express = require('express')
const app = express()

app.get('/',(req, res) =>
 {
res.send('See node API')

 })


const mongoose = require("mongoose");
console.log ('See Me')


app.listen(3000, () => {
console.log('Node is running on port 3000')
})
mongoose.connect