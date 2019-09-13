import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import {Home, Power, FormSearch } from "grommet-icons";
import "./Trades.css";
class Trades extends Component {
  state = {
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
  };
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
        <div className="Dashboard_NavBar">
                        <h1 className="link" onClick={this.logout}><Power size="large" color="#AED429" /></h1>
                        <div className="Dashboard_Logo">
                            <Link className="link" to="/about" ><h1>Game Traders</h1></Link>
                        </div>
                        <div className="nav-links">
                            <Link className="link" to={{pathname: `/userProfile/${this.props.user.user_id}`}} ><img className="user-pic" alt="" src={this.props.user.profile_pic} /></Link>
                            {/* <h1 className="link" onClick={this.logout}><Power size="large" color="#AED429" /></h1> */}
                            {/* <Link to={{pathname: `/userProfile/${this.props.user.user_id}`, state: this.props.user}} ><h1 className="link" ><User size="large" color="#28AB53" /></h1></Link> */}
                        </div>
                        <div className="Dashboard-search-container">
                                <button onClick={this.getName} className="game-search-submit"><FormSearch color="#FC9B00" /></button>
                                <input onChange={(e)=> {this.handleChange("gameName", e.target.value)}} className="game-search-input" type="text" placeholder="Search by Game Name" />
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
//     <div
//     key={el.i}
//     onClick={() =>
//       this.props.history.push(
//         `/trader/${this.props.match.params.game_id}/${el.user_id}`
//       )
//     }
//   >
//     <img src={el.profile_pic} alt="" />
//   </div>





    //     const { best } = this.state
    //     return (

    //         <div className="Trades_Outer">

    //             <div className="Trades_Best_Match">
    //                 <div className="Trades_Info_Display">
    //                     <h4 className="Trades_h4" >Best Trades</h4>
    //                 </div>
    //                 <div className="Trades_Display_Users">
    //                     {best.length > 0 ? best.map((el, i) => (
    //                         <div key={i}>
    //                             <h1>Oops! Try Adding some more games to your want or wish list</h1>
    //                         </div>
    //                     )) : <h1>No Matches</h1>}
    //                 </div>
    //             </div>
    //             <div className="Trades_Great_Match">
    //                 <div className="Trades_Info_Display">
    //                     <h4 className="Trades_h4" >Great Trades</h4>
    //                 </div>
    //                 <div className="Trades_Display_Users">
    //                     {best.length > 0 ? best.map((el, i) => (
    //                         <div key={i} className="Trades_Card_Outer">
    //                             <img className="profile-pic" src={el.profile_pic} alt="" />
    //                             <h4 className="seller-username">{el.username}</h4>
    //                             <h4>Rating: {el.metacritic}%</h4>
    //                             <h4>Trades: {el.trade_count}</h4>
    //                             <div className="Trades_User_games">
    //                                 {el.games.map((el,i) => (
    //                                     <div key={i}>
    //                                         <img className="Trades_Individual_Games" src={el} alt="" />
    //                                         <h6>Game Name</h6>
    //                                     </div>
    //                                 ))}
    //                             </div>
    //                         </div>
    //                     )) : <h1>No Matches</h1>}
    //                 </div>
    //             </div>
    //             <div className="Trades_Good_Match">
    //                 <div className="Trades_Info_Display">
    //                     <h4 className="Trades_h4" >Good Trades</h4>
    //                 </div>
    //                 <div className="Trades_Display_Users">
    //                     {best.length > 0 ? best.map((el, i) => (
    //                         <div key={i}>
    //                             <h1>Oops! Try Adding some more games to your want or wish list</h1>
    //                         </div>
    //                     )) : <h1>No Matches</h1>}
    //                 </div>
    //             </div>
    //         </div>
    // )
  }
}
const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(
  mapStateToProps,
  null
)(Trades);
