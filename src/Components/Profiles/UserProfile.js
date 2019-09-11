import React, { Component } from "react";
import axios from "axios";
import { AddCircle, Transaction } from 'grommet-icons';
import MyGames from '../GameContainers/MyGames'
import WishList from '../GameContainers/WishList'
import {connect} from 'react-redux'

class UserProfile extends Component {
  state = {
    username: "",
    email: "",
    profile_pic: "",
    user_points: 0,
    user_rating: 0,
    city: "",
    state: "",
    street: "",
    zip: 0
  };

  componentDidMount(){
    console.log('profile');
  }
  getUserInfo = () => {
    axios.get(`/api/users/${this.props.match.params.user_id}`).then(res => {
      console.log(res.data);
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
      });
    });
  };
  render() {
    // const {username} = this.props.history.match
    console.log('props object', this.props.user)
    const {user} = this.props
    return (
      <div className="userProfile">
        <div className="profileContainer">
          <div className="userInfo">
            User Info
            <div className="user-rating">96%</div>
            <img className='profile-pic' src="https://robohash.org/hello" alt=""/>
            <h3 className='username'>{user.username}</h3>
            <p className='trade-count'>22 Trades</p>
            <div>
                <h1>44</h1>
                <div>
                    <p>Points</p>
                    <div><AddCircle color='rgb(252, 155, 0' size='medium'/></div>
                </div>
            </div>
          </div>
          <div className="pastTrades">
              Past Trades
            <h3>Past Trades</h3>
            <div>
                <div>Title 1</div>
                <div><Transaction color='AED429' size='small'/></div>
                <div>Title 2</div>
                <h4>Date</h4>
            </div>
          </div>
          <div className="currentTrades">
              Current Trades
              
              </div>
          <div className="userFriends">
              Friends
              <h3>Friends</h3>
              <div>
                  <div className='friend'>Friend 1</div>
                  <div className='friend'>Friend 2</div>
              </div>
          </div>
          <section className="games" ><MyGames/><WishList/></section>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return reduxState
}
export default connect(mapStateToProps, null)(UserProfile)