import React, { Component } from "react";
import axios from "axios";
import { AddCircle, Transaction, Home, Power } from 'grommet-icons';
import MyGames from '../GameContainers/MyGames'
import WishList from '../GameContainers/WishList'
import { connect } from 'react-redux'
import { logout, saveTraderId } from "../../ducks/userReducer";
import { Link } from 'react-router-dom'
import './UserProfile.css'
import socket from '../../sockets'
import GTLogo from '../../GTLogo.png'
import Stripe from '../Stripe/Stripe'

class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
          requestedRooms: [],
          myRequestedRooms: [],
          points: false,
          games: [],
    };
  }


componentDidMount(){
  const {user_id: myId} = this.props.user
  console.log('hit cdm in profile');
  axios.get("/api/test")
  const {user_id} = this.props.user
  socket.emit('get requested rooms', user_id)
  socket.on('found requested rooms', requestedRooms => {
    this.setState({requestedRooms})
  })
  socket.emit('get rooms I requested', myId)
  socket.on('found rooms I requested', myRequestedRooms => {
    this.setState({myRequestedRooms})
  })
}

joinRequestedRoom = (e) => {
  console.log('element:', e)
  const { user_id, room_id: roomId, profile_pic: traderProfilePic, username: traderName, game_trade: myTrade, user_points: traderPoints, user_rating: traderRating } = e
  const data = { traderProfilePic, traderName, myTrade, traderPoints, traderRating, roomId }
  this.props.saveTraderId(user_id)
  socket.emit('join existing room', data)
  this.props.history.push(`/trader/${roomId}`)
}

joinMyRequestedRoom = (e) => {
  console.log('element:', e)
  const { user_id, room_id: roomId, profile_pic: traderProfilePic, username: traderName, game_trade: myTrade, user_points: traderPoints, user_rating: traderRating } = e
  const data = { traderProfilePic, traderName, myTrade, traderPoints, traderRating, roomId }
  this.props.saveTraderId(user_id)
  socket.emit('join existing room', data)
  this.props.history.push(`/trader/${roomId}`)
}

toggleChange = () => {
  const {user_id} = this.props.user
  this.setState({points: !this.state.points})
  this.props.history.push(`/userProfile/${user_id}`)
}
logout = () => {
  this.props.logout();
  this.props.history.push("/");
};

  render() {
    console.log('requested rooms:', this.state.requestedRooms);
      const {username, user_points, profile_pic, user_rating} = this.props.user
    let requestedRoomsCard = this.state.requestedRooms.map((e, i) => {
      return (
          <div key={i} className="pastTradeBox" onClick={() => this.joinRequestedRoom(e)}>

              <div key={i} className="my-game-mini">
                <h4 className="mini-name">
                  {e.username.length > 5 ? `${e.username.substring(0, 6)}...` : `${e.username}`}
                </h4>
                <h4 className="mini-name-hover">{e.username}</h4>
                <div className="home-mini-dispay">
                  <img className="mini-cover-art" alt="" src={e.profile_pic} />
                </div>
              </div>

          <div className='tradeArrows'><Transaction color='#AED429' size='small' /></div>

              <div key={i} className="my-game-mini">
                <h4 className="mini-name">
                  {e.room_id.length > 5 ? `${e.room_id.substring(0, 6)}...` : `${e.room_id}`}
                </h4>
                <h4 className="mini-name-hover">{e.room_id}</h4>
                <div className="home-mini-dispay">
                  <img className="mini-cover-art" alt="" src={e.game_trade} />
                </div>
              </div>

          </div>
      )
  })
  let myRequestedRoomsCard = this.state.myRequestedRooms.map((e, i) => {
    return (
        <div key={i} className="pastTradeBox" onClick={() => this.joinMyRequestedRoom(e)}>

            <div key={i} className="my-game-mini">
              <h4 className="mini-name">
                {e.username.length > 5 ? `${e.username.substring(0, 6)}...` : `${e.username}`}
              </h4>
              <h4 className="mini-name-hover">{e.username}</h4>
              <div className="home-mini-dispay">
                <img className="mini-cover-art" alt="" src={e.profile_pic} />
              </div>
            </div>

        <div className='tradeArrows'><Transaction color='#AED429' size='small' /></div>

            <div key={i} className="my-game-mini">
              <h4 className="mini-name">
                {e.room_id.length > 5 ? `${e.room_id.substring(0, 6)}...` : `${e.room_id}`}
              </h4>
              <h4 className="mini-name-hover">{e.room_id}</h4>
              <div className="home-mini-dispay">
                <img className="mini-cover-art" alt="" src={e.game_trade} />
              </div>
            </div>

        </div>
    )
})
    return (
      <div className="userProfile">
        <div className="Profile_NavBar">
          <h1 className="link" onClick={this.logout}><Power size="large" color="#AED429" /></h1>

          <div className="Profile_Logo">
            <Link to="/about" ><img className="link" src={GTLogo} alt="Logo" /></Link>
          </div>

          <div className="nav-links">
            <Link to="/home" ><h1 className="link" ><Home size="large" color="#AED429" /></h1></Link>
          </div>

        </div>
        <div className="profileContainer">
          <div className="userInfo">
            
            <div className="user-rating">{user_rating}%</div>
            <img className='profile-pic' src={profile_pic} alt=""/>
            <h3 className='username'>{username}</h3>
            <p className='trade-count'>22 Trades</p>
            <div className='pointsHave'>
                <h1>{user_points}</h1>
                <div className='pointsAdd'>
                    <p>Points</p>
    {this.state.points === false ?<div className="add-points-btn"> <AddCircle color='rgb(252, 155, 0' size='medium' onClick={() => this.setState({points: !this.state.points})}/> </div>: <Stripe user_id={this.props.match.params.user_id} toggleChange={this.toggleChange}/>}
                </div>
            </div>
          </div>
          <div className='secondDiv'>
          <div className="pastTrades">
            <h3>Requested Trades</h3>
            <div className='actualTrades'>
                {requestedRoomsCard}
                <h4>Date</h4>
                </div>
            </div>
            <div className="currentTrades">
              <h3>My Requests</h3>
            <div className='actualTrades'>
                {myRequestedRoomsCard}
                <h4>Date</h4>
                </div>
            </div>
            <div className="userFriends">
              <h3>Completed Trades</h3>
              <div className='friendDiv'>
                <div className='friend'>Friend 1</div>
                <div className='friend'>Friend 2</div>
              </div>
            </div>

          </div>
        </div>
        <section className="bottom-section" ><MyGames /><WishList /></section>
      </div>
    );
  }
}



const mapStateToProps = (reduxState) => {
  return reduxState
}
export default connect(mapStateToProps, { logout, saveTraderId })(UserProfile)
