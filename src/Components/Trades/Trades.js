import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { logout, saveTraderId } from "../../ducks/userReducer";
import { Home, Power } from "grommet-icons";
import "./Trades.css";
import GTLogo from "../../GTLogo.png";
import sockets from "../../sockets";

class Trades extends Component {
  state = {
    roomId: '',
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
  };

  logout = () => {
    this.props.logout();
    this.props.history.push("/");
  };

  combineAwait = async (el) => {
    console.log('el argument being passed:', el);
    await this.createRoomId(el)
    this.startChat(el)
  }

  createRoomId = (el) => {
    console.log({ el });
    const { user_id: trader_id } = el
    const { game_id } = this.state.game[0]
    const { user_id } = this.props.user
    const traderString = `${trader_id.toString()}`
    const gameString = `${game_id.toString()}`
    const userString = `${user_id.toString()}`
    const colon = ':'
    let roomId
    if (traderString >= userString) {
      roomId = traderString.concat(colon, userString, colon, gameString)
      this.setState({ roomId })
    } else {
      roomId = userString.concat(colon, traderString, colon, gameString)
      this.setState({ roomId })
    }
    this.props.saveTraderId(trader_id)
    console.log('creating room...', roomId);
  }


  startChat = async (el) => {
    let { roomId } = this.state
    console.log('starting trade', roomId);
    const { user_id: userId } = this.props.user
    const { user_id: traderId, user_points: traderPoints, user_rating: traderRating, username: traderName, profile_pic: traderProfilePic } = el
    const { background_image: theirTrade, game_name: gameName, game_id: gameId } = this.state.game[0]
    const data = { userId, traderId, theirTrade, roomId, traderPoints, traderRating, traderName, traderProfilePic, gameName, gameId }
     console.log("starting trade data:", data);
     await sockets.emit('join new room', data)
     await sockets.emit('add room to db', data)
     this.props.history.push(`/trader/${roomId}`)
  }

  compare = (a, b) => {
    const scoreA = a.user_rating;
    const scoreB = b.user_rating;
    let comparison = 0;
    if (scoreA > scoreB) {
      comparison = 1;
    } else if (scoreA < scoreB) {
      comparison = -1;
    }
    return comparison * -1;
  }

  getTradesForUser = () => {
    axios.get(`/api/getTrades/${this.props.match.params.game_id}`).then(res => {
      this.setState({
        trades: res.data
      });
    });
  };
  logout = () => {
    this.props.logout();
    this.props.history.push("/");
  };
  render() {
    const { trades, game } = this.state
    console.log({ trades });
    console.log({ game });
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
              <div className="game-to-trade-outer">
                <div className="game-to-trade">
                  <h2 id="game-to-trade-name">{`${this.state.game[0].game_name.substring(0,16)}...`}</h2>
                  <img className="game-to-trade-image" src={this.state.game[0].background_image} alt="" />
                  <h4 className="game-to-trade-metacritic">
                    {this.state.game[0].metacritic}
                  </h4>
                  <div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="bottomSide-outer">
          <div className="bottomSide">
            {this.state.trades.length > 0
              ? this.state.trades.sort(this.compare).map((el, i) => (
                <div key={i} className="userInfo" onClick={() => this.combineAwait(el)}>
                  <div className="user-rating">{el.user_rating}%</div>
                  <img className="profile-pic" src={el.profile_pic} alt="" />
                  <h3 className="username">{el.username}</h3>
                </div>
              ))
              : null}
          </div>
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
  { logout, saveTraderId }
)(Trades);
