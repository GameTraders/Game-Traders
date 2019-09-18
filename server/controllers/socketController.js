module.exports = {
    setSocketListeners: function ( socket, db, io ) {
        // JOIN ROOM
        socket.on('join new room', data => {
            const { roomId } = data
            socket.join(roomId)
            io.in(roomId).emit('room joined', data)
        })
        socket.on('join existing room', roomId => {
            socket.join(roomId)
        })

        // ADD ROOM TO DB
        socket.on('add room to db', data => {
            console.log("add room data:", data);
            const { userId, traderId, gameTrade, roomId, gameId } = data
            db.create_room( userId, traderId, gameTrade, gameId, roomId )
        })

        // GET ROOMS FROM DB
        socket.on('get rooms', async userId => {
            let rooms = await db.get_rooms(userId)
            console.log("rooms returned:", rooms);
            socket.emit('found rooms', rooms)
        })

        // NEW MESSAGE
        socket.on('send out message', data => {
            const {roomId} = data
            io.to(roomId).emit('message received', data )
        })

        // SEND TRADE TO OFFER
        socket.on('send out trade', data => {
            const {el, room} = data.data
            io.to(room).emit('trade received', el)
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