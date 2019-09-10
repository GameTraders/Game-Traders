module.exports = {
    //tested and working with postman
    getUserInfo: (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.params
        db.get_user_info([user_id]).then(result => {
            // console.log(user_id)
            // console.log(result)
            res.status(200).send(result)
        })
    }
}