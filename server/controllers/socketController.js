module.exports = {
    setSocketListeners: function ( socket, db, io ) {
        // JOIN ROOM
        socket.on('join room', data => {
            console.log('room succesfully joined:', data);
            // const { roomId, userId, traderId, gameImg } = data
            const { roomId } = data
            socket.join(roomId)
            io.in(roomId).emit('room joined', data)
        })

        // NEW MESSAGE
        socket.on('send out message', data => {
            console.log({data});
            const {roomId} = data
            io.to(roomId).emit('message received', data )
        })

        // SEND TRADE
        socket.on('send out trade', data => {
            console.log("just data:", data);
            console.log("data:", data.data.el, data.data.room);
            const {el, room} = data.data
            console.log('here:', room);
            io.to(room).emit('trade received', el)
        })

        // DISCONNECT
        socket.on('disconnect', roomId => {
            socket.leave(roomId)
        })
    }
}