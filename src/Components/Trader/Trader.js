import "./Trader.css";
import React, { Component } from "react";
// import { connect } from "react-redux";
import MyGames from '../GameContainers/MyGames'
import SellerGames from '../GameContainers/SellerGames'
import { AddCircle, Up, Down } from 'grommet-icons';

class Trader extends Component {
  constructor() {
    super();
    this.state = {
      username: 'Blake',
      messages: [{
        username: 'Blake',
        content: 'Hello, I would Like to trade games with you?',
        profile_pic: "https://robohash.org/hello"
      },{
        username: 'Danny',
        content: 'Yes of course, what do you have to trade?',
        profile_pic: "https://robohash.org/world"
      },{
        username: 'Blake',
        content: 'I have Halo 4 that I would like to trade for your Destiny 2.',
        profile_pic: "https://robohash.org/hello"
      }]
    };
  }

  render() {

    let messages = this.state.messages.map((e, i) => {
      return (
        <div key={i}> 
        {e.username === this.state.username ?
          <div className="each-user-message">
            <img className="chat-profile-pic" alt="" src={e.profile_pic} />
            <div className="message-content" >{e.content}</div>
          </div>
          :
          <div className="each-seller-message">
            <img className="chat-seller-profile-pic" alt="" src={e.profile_pic} />
            <div className="message-content" >{e.content}</div>
          </div>}
        </div>
      )
    })

    return (
      <div className="Trader">
        <div className="trade-container" >
            <div className="user-section" >
                <div className="user-rating" >96%</div>
                <img className="profile-pic" alt="" src="https://robohash.org/hello" />
                <h3 className="username">Blake</h3>
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
                <h3 className='game-title' >Halo 4</h3>
                <img className="selected-game" alt="" src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/12/20/gaming_halo_4_cover_art.jpg?resize=480:*" />
                <div className="game-points" >
                  <div className="up-down-pts" ><Up className="up" color='#E5E5E5'/><Down className="down" color='#E5E5E5'/></div>
                  40<span>pts</span>
                </div>
              </div>
              <div className="trade-chat" >
                <section className="chat-messages">
                  {messages}
                </section>
                <form className="chat-form">
                  <input type="text" name="chatInput" className="chat-input" placeholder="Compose Message..." />
                  <button className="chat-submit" >Send Message</button>
                </form>
                <br/>
                <div className="chat-confirmation" >
                  <button className="confirm" >Confirm</button>
                  <button className="confirm" >Confirm</button>
                </div>
              </div>
              <div className="selected-trade" >
                <h3 className='game-title' >Destiny 2</h3>
                <img className="selected-game" alt="" src="https://images-na.ssl-images-amazon.com/images/I/5159Nq1DabL.jpg" />
                <div className="game-points" >
                  50<span>pts</span>
                </div>
              </div>
            </div>
            <div className="seller-section" >
            <div className="user-rating" >80%</div>
                <img className="profile-pic" alt="" src="https://robohash.org/hello" />
                <h3 className="seller-username">Danny</h3>
                <p className="trade-count">18 Trades</p>
            </div>
        </div>
        <section className="games" >
            <MyGames />
            <SellerGames />
        </section>
      </div>
    );
  }
}

export default Trader

// const mapStateToProps = reduxState => {
//   return reduxState;
// };

// export default connect(
//   mapStateToProps,
//   null
// )(Trader);
