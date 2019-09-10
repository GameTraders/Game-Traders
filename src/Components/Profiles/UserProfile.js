import React, {Component} from 'react'
import axios from 'axios'

export default class UserProfile extends Component {
    state = {
        username: '',
        email: '',
        profile_pic: '',
        user_points: 0,
        user_rating: 0,
        city: '',
        state: '',
        street: '',
        zip: 0
    }
    getUserInfo = () => {
        axios.get(`/api/users/${this.props.match.params.user_id}`).then(res => {
            console.log(res.data)
            this.setState({
                username: res.data.username,
                email: res.data.email,
                profile_pic: res.data.profile_pic,
                user_points: res.data.user_points,
                user_rating: res.data.user_rating,
                city: res.data.city,
                state: res.data.state,
                street: res.data.street,
                zip: res.data.zip
            })
        })
    }
    render () {
        return (
            <div>
                UserProfile
                <div>User Info</div>
                <div>Past Trades</div>
                <div>Current Trades</div>
                <div>Friends</div>
                <div>Wishlist</div>
                <div>My Games</div>
            </div>
        )
    }
}