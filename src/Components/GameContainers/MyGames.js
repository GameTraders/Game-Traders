import "./MyGames.css";
import React, { Component } from "react";
// import { Add } from 'grommet-icons';
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

//   background_image: "https://media.rawg.io/media/games/978/9780426199d92d086e7c85ed8993cede.jpg"
// game_id: 3498
// game_name: "Twisted Metal"
// genre: null
// id: 3
// metacritic: 96
// platforms: "{"{\"platform\":{\"id\":4,\"name\":\"PC\",\"slug\":\"pc\",\"image\":null,\"year_end\":null,\"year_start\":null,\"games_count\":186331,\"image_background\":\"https://media.rawg.io/media/games/c88/c885ae6a24bbce21df93b6c4e1c78899.jpg\"},\"released_at\":\"2013-09-17\",\"requirements_en\":{\"minimum\":\"Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.\",\"recommended\":\"Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:\"},\"requirements_ru\":null}","{\"platform\":{\"id\":18,\"name\":\"PlayStation 4\",\"slug\":\"playstation4\",\"image\":null,\"year_end\":null,\"year_start\":null,\"games_count\":4018,\"image_background\":\"https://media.rawg.io/media/games/c88/c885ae6a24bbce21df93b6c4e1c78899.jpg\"},\"released_at\":\"2013-09-17\",\"requirements_en\":null,\"requirements_ru\":null}","{\"platform\":{\"id\":16,\"name\":\"PlayStation 3\",\"slug\":\"playstation3\",\"image\":null,\"year_end\":null,\"year_start\":null,\"games_count\":3530,\"image_background\":\"https://media.rawg.io/media/games/929/9295e55ce69cf5337c567983cf8b4137.jpeg\"},\"released_at\":\"2013-09-17\",\"requirements_en\":null,\"requirements_ru\":null}","{\"platform\":{\"id\":14,\"name\":\"Xbox 360\",\"slug\":\"xbox360\",\"image\":null,\"year_end\":null,\"year_start\":null,\"games_count\":2459,\"image_background\":\"https://media.rawg.io/media/games/148/1485f72434101885b098d4290bf0ba67.jpg\"},\"released_at\":\"2013-09-17\",\"requirements_en\":null,\"requirements_ru\":null}","{\"platform\":{\"id\":1,\"name\":\"Xbox One\",\"slug\":\"xbox-one\",\"image\":null,\"year_end\":null,\"year_start\":null,\"games_count\":2764,\"image_background\":\"https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg\"},\"released_at\":\"2013-09-17\",\"requirements_en\":null,\"requirements_ru\":null}"}"
// points: 50
// released: "2013-09-17"
// user_id: 8

  sendTrade = (e, el) => {
    e.preventDefault()
    // console.log({el});
    const {room} = this.props
    const { username: traderName, user_rating: traderRating, profile_pic: traderProfilePic } = this.props.user
    const { background_image: myTrade, points, game_name, user_id: myId } = el
    const data = { myTrade, points, game_name, myId, room, traderName, traderRating, traderProfilePic }
    socket.emit('send out trade', data)
  }

  render() {
    // console.log("props passed down:", this.props.room);
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
