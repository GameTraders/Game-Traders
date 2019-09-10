require('dotenv').config()
const axios = require("axios")
const {API_KEY} = process.env
module.exports = {
    getGameName: async (req,res) => {
        const {name} = req.body
        const results = await axios({
            url: "https://api-v3.igdb.com/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': API_KEY
            },
            data: `fields age_ratings,artworks,category,cover,name,platforms,similar_games,total_rating,total_rating_count,url; search "${name}";`
        })
        console.log(results.data)
        res.status(200).send(results.data)
    }
}