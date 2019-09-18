require("dotenv").config({path: __dirname + "/../.env"});
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const aCtrl = require('./controllers/authController')
const gCtrl = require('./controllers/gameController')
const ctrl = require('./controllers/controller')
const socket = require('socket.io')
const ssl = require('./controllers/socketController')
const strctrl = require('./controllers/stripeController')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env || 4400

const app = express()
app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: true,
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
app.get('/api/checkSession', aCtrl.checkSession)
app.get('/api/test', aCtrl.testSession)
app.get(`/api/users/:user_id`, ctrl.getUserInfo)
app.get('/api/games/:user_id', ctrl.getUserGames)
app.get('/api/wishlist/:user_id', ctrl.getUserWishlist)
// app.get('/api/messages/:room_id', ssl.getMessages)
app.post('/api/newGames/:user_id', ctrl.saveNewGame)
app.post('/api/wishlist/:user_id', ctrl.addToWishlist)
app.post('/api/gamelist/:user_id', ctrl.addToGamelist)
app.put('/api/updateUsers/:user_id', ctrl.updateUserProfile)
app.get('/api/game/:game_id', ctrl.getGameById)
app.get('/api/getTrades/:game_id', ctrl.getTrades)
app.post('/api/payment/:user_id',strctrl.pay)
app.get('/iamcheckingathing', ctrl.test)

//API REQUESTS
app.post('/api/games', gCtrl.getGameName)
