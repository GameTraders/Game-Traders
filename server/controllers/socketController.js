module.exports = {
    setSocketListeners: function ( socket, db, io ) {
        // JOIN ROOM
        socket.on('join new room', data => {
            console.log("room data:", data);
            const { roomId } = data
            socket.join(roomId)
            io.in(roomId).emit('room joined', data)
        })
        socket.on('join existing room', data => {
            console.log("existing room data:", data);
            const {roomId} = data
            socket.join(roomId)
            socket.emit('trader room joined', data)
        })

        // ADD ROOM TO DB
        socket.on('add room to db', data => {
            // console.log("add room data:", data);
            const { userId, traderId, theirTrade, roomId, gameId } = data
            db.create_room( userId, traderId, theirTrade, gameId, roomId )
        })

        // GET ROOMS FROM DB
        socket.on('get requested rooms', async userId => {
            let rooms = await db.get_requested_rooms(userId)
            // console.log("rooms returned:", rooms);
            socket.emit('found requested rooms', rooms)
        })
        socket.on('get rooms I requested', async userId => {
            let rooms = await db.get_my_requested_rooms(userId)
            // console.log("rooms returned:", rooms);
            socket.emit('found rooms I requested', rooms)
        })

        // NEW MESSAGE
        socket.on('send out message', data => {
            const {roomId} = data
            io.to(roomId).emit('message received', data )
        })

        // SEND TRADE TO OFFER
        socket.on('send out trade', data => {
            socket.emit('trade received', data)
        })
        socket.on('send out trade', data => {
            // console.log("broadcast data:", data);
            const { myTrade: theirTrade, game_name: theirGameName, points: theirGamePoints, traderName, traderRating, traderProfilePic } = data
            const game = { theirTrade, theirGameName, theirGamePoints, traderName, traderRating, traderProfilePic }
            socket.to(data.room).broadcast.emit('trade broadcast', game)
        })
        // SENDING POINTS
        socket.on('send points', data => {
            const {tradePoints1, roomId} = data
            socket.to(roomId).broadcast.emit('points received', tradePoints1)
        })

        // CONFIRM TRADE
        socket.on("send confirmation", confirmation => {
            const { userId, roomId } = confirmation
            io.to(roomId).emit('confirmation received', userId )
        })

        // DISCONNECT
        socket.on('disconnect', roomId => {
            socket.leave(roomId)
        })
    }
}