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
                            {/* <div className="check-container"  >
                                <div className="filter-option">
                                    <input className="check" checked={mRatedCheckBox} type="checkbox" onChange={() => this.setState({mRatedCheckBox: !mRatedCheckBox})} />
                                    <p>M - Rated</p>
                                </div>
                                <div className="filter-option">
                                    <input className="check" checked={x360CheckBox} type="checkbox" onChange={() => this.setState({x360CheckBox: !x360CheckBox})} />
                                    <p>XBox 360</p>
                                </div>
                                <div className="filter-option">
                                    <input className="check" checked={xOneCheckBox} type="checkbox" onChange={() => this.setState({xOneCheckBox: !xOneCheckBox})} />
                                    <p>XBox One</p>
                                </div>
                            </div>
                            <div className="check-container"  >
                                <div className="filter-option">
                                    <input className="check" checked={ps2CheckBox} type="checkbox" onChange={() => this.setState({ps2CheckBox: !ps2CheckBox})} />
                                    <p>PlayStation 2</p>
                                </div>
                                <div className="filter-option">
                                    <input className="check" checked={ps3CheckBox} type="checkbox" onChange={() => this.setState({ps3CheckBox: !ps3CheckBox})} />
                                    <p>PlayStation 3</p>
                                </div>
                                <div className="filter-option">
                                    <input className="check" checked={ps4CheckBox} type="checkbox" onChange={() => this.setState({ps4CheckBox: !ps4CheckBox})} />
                                    <p>PlayStation 4</p>
                                </div>
                            </div>
                            <div className="check-container"  >
                                <div className="filter-option">
                                    <input className="check" checked={wiiCheckBox} type="checkbox" onChange={() => this.setState({wiiCheckBox: !wiiCheckBox})} />
                                    <p>Wii</p>
                                </div>
                                <div className="filter-option">
                                    <input className="check" checked={switchCheckBox} type="checkbox" onChange={() => this.setState({switchCheckBox: !switchCheckBox})} />
                                    <p>Nintendo Switch</p>
                                </div>
                                <div className="filter-option">
                                    <input className="check" checked={gameBoyCheckBox} type="checkbox" onChange={() => this.setState({gameBoyCheckBox: !gameBoyCheckBox})} />
                                    <p>PlayStation 4</p>
                                </div>
                            </div> */}
          </div>
        </div>
        <div className="dashboard-container">
          {this.state.games.length > 0 ? (
            this.state.games.map((e, i) => {
              return (
                <div
                  key={i}
                  className="home-game-mini"
                  style={{ position: "relative" }}
                >
                  <h4 className="home-mini-name">
                    {e.name.length > 15
                      ? `${e.name.substring(0, 16)}...`
                      : `${e.name}`}
                  </h4>
                  <h4 className="mini-name-hover">{e.slug}</h4>
                  <div className="home-mini-dispay">
                    <img
                      className="home-mini-cover-art"
                      alt=""
                      src={e.background_image}
                    />
                    <div className="home-game-mini-points">{e.metacritic}</div>
                  </div>
                  <AddWish state={e}/>
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
