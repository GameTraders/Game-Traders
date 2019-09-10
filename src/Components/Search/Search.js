import React, { Component } from "react"
import axios from "axios"

export default class Search extends Component {
    state = {
        gamename: ""
    }

    handleChange(key, e) {
        this.setState({
            [key]: e
        })
    }
    getname = async () => {
        const name = this.state.gamename
        console.log(name)
        const results = await axios.post("/api/games", {name})
        console.log(results)
    }
    render() {

        return (
            <div>
                <h5>Dashboard</h5>
                <input onChange={(e)=>{this.handleChange("gamename", e.target.value)}} type="text" placeholder="Search by Game Name"/>
                <button onClick={this.getname}>Get by name</button>
            </div>
        )
    }
}