const express = require('express')
const db = require('./db')
const imageModel = require('./image/model')
const imageRouter = require('./image/router')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000

const corsMiddleware = cors()
const bodyparserMiddleware = bodyParser.json()

app.use(corsMiddleware)
app.use(bodyparserMiddleware)
app.use(imageRouter)

app.listen(port, () => console.log(`server listening on port ${port}`))