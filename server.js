
const express = require('express')

const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME || 'localhost'

//config template engine
app.set('views', path.join(__dirname,'./src/views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/danhne', (req, res) => {
    res.render('sample')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})