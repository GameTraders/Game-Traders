import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import "./Trades.css";
import { Home, Power } from "grommet-icons";
import GTLogo from '../../GTLogo.png'
import sockets from "../../sockets";



class Trades extends Component {
  state = {
    roomId: '',
    best: [
      {
        username: "Blake",
        games: [
          "https://media.rawg.io/media/games/278/2783e31b00d7b87905e5346a1df1ccfb.jpg"
        ],
        trade_count: 22,
        metacritic: 80,
        profile_pic:
          "https://lh3.googleusercontent.com/g_kpcfFSt6i3I7OuI8V4SD6rfkj11Za8RAtphz_107wBg_BS0kO34tYFnWiABJ9sz0yb6wK3IOXhOdqVjFUsxmLhtyTSSspX4JlwhxGxL03To-ZHOepTJ4GdjQj8XQ17I2J6anbEQ16zp6_8pjvpQG5Rwue57GjkpGoqA2eDq3iQDqA48W_3kL7ZfKZ-Ai4QJIZkClhAAu8yvMGVRJ-RMyH-lzlAkRdlsnnOn6aDQkKqz_rx7dApWl82wV6Ib7B6XQINnGdazrsn1iPoXQj8x4C4uACk1dA5lVg-KqC36Jr5O6-p4gwh03hIfnbG5uGLTxOpYKTH32WDTANsUUAJHz0fldgmR8N8doUssBFPVQWQrQmIxps-SjBPPjc6fwfj3FGvpVT2ru9xK-BppTRVnTpnA1PErok6_2PHdf5NrswHeoyq5dvdsjUcdF9Y7WPD8eRybx4s3ll-XWd1w_fHQt-TuKpeoL_IBhKJ311bn5ES5tJbRP65R6w_ojKYxivi2W781WiCp3Cc3IJdR5180qyLHAcRtSqB2NFd5R2rQjv3v4Nrmju0QTY4CrRH67UU5RNVy5Y_HJr0r-peSuxx7Zhqz9P3V6AcIM2uhAkM4LzZ85NYxo-XYig7ICz5bHbNl5jA5mOtIbzldIGcNB7OQU6rjBEEJedGUlsu8JPTGEEbAhn0wRxqIA=s480-no"
      }
    ],
    great: [],
    good: [],
    myGames: [],
    game: [],
    trades: []
  };

  componentDidMount() {
    this.getGameById();
    this.getTradesForUser();
  }
  getGameById = () => {
    axios.get(`/api/game/${this.props.match.params.game_id}`).then(res => {
      this.setState({
        game: res.data
      });
    });
  }

  combineAwait = async (el) => {
    console.log('el argument being passed:', el);
    await this.createRoomId()
    this.startChat()
  }

  createRoomId = () => {
    const { user_id: trader_id } = this.state
    const { game_id } = this.state
    const { user_id } = this.state
    const traderString = `${trader_id.toString()}`
    const gameString = `${game_id.toString()}`
    const userString = `${user_id.toString()}`
    const colon = ':'
    let roomId
      if (traderString >= userString) {
        roomId = traderString.concat( colon, userString, colon, gameString )
          this.setState({ roomId })
      } else {
        roomId = userString.concat( colon, traderString, colon, gameString )
          this.setState({ roomId })
      }
      console.log('creating room...', roomId);
  }

  startChat = async () => {
    let { roomId } = this.state
    console.log('starting trade', roomId);
    const { user_id: userId } = this.state.props.user
    const { user_id: traderId } = this.state
    const { cover_art: gameTrade } = this.state.game
    const data = { userId, traderId, gameTrade }
     console.log("starting trade data:", data);
     await sockets.emit('join room', data)
     window.location.href = `http://localhost:4200/#/trader/${roomId}`
  }
  getTradesForUser = () => {
    axios.get(`/api/getTrades/${this.props.match.params.game_id}`).then(res => {
      this.setState({
        trades: res.data
      });
    });
  };


  render() {
    console.log(this.state.trades);
    return (
      <div className="Trades_Outer">
        <div className="Profile_NavBar">
          <h1 className="link" onClick={this.logout}>
            <Power size="large" color="#AED429" />
          </h1>

          <div className="Profile_Logo">
            <Link to="/about">
              <img className="link" src={GTLogo} alt="Logo" />
            </Link>
          </div>

          <div className="nav-links">
            {/* <Link className="link" to={{pathname: `/userProfile/${user.user_id}`}} ><img className="user-pic" alt="" src={user.profile_pic} /></Link> */}
            <Link to="/home">
              <h1 className="link">
                <Home size="large" color="#AED429" />
              </h1>
            </Link>
          </div>
        </div>
        <div className="topSide">
          <div className="gamePic">
            {this.state.game.length > 0 ? (
              <img src={this.state.game[0].background_image} alt="" />
            ) : null}
          </div>
        </div>
        <div className="bottomSide">
          {this.state.trades.length > 0
            ? this.state.trades.map((el, i) => (
                <div key={i} className="userInfo">
                <div className="user-rating">{el.user_rating}</div>
                <img className='profile-pic' src={el.profile_pic} alt=""/>
                <h3 className='username'>{el.username}</h3>
              </div>
              ))
            : null}
        </div>
      </div>
    );

  }
}

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(
  mapStateToProps,
  null
)(Trades);
