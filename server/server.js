require("dotenv").config({path: __dirname + "/../.env"});
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const aCtrl = require('./controllers/authController')
const gCtrl = require('./controllers/gameController')
const ctrl = require('./controllers/controller')
const socket = require('socket.io')
const ssl = require('./controllers/socketController')
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

    const io = socket(app.listen(SERVER_PORT, () => console.log(`Cruising on PORT ${SERVER_PORT}`)))

    // SOCKETS
    io.on('connection', socket => {
        console.log(('A new user just connected'));
        ssl.setSocketListeners(socket, db, io)
    })
})

// USER ENPOINTS
app.post('/auth/register', aCtrl.register)
app.post('/auth/login', aCtrl.login)
app.delete('/auth/logout', aCtrl.logout)
app.get(`/api/users/:user_id`, ctrl.getUserInfo)
app.get('/api/games/:user_id', ctrl.getUserGames)
app.get('/api/wishlist/:user_id', ctrl.getUserWishlist)
app.get('/api/messages/:room_id', ssl.getMessages)
app.post('/api/newGames/:user_id', ctrl.saveNewGame)
app.post('/api/wishlist/:user_id', ctrl.addToWishlist)

//API REQUESTS
app.post('/api/games', gCtrl.getGameName)
