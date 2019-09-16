module.exports = {
    setSocketListeners: function ( socket, db, io ) {
        // JOIN ROOM
        socket.on('join room', data => {
            const { roomId } = data
            socket.join(roomId)
            io.in(roomId).emit('room joined', data)
        })

        // NEW MESSAGE
        socket.on('send out message', data => {
            const {roomId} = data
            io.to(roomId).emit('message received', data )
        })

        // SEND TRADE
        socket.on('send out trade', data => {
            const {el, room} = data.data
            io.to(room).emit('trade received', el)
        })

        // CONFIRM TRADE
        socket.on("send confirmation", roomId => {
            io.to(roomId).emit('confirmation received')
        })

        // DISCONNECT
        socket.on('disconnect', roomId => {
            socket.leave(roomId)
        })
    }
}