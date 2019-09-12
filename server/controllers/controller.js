module.exports = {
    //tested and working with postman
    getUserInfo: (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.params
        db.get_user_info([user_id]).then(result => {

            res.status(200).send(result)
        })
    },
    updateUserProfile: (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.params
        const {username, email, profile_pic, city, state, zip, street} = req.body
        db.update_user_profile({username, email, profile_pic,city,state, zip, street, user_id}).then(result => {
            res.status(200).send(result)
        })
    },
    getUserGames: (req, res) => {
        //tested and working with postman
        const db = req.app.get('db')
        const {user_id} = req.params
        db.get_user_games([user_id]).then(result => {
            res.status(200).send(result)
        })
    },
    getUserWishlist: (req, res) => {
        //tested and working with postman
        const db = req.app.get('db')
        const {user_id} = req.params
        db.get_user_wishlist([user_id]).then(result => {
            res.status(200).send(result)
        })
    },
    saveNewGame: (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.params
        const {game_id, game_name, background_image, released, platforms, genre, metacritic} = req.body
        db.save_new_game({game_id, game_name, background_image, released, platforms, genre, metacritic}).then(res => {
            res.status(200).send()
        })
        db.save_game_id({user_id, game_id}).then(newGame => {
            res.status(200).send(newGame)
        })

    },
    addToWishlist: (req, res) => {
        console.log('req.body:', req.body);
        const db = req.app.get('db')
        const {user_id} = req.params
        console.log('user_id:', user_id);
        const {id} = req.body
        db.add_to_wishlist(user_id, id).then(res => {
            res.sendStatus(200)
        })
    }
}