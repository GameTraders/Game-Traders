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
    console.log({el});
    const { user_id: trader_id } = el
    const { game_id } = this.state.game[0]
    const { user_id } = this.props.user
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
//   city: "mapleton"
// email: "Blake.Trapnell103@gmail.com"
// game_id: 1234
// hash: "$2b$10$wy6qivubdiasiL5Zmizlp.ZB/UCzyKb4YG345D3GjYb9MDK4hcriG"
// id: 5
// points: 55
// profile_pic: "https://lh3.googleusercontent.com/HsufcdP_1x1FKFUbpd9Qj8RVlqduWVH-anr-97kVyGV0_93hzzD68mUjBUbWikjvHZXerMhUn3dSSoKN6xLa-Ey22Jj8ETCtGGxBuPj0Z2xXyBP4RHLe8A13VsEjE-rJmFtoRflXqJusELQWkFeYB8zgG3kJ_OaEMN2pfwp79lMiLkkS-9GLK6i0jOqTRLC2DNhmtM_v_2Ivs8w0qvtGCr3ydrRKnAGYbwzIXfgL_qvBnyAHvE4zrPz4BkOfUck-0c7sb3YgUwzjbgKj3uBAQhgHudPiowTNgK0z_amUVpiJXV6-Pbp7aXJ86jsIBe_5l6C53MiGcbFGa_wy9-VaRoPYyRITLNltodoTKs9xMsCufb0mJ960JyVGPj58kwuvMdNlATgcVzCUDu__cEmSw_hvbLWMURf7m5eCbS5hDTyXkUyt_UJq2B7PzygWhwUUWPTHCOYtD7eyctuUYV_O8FPN94mdAXxr6eGa6vj5FAtjEEQZ5lTVqpOHE7MkitL2B7PLaDzV8F3RG6YxXZ6Ls-G5WU3EfCrFOx9mK4wOpWq2aGtQVQ3Rg9SzWQj5UNujY-q0hbohuonEhFj9SBA3-yMwhviQhIr0g_y_9oDHy3eUrXzXxLakm9RJMPOlVGF-LgfPDoT34TVYxT-RLFvfBHep8dMCPYAeSVVNKa9gk61M_-n1fXS9mA=w958-h960-no"
// state: "UT"
// street: "602w 2925s"
// user_id: 7
// user_points: 85
// user_rating: 66
// username: "Aceassin"
// zip: 84664

// background_image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Halo-_Reach_box_art.png/220px-Halo-_Reach_box_art.png"
// game_id: 1234
// game_name: "Halo Reach"
// genre: "FPS"
// id: 5
// metacritic: 88
// platforms: "Xbox One"
// released: "11-06-08"

  startChat = async (el) => {
    let { roomId } = this.state
    console.log('starting trade', roomId);
    const { user_id: userId } = this.props.user
    const { user_id: traderId, user_points: traderPoints, user_rating: traderRating, username: traderName, profile_pic: traderProfilePic } = el
    const { background_image: gameTrade, game_name: gameName, game_id: gameId } = this.state.game[0]
    const data = { userId, traderId, gameTrade, roomId, traderPoints, traderRating, traderName, traderProfilePic, gameName, gameId }
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
    console.log({trades});
    console.log({game});
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
                  <div key={i} className="userInfo" onClick={() => this.combineAwait(el)}>
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
  {logout}
)(Trades);
