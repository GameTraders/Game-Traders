import "./MyGames.css";
import React, { Component } from "react";
// import { Add } from 'grommet-icons';
import { connect } from "react-redux";
import axios from 'axios'

class MyGames extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }
  componentDidMount(){
    axios.get(`/api/games/${this.props.user.user_id}`).then(res => {
      this.setState({
        games: res.data
      })
    })
  }
  render() {
    // console.log(this.state.games)
      let miniGames = this.state.games.map((e, i) => {
          return (
              <div key={i} className="my-game-mini">
                      <h4 className="mini-name">
                          {e.game_name.length > 5 ? `${e.game_name.substring(0, 6)}...` : `${e.game_name}` }
                      </h4>
                      <h4 className="mini-name-hover">{e.game_name}</h4>
                      <div className="home-mini-dispay">
                        <img className="mini-cover-art" alt="" src={e.background_image} />
                        <div className="game-mini-points">{e.metacritic}</div>
                      </div>
              </div>
          )
      })
    return (
      <div className="MyGames">
          {/* <div className="game-mini-add"> */}
          {/* <h4 className="mini-name">Game</h4>
              <div className="add-game" ><Add color='#FC9B00' size='large' className="add-game-icon" /></div>
          </div> */}
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
