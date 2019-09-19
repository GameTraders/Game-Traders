import "./Trader.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import AddPoints from '../Wizards/AddPoints/AddPoints'
import MyGames from '../GameContainers/MyGames'
import SellerGames from '../GameContainers/SellerGames'
import { AddCircle, Up, Down, Home, Power } from 'grommet-icons';
import {Link} from 'react-router-dom'
import {logout} from '../../ducks/userReducer'
import socket from '../../sockets'
import GTLogo from '../../GTLogo.png'
import Stripe from '../Stripe/Stripe'
const moment = require('moment')

class Trader extends Component {
  constructor() {
    super();
    this.state = {
      points: false,
      roomId: "",
      obj: {},
      message: '',
      messages: [],
      myTrade: {},
      myConfirmed: false,
      theirConfirmed: false
    };
  }

  componentDidMount(){

        socket.on('room joined', data => {
          console.log({data});
          const {roomId} = this.props.match.params
          console.log({roomId});
          this.setState({ 
            obj: data,
            roomId 
          })
        })
        socket.on('trader room joined', data => {
          console.log({data});
          const {roomId} = this.props.match.params
          // const {myTrade}= data
          console.log({roomId});
          this.setState({ 
            obj: data,
            roomId,
            myTrade: data 
          })
        })
        socket.on('message received', data => {
          console.log('message received:', data);
          const {messages} = this.state
          let messagesArray = [...messages]
          console.log({messages});
          messagesArray.push(data)
          this.setState({
            messages: messagesArray
          })
        })
        socket.on('trade received', myTrade => {
          console.log('element:', myTrade)
          this.setState({ myTrade })
        })
        socket.on('trade broadcast', obj => {
          console.log("broadcast", obj);
          this.setState({obj})
        })
        socket.on("confirmation received", (userId) => {
          console.log("props:", this.props.user);
          console.log("userId confirmation:", userId);
          const {user_id: myId} = this.props.user
          if (userId === myId){
            this.setState({myConfirmed: !this.state.myConfirmed})
          } else {
          this.setState({theirConfirmed: !this.state.theirConfirmed})
          }
        })

  }

  componentWillUnmount() {
    socket.emit('disconnect', this.state.roomId)
  }
  

  logout = ()=> {
      this.props.logout()
          this.props.history.push("/")
  }
  toggleChange = () => {
    this.setState({points: !this.state.points})
  }
  sendConfirmation = () => {
    const {user_id: userId} = this.props.user
    const { roomId } = this.props.match.params
    const confirmation = { userId, roomId }
    socket.emit("send confirmation", confirmation)
  }

  sendMessage = (e) => {
    e.preventDefault()
    const message = e.target.elements.chatInput.value
     console.log({message});
     console.log('props for message:', this.props.user);
    const {roomId} = this.props.match.params
    const { user_id: userId, username, profile_pic: profilePic } = this.props.user
    console.log("roomId:", roomId);
    console.log("userId:", userId);
    console.log("username:", username);
    console.log("profilePic:", profilePic);
    socket.emit('send out message', {
      message,
      roomId,
      userId,
      username,
      profilePic,
      createdAt: moment().startOf('minutes').fromNow()
    })
    document.getElementsByClassName('chat-input')[0].value=null
  }

