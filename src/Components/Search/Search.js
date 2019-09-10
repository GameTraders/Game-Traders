import React, { Component } from "react"
import axios from "axios"

export default class Search extends Component {
    state = {
        gamename: "",
        games: []
    }
    componentDidMount() {
        this.getname()
    }

    handleChange(key, e) {
        this.setState({
            [key]: e
        })
    }
    getname = async () => {
        const name = this.state.gamename
        const results = await axios.post("/api/games", {name})
      this.setState({
          games: results.data.results
      })
      console.log(this.state)
    }
    render() {

        return (
            <div>
                <h5>Dashboard</h5>
                <input onChange={(e)=>{this.handleChange("gamename", e.target.value)}} type="text" placeholder="Search by Game Name"/>
                <button onClick={this.getname}>Get by name</button>
                {this.state.games.length > 0 ? this.state.games.map((el,i)=> (
                    <div>
                        <h4>{el.name}</h4>
                        <img src={el.background_image} alt=""/>
                    </div>
                )) : <h4>Loading</h4>}
            </div>
        )
    }
}