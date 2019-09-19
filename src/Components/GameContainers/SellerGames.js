import "./SellerGames.css";
import React, { Component } from "react";
import axios from 'axios'
import { connect } from "react-redux";
// import { connect } from "react-redux";

class SellerGames extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }
  componentDidMount(){
    axios.get(`/api/traderGames/${this.props.traderId}`).then(res => {
      this.setState({
        games: res.data
      })
    })
    // console.log('traderId:', this.props.traderId)
  }

  render() {
    let miniGames = this.state.games.map((el, i) => {
      return (
          <div key={i} className="my-game-mini">
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
      <div className="SellerGames">
          {miniGames}
          <div className="seller-game-box">{this.props.traderName}'s Games</div>
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
)(SellerGames);
