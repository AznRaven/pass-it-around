const express = require('express')

const app = express()

const PORT = 8081

const bobRoutes = require('./routes/bobRoutes')

const { createEngine } = require('jsx-view-engine')

app.set('view engine', 'jsx')

app.engine('jsx', createEngine())

app.use('/', bobRoutes)

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})