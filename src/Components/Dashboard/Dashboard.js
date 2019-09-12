import "./Dashboard.css";
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Power, FormSearch } from "grommet-icons";
import { logout } from "../../ducks/userReducer";
import AddWish from '../Wizards/AddGame/AddWish'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      gameName: "",
      // mRatedCheckBox: true,
      // x360CheckBox: true,
      // xOneCheckBox: true,
      // ps2CheckBox: true,
      // ps3CheckBox: true,
      // ps4CheckBox: true,
      // wiiCheckBox: true,
      // switchCheckBox: true,
      // gameBoyCheckBox: true,
      ps4Checked: false,
      xboxChecked: false,
      switchChecked: false,
     console: '',
      games: []
    };
  }

  componentDidMount() {
    this.getName();
  }

  getName = async () => {
    const name = this.state.gameName;
    console.log(name);
    const results = await axios.post("/api/games", { name });
    console.log("results:", results.data.results);
    this.setState({
      games: results.data.results
    });
  };

  handleChange(key, e) {
    this.setState({
      [key]: e
    });
  }
  getName = async () => {
    const name = this.state.gameName;
    console.log(name);
    const results = await axios.post("/api/games", { name });
    console.log("results:", results);
    const games = results.data.results;
    console.log("games before setstate:", games);
    this.setState({
      games
    });
  };
  logout = () => {
    this.props.logout();
    this.props.history.push("/");
  };

    addToWishList = async(e) => {
        const {user_id} = this.props.user
        const {id: game_id, game_name, background_image, released, platforms, genre, metacritic } = e
         console.log('game to add:', e);
         await axios.post(`/api/newGames/${user_id}`, {game_id, game_name, background_image, released, platforms, genre, metacritic })
        //  await axios.post(`/api/wishList/${user_id}`, {id})
    }

    render() {
        console.log('games:', this.state.games);
        const {profile_pic} = this.props.user
        console.log('user', this.props.user);
        // const {mRatedCheckBox, x360CheckBox, xOneCheckBox, ps2CheckBox, ps3CheckBox, ps4CheckBox, wiiCheckBox, switchCheckBox, gameBoyCheckBox } = this.state
        return(
            <div className="Dashboard">
                <div className="Dashboard_NavBar">
                        <h1 className="link" onClick={this.logout}><Power size="large" color="#AED429" /></h1>
                        <div className="Dashboard_Logo">
                            <Link className="link" to="/about" ><h1>Game Traders</h1></Link>
                        </div>
                        <div className="nav-links">
                            <Link className="link" to={{pathname: `/userProfile/${this.props.user.user_id}`}} ><img className="user-pic" alt="" src={profile_pic} /></Link>
                            {/* <h1 className="link" onClick={this.logout}><Power size="large" color="#AED429" /></h1> */}
                            {/* <Link to={{pathname: `/userProfile/${this.props.user.user_id}`, state: this.props.user}} ><h1 className="link" ><User size="large" color="#28AB53" /></h1></Link> */}
                        </div>
                        <div className="Dashboard-search-container">
                                <button onClick={this.getName} className="game-search-submit"><FormSearch color="#FC9B00" /></button>
                                <input onChange={(e)=> {this.handleChange("gameName", e.target.value)}} className="game-search-input" type="text" placeholder="Search by Game Name" />
                        </div>
                  </div>
        <div className="dashboard-container">
          {this.state.games.length > 0 ? (
            this.state.games.map((e, i) => {
              return (
                <div
                  key={i}
                  className="home-game-mini"
                >
                  <h4 className="home-mini-name">
                    {e.name.length > 18
                      ? `${e.name.substring(0, 16)}...`
                      : `${e.name}`}
                  </h4>
                  <h4 className="mini-name-hover">{e.name}</h4>
                  <div className="home-mini-display">
                    <img
                      className="home-mini-cover-art"
                      alt=""
                      src={e.background_image}
                    />
                    {
                      e.clip !== null ? 
                    <video className="home-mini-cover-clip" alt="" controls>
                      <source src={e.clip.clips[Object.keys(e.clip.clips)[2]]}
                      type="video/mp4" />}
                    </video>
                    :
                    <div className="home-mini-display">
                      <img className="home-mini-cover-clip" alt="" src={e.background_image} />
                    </div>
                    }
                    <div className="home-game-mini-points">{e.metacritic}%</div>
                    <AddWish state={e}/>
                  </div>
                </div>
              );
            })
          ) : (
            <h4>Loading</h4>
          )}
        </div>
        <div className="ownDropdown"></div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(
  mapStateToProps,
  { logout }
)(Dashboard);
