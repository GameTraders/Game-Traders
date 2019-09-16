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
const moment = require('moment')
// const dummyMessage = {
//   username: this.state.username,
//   message: 'Hello, I would Like to trade games with you?',
//   profile_pic: this.state.profilePic
// }

class Trader extends Component {
  constructor() {
    super();
    this.state = {
      profilePic: "",
      roomId: "",
      obj: {},
      username: "",
      userId: "",
      message: '',
      messages: [],
      myTrade: {},
      myConfirmed: false,
      theirConfirmed: false
    };
  }

  componentDidMount(){
        const { username, user_id, profile_pic } = this.props.user
        this.setState({
          username,
          profilePic: profile_pic,
          userId: user_id
        })
        socket.on('room joined', data => {
          console.log({data});
          const {roomId} = this.props.match.params
          console.log({roomId});
          this.setState({ 
            obj: data,
            roomId 
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

  }

  componentWillMount() {
    socket.emit('disconnect', this.state.roomId)
  }
  

  logout = ()=> {
      this.props.logout()
          this.props.history.push("/")
  }

  sendMessage = (e) => {
    e.preventDefault()
    const message = e.target.elements.chatInput.value
     console.log({message});
    const {roomId, userId, username, profilePic} = this.state
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
    const { background_image, game_name, points } = this.state.myTrade
    const { username, profilePic, userId } = this.state
    const { gameTrade, traderPoints, traderRating, traderName, traderProfilePic, gameName } = this.state.obj

    let messages = this.state.messages.map((e, i) => {
      return (
        <div key={i}> 
        {e.username === this.state.username ?
          <div className="each-user-message">
            <img className="chat-profile-pic" alt="" src={e.profilePic} />
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
                <div className="user-rating" >96%</div>
                <Link className="link" to={{pathname: `/userProfile/${userId}`}} ><img className="profile-pic" alt="" src={profilePic} /></Link>
                <h3 className="username">{username}</h3>
                <p className="trade-count">22 Trades</p>
                <div className="user-points">
                    <h1>44</h1>
                    <div className="point-adder">
                        <p>Points</p>
                        <div className="add-points-btn" ><AddCircle color='rgb(252, 155, 0)' size='medium' /></div>
                    </div>
                </div>
            </div>
            <div className="trade-section" >
              <div className="selected-trade" >
                <h3 className='game-title' >{game_name}</h3>
                <img className="selected-game" alt="" src={background_image} />
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
                    <div className="confirm" onClick={() => this.setState({myConfirmed: true})}>Confirm</div>
                  :
                    <button className="confirm-pressed" onClick={() => this.setState({myConfirmed: false})}>Confirmed</button>}
                  </div>
                  <div className="confirm-box">
                    {this.state.theirConfirmed === false ?
                    <div className="confirm" onClick={() => this.setState({theirConfirmed: true})}>Confirm</div>
                  :
                    <button className="confirm-pressed" onClick={() => this.setState({theirConfirmed: false})}>Confirmed</button>}
                  </div>

                </div>
              </div>
              <div className="selected-trade" >
                <h3 className='game-title' >{gameName}</h3>
                <img className="selected-game" alt="" src={gameTrade} />
                <div className="game-points" >
                  {traderPoints}<span>pts</span>
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
            <SellerGames />
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
