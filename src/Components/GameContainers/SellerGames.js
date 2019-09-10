import "./SellerGames.css";
import React, { Component } from "react";
// import { connect } from "react-redux";

class SellerGames extends Component {
  constructor() {
    super();
    this.state = {
      games: [{
          name: "Halo Infinite",
          cover_art: "https://i.redd.it/uk00vkrvfkb11.png",
          points: 40
      },{
        name: "Rocket League",
        cover_art: "https://cdn0.spong.com/pack/r/o/rocketleag434170l/_-Rocket-League-Xbox-One-_.jpg",
        points: 50
    },{
        name: "GTA 5",
        cover_art: "https://www.gtabase.com/igallery/601-700/GTA_V_Cover_XboxOne-652-1920.jpg",
        points: 45
    },{
        name: "Zelda",
        cover_art: "https://vgboxart.com/boxes/WiiU/75322-zelda-breath-of-the-wild-nintendo-switch.png",
        points: 60
    }]
    };
  }

  render() {
      let miniGames = this.state.games.map((e, i) => {
          return (
              <div key={i} className="game-mini">
                      <h4 className="seller-mini-name">
                          {e.name.length > 5 ? `${e.name.substring(0, 6)}...` : `${e.name}` }
                      </h4>
                      <h4 className="mini-name-hover">{e.name}</h4>
                      <div className="home-mini-dispay">
                        <img className="mini-cover-art" alt="" src={e.cover_art} />
                        <div className="game-mini-points">{e.points}</div>
                      </div>
              </div>
          )
      })
    return (
      <div className="SellerGames">
          {miniGames}
          <div className="seller-game-box">Danny's Games</div>
      </div>
    );
  }
}

export default SellerGames

// const mapStateToProps = reduxState => {
//   return reduxState;
// };

// export default connect(
//   mapStateToProps,
//   null
// )(Trader);