  render() {
    console.log('data:', this.state.obj);
    console.log("params:", this.props.match.params);
    const {roomId} = this.props.match.params
    console.log({roomId});
    const { username: myName, profile_pic: myPic, user_points: myPoints, user_rating: myRating, user_id: myId } = this.props.user
    const { myTrade, game_name, points } = this.state.myTrade
    const { traderRating, traderName, traderId, traderProfilePic, theirGamePoints, theirTrade, theirGameName } = this.state.obj

    let messages = this.state.messages.map((e, i) => {
      console.log("element:", e);
      return (
        <div key={i}> 
        {e.username === myName ?
          <div className="each-user-message">
            <img className="chat-profile-pic" alt="" src={myPic} />
            <div className="message-content" >{e.message}</div>
            <div className="time-stamp">{e.createdAt}</div>
          </div>
          :
          <div className="each-seller-message">
            <img className="chat-seller-profile-pic" alt="" src={e.profilePic} />
            <div className="message-content" >{e.message}</div>
            <div className="time-stamp">{e.createdAt}</div>
          </div>}
        </div>
      )
    })

    return (
      <div className="Trader">

      <AddPoints />

        <div className="Dashboard_NavBar">
                <h1 className="link" onClick={this.logout}><Power size="large" color="#AED429" /></h1>
        
          <div className="Trader_Logo">
              <Link to="/about" ><img className="link"  src={GTLogo} alt="Logo" /></Link>
          </div>

          <div className="nav-links">
            {/* <Link className="link" to={{pathname: `/userProfile/${user.user_id}`}} ><img className="user-pic" alt="" src={user.profile_pic} /></Link> */}
            <Link to="/home" ><h1 className="link" ><Home size="large" color="#AED429" /></h1></Link>
          </div>

        </div>

        <div className="trade-container" >
            <div className="user-section" >
                <div className="user-rating" >{this.props.user.user_rating}%</div>
                <Link className="link" to={{pathname: `/userProfile/${myId}`}} ><img className="profile-pic" alt="" src={this.props.user.profile_pic} /></Link>
                <h3 className="username">{this.props.user.username}</h3>
                <p className="trade-count">22 Trades</p>
                <div className="user-points">
                    <h1>{this.props.user.user_points}</h1>
                    <div className="point-adder">
                        <p>Points</p>
                        {this.state.points === false ?<div className="add-points-btn"> <AddCircle color='rgb(252, 155, 0' size='medium' onClick={() => this.setState({points: !this.state.points})}/> </div>: <Stripe user_id={this.props.match.params.user_id} toggleChange={this.toggleChange}/>}
                    </div>
                </div>
            </div>
            <div className="trade-section" >
              <div className="selected-trade" >
                <h3 className='game-title' >{game_name}</h3>
                <img className="selected-game" alt="" src={myTrade} />
                <div className="game-points" >
                  <div className="up-down-pts" ><Up className="up" color='#E5E5E5'/><Down className="down" color='#E5E5E5'/></div>
                  {points}<span>pts</span>
                </div>
              </div>
              <div className="trade-chat" >
                <section className="chat-messages">
                  {messages.length > 0 ? <div>{messages}</div> : null}
                </section>



                <form onSubmit={e => this.sendMessage(e)} className="chat-form">
                  <input type="message" name="chatInput" className="chat-input" placeholder="Compose Message..." />
                  <button className="chat-submit" >Send Message</button>
                </form>



                <br/>
                <div className="chat-confirmation" >

                  <div className="confirm-box">
                    {this.state.myConfirmed === false ?
                    <div className="confirm" onClick={() => this.sendConfirmation()}>Confirm</div>
                  :
                    <button className="confirm-pressed" onClick={() => this.sendConfirmation()}>Confirmed</button>}
                  </div>
                  <div className="confirm-box">
                    {this.state.theirConfirmed === false ?
                    <div className="confirm" >Confirm</div>
                  :
                    <button className="confirm-pressed" >Confirmed</button>}
                  </div>

                </div>
              </div>
              <div className="selected-trade" >
                <h3 className='game-title' >{theirGameName}</h3>
                <img className="selected-game" alt="" src={theirTrade} />
                <div className="game-points" >
                  {theirGamePoints}<span>pts</span>
                </div>
              </div>
            </div>
            <div className="seller-section" >
            <div className="user-rating" >{traderRating}%</div>
                <img className="profile-pic" alt="" src={traderProfilePic} />
                <h3 className="seller-username">{traderName}</h3>
                <p className="trade-count">18 Trades</p>
            </div>
        </div>
        <section className="games" >
            <MyGames room = {roomId}/>
            <SellerGames traderName={traderName} />
        </section>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(
  mapStateToProps,
  {logout}
)(Trader);
