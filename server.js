
// http://localhost:3000/

const express = require('express')
const configViewEngine = require('./src/config/viewEngine')
const path = require('path')
require('dotenv').config()
const webRouter = require('./src/routes/web')

const app = express()
const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME || 'localhost'

//config template engine
configViewEngine(app)

//config static files

//khai báo route
app.use('/', webRouter)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})














