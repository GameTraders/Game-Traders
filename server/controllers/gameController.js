require('dotenv').config()
const axios = require("axios")
const {API_KEY} = process.env
module.exports = {
    getGameName: async (req,res) => {
        const {name} = req.body
        const results = await axios.get(`https://rawg.io/api/games?search=${name}&page_size=12`)
        res.status(200).send(results.data)
    }
}