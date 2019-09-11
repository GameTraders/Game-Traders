import './Dashboard.css'
import React, { Component } from "react"
import axios from 'axios';
import {Dragable} from "gsap/all"

export default class Dashboard extends Component {
    state = {
        gameName: '',
        checkBox: true,
        games: []

    }

    handleChange(key, e) {
        this.setState({
            [key]: e
        })
    }
    componentDidMount() {
        this.getName()
    }
    getName = async () => {
        const name = this.state.gameName
        console.log(name)
        const results = await axios.post("/api/games", { name })
        console.log('results:', results.data.results)
        this.setState({
            games: results.data.results
        })
    }

    render() {
        // console.log(object);
        let cover = "https://i.redd.it/uk00vkrvfkb11.png"
        let points = "??"
        const { checkBox } = this.state
        return (
            <div className="Dashboard">
                <div className="Dashboard_NavBar">
                    <div className="Dashboard_Logo">
                        <h1>Game Traders</h1>
                    </div>
                    <div className="Dashboard-search-container">
                        <button onClick={this.getName} className="Authentication_Button">
                            <h4>Search</h4>
                        </button>
                        <div className="Authentication_Username_Container">
                            <h4>Search</h4>
                            <input onChange={(e) => { this.handleChange("gameName", e.target.value) }} className="Authentication_Input" type="text" placeholder="Search by Game Name" />
                        </div>
                        <div className="check-container"  >
                            <div className="filter-option">
                                <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({ checkBox: !checkBox })} />
                                <p>M - Rated</p>
                            </div>
                            <div className="filter-option">
                                <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({ checkBox: !checkBox })} />
                                <p>XBox 360</p>
                            </div>
                            <div className="filter-option">
                                <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({ checkBox: !checkBox })} />
                                <p>XBox One</p>
                            </div>
                        </div>
                        <div className="check-container"  >
                            <div className="filter-option">
                                <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({ checkBox: !checkBox })} />
                                <p>PlayStation 2</p>
                            </div>
                            <div className="filter-option">
                                <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({ checkBox: !checkBox })} />
                                <p>PlayStation 3</p>
                            </div>
                            <div className="filter-option">
                                <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({ checkBox: !checkBox })} />
                                <p>PlayStation 4</p>
                            </div>
                        </div>
                        <div className="check-container"  >
                            <div className="filter-option">
                                <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({ checkBox: !checkBox })} />
                                <p>Wii</p>
                            </div>
                            <div className="filter-option">
                                <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({ checkBox: !checkBox })} />
                                <p>Nintendo Switch</p>
                            </div>
                            <div className="filter-option">
                                <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({ checkBox: !checkBox })} />
                                <p>PlayStation 4</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-container">
                    <div className="dashboard-searched-games">
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
                    </div>
                </div>
            </div>
        )
    }
}

