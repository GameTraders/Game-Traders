import React, { Component } from "react"
import axios from "axios"
import "./Search.css"



export default class Search extends Component {
    state = {
        gamename: "",
        games: []
    }
    componentDidMount() {
        this.getname()
    }
//     componentDidUpdate() {
//         Draggable.create(".home-game-mini", {
//             type: "x,y",
//             edgeResistance: 0.15,
//             bounds: ".App",
//             throwProps: true,
//             onDrag: function () {
//             }
//         })
// }


    handleChange(key, e) {
        this.setState({
            [key]: e
        })
    }
    getname = async () => {
        const name = this.state.gamename
        const results = await axios.post("/api/games", { name })
        this.setState({
            games: results.data.results
        })
        console.log(this.state)
    }
    render() {
        // eslint-disable-next-line
        let cover = "https://i.redd.it/uk00vkrvfkb11.png"
        let points = "??"

        return (
            <div>

                <h5>search</h5>
                <input onChange={(e) => { this.handleChange("gamename", e.target.value) }} type="text" placeholder="Search by Game Name" />
                <button onClick={this.getname}>Get by name</button>
                <div className="search-outer">
                    <div className="search-container">
                        {this.state.games.length > 0 ? this.state.games.map((e, i) => {
                            return (
                                <div key={i} className="home-game-mini">
                                    <h4 className="home-mini-name">
                                        {e.name.length > 15 ? `${e.name.substring(0, 16)}...` : `${e.name}`}
                                    </h4>
                                    <h4 className="mini-name-hover">{e.slug}</h4>
                                    <div className="home-mini-dispay">
                                        <img className="home-mini-cover-art" alt="" src={e.background_image} />
                                        <div className="game-details">{e.metacritic}</div>
                                        <div className="home-game-mini-points">{points}</div>
                                    </div>
                                </div>
                            )
                        }) : <h4>Loading</h4>}
                <div className="home-game-mini"></div>
                    </div>
                    <div className="added-games-container">
                        <div className="added-games-header">
                            h1 my games list
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}