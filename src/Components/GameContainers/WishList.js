import "./MyGames.css";
import React, { Component } from "react";
import { Add } from 'grommet-icons';
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class WishList extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      wishlist: []
    };
  }
  componentDidMount() {

    axios.get(`/api/wishlist/${this.props.user.user_id}`).then(res => {
      this.setState({
          wishlist: res.data
      })
    })
  }

  render() {

    
      let miniGames = this.state.wishlist.map((e, i) => {
          return (
              <div key={i} className="my-game-mini" onClick={() => this.props.history.push(`/trades/${e.game_id}`)}>
                      <h4 className="mini-name">
                          {e.game_name.length > 5 ? `${e.game_name.substring(0, 6)}...` : `${e.game_name}` }
                      </h4>
                      <h4 className="mini-name-hover">{e.game_name}</h4>
                      <div className="home-mini-display">
                        <img className="mini-cover-art" alt="" src={e.background_image} />
                        <div className="game-mini-points">{e.metacritic}</div>
                      </div>
              </div>
          )
      })
    return (
      <div className="MyGames">
          <div className="game-mini-add">
              <h4 className="mini-name">Game</h4>
              <Link to="/home" ><div className="add-game" ><Add color='#FC9B00' size='large' className="add-game-icon" /></div></Link>
          </div>
          {miniGames}
          <div className="seller-game-box">Wish List</div>
      </div>
    );
  }
}



const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapStateToProps,null)(withRouter(WishList));
  
  

