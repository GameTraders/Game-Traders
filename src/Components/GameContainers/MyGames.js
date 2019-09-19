import "./MyGames.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios'
import socket from '../../sockets'
import { Link } from "react-router-dom";

class MyGames extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      selectedTrade: {}
    };
  }
  componentDidMount = ()=>{
    axios.get(`/api/games/${this.props.user.user_id}`).then(res => {
      this.setState({
        games: res.data
      })
    })
  }

  sendTrade = (e, el) => {
    e.preventDefault()
    const {room} = this.props
    const { username: traderName, user_rating: traderRating, profile_pic: traderProfilePic } = this.props.user
    const { background_image: myTrade, points, game_name, user_id: myId } = el
    const data = { myTrade, points, game_name, myId, room, traderName, traderRating, traderProfilePic }
    socket.emit('send out trade', data)
  }

  render() {
      let miniGames = this.state.games.map((el, i) => {
          return (
              <div key={i} className="my-game-mini" onClick={(e) => this.sendTrade(e, el)}>
                      <h4 className="mini-name">
                          {el.game_name.length > 5 ? `${el.game_name.substring(0, 6)}...` : `${el.game_name}` }
                      </h4>
                      <h4 className="mini-name-hover">{el.game_name}</h4>
                      <div className="home-mini-dispay">
                        <img className="mini-cover-art" alt="" src={el.background_image} />
                        <div className="game-mini-points">{el.metacritic}%</div>
                      </div>
              </div>
          )
      })
    return (
      <div className="MyGames">
          <div className="game-mini-add">
          <h4 className="mini-name">Game</h4>
          <Link to="/home" ><div className="add-game" ><h1 className="add-game-plus-icon">+</h1></div></Link>
          </div>
          {miniGames}
          <div className="my-game-box">My Games</div>
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
)(MyGames);
