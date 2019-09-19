import './AddWish.css'
import React, { Component } from 'react'
import { AddCircle } from "grommet-icons";
import Axios from 'axios';
import swal from 'sweetalert';

export default class AddWish extends Component {
    state= {
        points: 0
    }

    addGame = () => {
        const user_id = +this.props.user.user_id
        const {id, name, background_image, released, metacritic} = this.props.state
        const {points} = this.state
        Axios.post(`/api/gamelist/${user_id}`, {id, points, name, background_image, released, metacritic}).then(res => {
            swal('Success', `${name} was added to your games list for ${points} points`, 'success')
        }
        ).catch('error', 'Whoops! Something went wrong', 'error')
    }
    addWish = () => {
        const user_id = +this.props.user.user_id
        const {id, name, background_image, released, metacritic} = this.props.state
        const {points} = this.state
        Axios.post(`/api/wishlist/${user_id}`, {id, points, name, background_image, released, metacritic}).then(res => {
            swal('Success', `${name} was added to your wishlist`, 'success')
        }
        ).catch('error', 'Whoops! Something went wrong', 'error')
    }

    render() {
        return (
            <div className="wishDropdown">
                <div className="submit-games-addpoints">
                    <div>
                    
                    </div>
                    <div>
                        <h3> Points:</h3>
                        <input onChange={(e)=> {this.setState({points: e.target.value})}} className="submit-games-points" type="text" placeholder={this.state.points}/>
                    </div>
                </div>
                <div className="submit-game">
                    <div onClick={this.addGame} className="submit-wish link">
                        <h5>Add to Game List</h5>
                        <AddCircle size="medium" color="#FC9B00" />
                    </div>
                    <div onClick={this.addWish} className="submit-wish link">
                        <h5>Add to Wish List</h5>
                        <AddCircle size="medium" color="#FC9B00" />
                    </div>
                </div>
            </div>
        )
    }
}