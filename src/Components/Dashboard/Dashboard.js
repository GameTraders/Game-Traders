import "./Dashboard.css";
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Power, FormSearch } from "grommet-icons";
import { logout, refreshUser } from "../../ducks/userReducer";
import AddWish from '../Wizards/AddGame/AddWish'
import GTLogo from '../../GTLogo.png'
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation"

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      gameName: "",
      user: '',
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

  getUser = async () => {
    const user = await  axios.get('/auth/user')
    this.setState({
      user
    })
    }

  handleChange(key, e) {
    this.setState({
      [key]: e
    });
  }
  getName = async () => {
    this.setState({
      games: []
    })
    const name = this.state.gameName;
    const results = await axios.post("/api/games", { name });
    const games = results.data.results;
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
         await axios.post(`/api/newGames/${user_id}`, {game_id, game_name, background_image, released, platforms, genre, metacritic })
    }

    render() {
        const {profile_pic} = this.props.user
        return(
            <div className="Dashboard">
                <div className="Dashboard_NavBar">
                        <h1 className="link" onClick={this.logout}><Power size="large" color="#AED429" /></h1>
                        <div className="Dashboard_Logo">
                            <Link className="link" to="/about" ><img src={GTLogo} alt="Logo" /></Link>
                        </div>
                        <div className="nav-links">
                            <Link to={{pathname: `/userProfile/${this.props.user.user_id}`}} ><img className="user-pic" alt="" src={profile_pic} /></Link>
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
                  key={e.id}
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
                      <div className="home-mini-cover-clip">
                    <video className="home-mini-cover-video" alt="" controls>
                      <source src={e.clip.clips[Object.keys(e.clip.clips)[2]]}
                      type="video/mp4" />}
                    </video>
                      </div>
                    :
                    <div className="home-mini-display">
                      <img className="home-mini-cover-clip" alt="" src={e.background_image} />
                    </div>
                    }
                    <div className="home-game-mini-points">{e.metacritic}%</div>
                    <AddWish 
                    user={this.props.user}
                    state={e}/> 
                  </div>
                </div>  
                );
              })
          ) : (
           <LoadingAnimation/>
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
  { logout, refreshUser }
)(Dashboard);
