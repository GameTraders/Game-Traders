import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { logout } from "../../ducks/userReducer";
import { Home, Power } from "grommet-icons";
import "./Trades.css";
import GTLogo from "../../GTLogo.png";
import sockets from "../../sockets";

class Trades extends Component {
  state = {
    roomId: "",
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

  combineAwait = async el => {
    // console.log('el argument being passed:', el);
    await this.createRoomId();
    this.startChat();
  };

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
  createRoomId = () => {
    const { user_id: trader_id } = this.state;
    const { game_id } = this.state;
    const { user_id } = this.state;
    const traderString = `${trader_id.toString()}`;
    const gameString = `${game_id.toString()}`;
    const userString = `${user_id.toString()}`;
    const colon = ":";
    let roomId;
    if (traderString >= userString) {
      roomId = traderString.concat(colon, userString, colon, gameString);
      this.setState({ roomId });
    } else {
      roomId = userString.concat(colon, traderString, colon, gameString);
      this.setState({ roomId });
    }
    //   console.log('creating room...', roomId);
  };

  startChat = async () => {
    let { roomId } = this.state;
    // console.log('starting trade', roomId);
    const { user_id: userId } = this.state.props.user;
    const { user_id: traderId } = this.state;
    const { cover_art: gameTrade } = this.state.game;
    const data = { userId, traderId, gameTrade };
    //  console.log("starting trade data:", data);
    await sockets.emit("join room", data);
    window.location.href = `http://localhost:4200/#/trader/${roomId}`;
  };
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
    console.log(this.state.trades);
    console.log("game:", this.state.game);
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
                  <img src={this.state.game[0].background_image} alt="" />
                  <div>
                    <h2>{this.state.game[0].game_name}</h2>
                  </div>
                  <div>
                    <h4>
                      Metacritic:
                      {this.state.game[0].metacritic}
                    </h4>
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
                  <div key={i} className="userInfo">
                    <div className="user-rating">{el.user_rating}</div>
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
  { logout }
)(Trades);
