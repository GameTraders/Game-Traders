require("dotenv").config({path: __dirname + "/../.env"});
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const aCtrl = require('./controllers/authController')
// const socket = require('socket.io')
// const ssl = require('./controllers/socketController')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env || 4400

const app = express()
app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 3 }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    app.listen(SERVER_PORT, () => console.log(`Cruising on PORT ${SERVER_PORT}`))
})

// USER ENPOINTS
app.post('/auth/register', aCtrl.register)