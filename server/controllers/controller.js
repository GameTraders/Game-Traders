module.exports = {
    //tested and working with postman
    getUserInfo: (req, res) => {
        const db = req.app.get('db')
        const { user_id } = req.params
        db.get_user_info([user_id]).then(result => {

            res.status(200).send(result)
        })
    },
    updateUserProfile: (req, res) => {
        const db = req.app.get('db')
        const { user_id } = req.params
        const { username, email, profile_pic, city, state, zip, street } = req.body
        db.update_user_profile({ username, email, profile_pic, city, state, zip, street, user_id }).then(result => {
            res.status(200).send(result)
        })
    },
    getUserGames: (req, res) => {
        //tested and working with postman
        const db = req.app.get('db')
        const { user_id } = req.session.user
        console.log('session:',req.session.user)
        db.get_user_games([user_id]).then(result => {
            res.status(200).send(result)
        })
    },
    getUserWishlist: (req, res) => {
        //tested and working with postman
        const db = req.app.get('db')
        const {user_id} = req.session.user
        db.get_user_wishlist([user_id]).then(result => {
            res.status(200).send(result)
        })
    },
    saveNewGame: (req, res) => {
        const db = req.app.get('db')
        const { user_id } = req.params
        const { game_id, game_name, background_image, released, platforms, genre, metacritic } = req.body
        db.save_new_game({ game_id, game_name, background_image, released, platforms, genre, metacritic }).then(res => {
            res.status(200).send()
        })
        db.save_game_id({ user_id, game_id }).then(newGame => {
            res.status(200).send(newGame)
        })

    },
    addToWishlist: async (req, res) => {
        const db = req.app.get('db')
        const { user_id } = req.params
        const { id, name, background_image, released, metacritic } = req.body
        const game = await db.search_for_game(id)
        if (game.length == 0) {
            await db.save_new_game(id, name, background_image, released, metacritic)
        }
        const alreadyadded = await db.search_wish_list_gameid(id)
        if (alreadyadded.length > 0) {
            return res.status(200).send({message: "already added"})
        }
        await db.add_to_wishlist(user_id, id)
        res.status(200).send({ message: "game Added" })
    },
    addToGamelist: async (req, res) => {
        const db = req.app.get('db')
        const { user_id } = req.params
        const { id, points, name, background_image, released, metacritic } = req.body
        const game = await db.search_for_game(id)
        if (game.length == 0) {
            await db.save_new_game(id, name, background_image, released, metacritic)
        }
        const alreadyadded = await db.search_game_list_gameid(id)
        if (alreadyadded.length > 0) {
            return res.status(200).send({message: "already added"})
        }
        await db.add_to_gamelist(user_id, id, points)
        res.status(200).send({ message: "game Added" })
    },
    getTrades: async (req, res) => {
        const db = req.app.get('db')
        const {game_id} = req.params
        db.get_trades([game_id]).then(result => {
            res.status(200).send(result)
        })
    },
    getGameById: (req, res) => {
        const db = req.app.get('db')
        const {game_id} = req.params
        db.get_game_by_id([game_id]).then(result => {
            res.status(200).send(result)
        })
    }
}

