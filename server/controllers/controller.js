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
        const {game_id, name, cover_art, first_release_date, age_rating, platforms, igdb_link, total_rating, similar_games} = req.body
        db.save_new_game({game_id, name, cover_art, first_release_date, age_rating,platforms,igdb_link,total_rating,similar_games}).then(result => {
            res.sendStatus(200)
        })
        db.save_game_id({user_id, game_id}).then(newGame => {
            res.sendStatus(200)
        })

    },
    addToWishlist: (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.params
        const {game_id} = req.body
        db.add_to_wishlist({user_id, game_id}).then(result => {
            res.sendStatus(200)
        })
    }
}