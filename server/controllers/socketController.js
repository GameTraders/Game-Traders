module.exports = {
    getMessages: (req, res) => {
        //have not tested in postman yet
        const db = req.app.get('db')
        const {room_id} = req.params
        db.get_messages([room_id]).then(result => {
            res.status(200).send(result)
        })

    }
}