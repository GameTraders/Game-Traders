import './Dashboard.css'
import React, {Component} from "react"

export default class Dashboard extends Component{
    state = {
        checkBox: true,
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
    }
    render() {
        let miniGames = this.state.games.map((e, i) => {
            return (
                <div key={i} className="home-game-mini">
                        <h4 className="home-mini-name">
                            {e.name.length > 5 ? `${e.name.substring(0, 6)}...` : `${e.name}` }
                        </h4>
                        <h4 className="mini-name-hover">{e.name}</h4>
                        <div className="home-mini-dispay">
                            <img className="home-mini-cover-art" alt="" src={e.cover} />
                            <div className="home-game-mini-points">{e.points}</div>
                        </div>
                </div>
            )
        })
        const {checkBox} = this.state
        return(
            <div className="Dashboard">
                <div className="Dashboard_NavBar">
                        <div className="Dashboard_Logo">
                            <h1>Game Traders</h1>
                        </div>
                        <div className="Dashboard-search-container">
                            <button onClick={this.Login} className="Authentication_Button">
                                <h4>Search</h4>
                            </button>
                            <div className="Authentication_Username_Container">
                                <h4>Search</h4>
                                <input onChange={(e)=> {this.handleChange("username", e.target.value)}} className="Authentication_Input" type="text" placeholder="Username" />
                            </div>
                            <div className="check-container"  >
                                <div className="filter-option">
                                    <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({checkBox: !checkBox})} />
                                    <p>M - Rated</p>
                                </div>
                                <div className="filter-option">
                                    <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({checkBox: !checkBox})} />
                                    <p>XBox 360</p>
                                </div>
                                <div className="filter-option">
                                    <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({checkBox: !checkBox})} />
                                    <p>XBox One</p>
                                </div>
                            </div>
                            <div className="check-container"  >
                                <div className="filter-option">
                                    <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({checkBox: !checkBox})} />
                                    <p>PlayStation 2</p>
                                </div>
                                <div className="filter-option">
                                    <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({checkBox: !checkBox})} />
                                    <p>PlayStation 3</p>
                                </div>
                                <div className="filter-option">
                                    <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({checkBox: !checkBox})} />
                                    <p>PlayStation 4</p>
                                </div>
                            </div>
                            <div className="check-container"  >
                                <div className="filter-option">
                                    <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({checkBox: !checkBox})} />
                                    <p>Wii</p>
                                </div>
                                <div className="filter-option">
                                    <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({checkBox: !checkBox})} />
                                    <p>Nintendo Switch</p>
                                </div>
                                <div className="filter-option">
                                    <input className="check" checked={checkBox} type="checkbox" onChange={() => this.setState({checkBox: !checkBox})} />
                                    <p>PlayStation 4</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="dashboard-container">
                    {miniGames}
                </div>
            </div>
        )
    }
}

