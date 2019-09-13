module.exports = {
    setSocketListeners: function ( socket, db, io ) {
        // JOIN ROOM
        socket.on('join room', data => {
            // const { roomId, userId, traderId, gameImg } = data
            const { roomId } = data
            socket.join(roomId)
            io.in(roomId).emit('room joined', data)
        })

        // NEW MESSAGE
        socket.on('send out message', data => {
            const {roomId} = data
            io.to(roomId).emit('message received', data )
        })
    }
}