import "./MyGames.css";
import React, { Component } from "react";
import { Add } from 'grommet-icons';
// import { connect } from "react-redux";

class MyGames extends Component {
  constructor() {
    super();
    this.state = {
      games: [{
          name: "Halo Infinite",
          cover: "https://i.redd.it/uk00vkrvfkb11.png",
          points: 40
      },{
        name: "Rocket League",
        cover: "https://cdn0.spong.com/pack/r/o/rocketleag434170l/_-Rocket-League-Xbox-One-_.jpg",
        points: 50
    },{
        name: "GTA 5",
        cover: "https://www.gtabase.com/igallery/601-700/GTA_V_Cover_XboxOne-652-1920.jpg",
        points: 45
    },{
        name: "Zelda",
        cover: "https://vgboxart.com/boxes/WiiU/75322-zelda-breath-of-the-wild-nintendo-switch.png",
        points: 60
    },{
        name: "Halo Infinite",
        cover: "https://i.redd.it/uk00vkrvfkb11.png",
        points: 40
    },{
      name: "Rocket League",
      cover: "https://cdn0.spong.com/pack/r/o/rocketleag434170l/_-Rocket-League-Xbox-One-_.jpg",
      points: 50
  },{
      name: "GTA 5",
      cover: "https://www.gtabase.com/igallery/601-700/GTA_V_Cover_XboxOne-652-1920.jpg",
      points: 45
  },{
      name: "Zelda",
      cover: "https://vgboxart.com/boxes/WiiU/75322-zelda-breath-of-the-wild-nintendo-switch.png",
      points: 60
  },{
    name: "Halo Infinite",
    cover: "https://i.redd.it/uk00vkrvfkb11.png",
    points: 40
},{
  name: "Rocket League",
  cover: "https://cdn0.spong.com/pack/r/o/rocketleag434170l/_-Rocket-League-Xbox-One-_.jpg",
  points: 50
},{
  name: "GTA 5",
  cover: "https://www.gtabase.com/igallery/601-700/GTA_V_Cover_XboxOne-652-1920.jpg",
  points: 45
},{
  name: "Zelda",
  cover: "https://vgboxart.com/boxes/WiiU/75322-zelda-breath-of-the-wild-nintendo-switch.png",
  points: 60
}]
    };
  }

  render() {
      let miniGames = this.state.games.map((e, i) => {
          return (
              <div key={i} className="my-game-mini">
                      <h4 className="mini-name">
                          {e.name.length > 5 ? `${e.name.substring(0, 6)}...` : `${e.name}` }
                      </h4>
                      <h4 className="mini-name-hover">{e.name}</h4>
                      <img className="mini-cover-art" alt="" src={e.cover} />
                      <div className="game-mini-points">{e.points}</div>
              </div>
          )
      })
    return (
      <div className="MyGames">
          <div className="game-mini-add">
          <h4 className="mini-name">Game</h4>
              <div className="add-game" ><Add color='#FC9B00' size='large' className="add-game-icon" /></div>
          </div>
          {miniGames}
          <div className="my-game-box">My Games</div>
      </div>
    );
  }
}

export default MyGames

// const mapStateToProps = reduxState => {
//   return reduxState;
// };

// export default connect(
//   mapStateToProps,
//   null
// )(Trader);
