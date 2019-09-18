import React, { Component } from "react";
import axios from "axios";
import { AddCircle, Transaction, Home, Power } from 'grommet-icons';
import MyGames from '../GameContainers/MyGames'
import WishList from '../GameContainers/WishList'
import { connect } from 'react-redux'
import { logout } from "../../ducks/userReducer";
import { Link } from 'react-router-dom'
import './UserProfile.css'
import GTLogo from '../../GTLogo.png'
import Stripe from '../Stripe/Stripe'

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      points: false,
      username: '',
      email: '',
      profile_pic: '',
      user_points: 0,
      user_rating: 0,
      city: '',
      state: '',
      street: '',
      zip: '',
      games: [{
        name: "Halo Infinite",
        cover: "https://i.redd.it/uk00vkrvfkb11.png",
        points: 40
      }, {
        name: "Rocket League",
        cover: "https://cdn0.spong.com/pack/r/o/rocketleag434170l/_-Rocket-League-Xbox-One-_.jpg",
        points: 50
      }, {
        name: "GTA 5",
        cover: "https://www.gtabase.com/igallery/601-700/GTA_V_Cover_XboxOne-652-1920.jpg",
        points: 45
      }, {
        name: "Zelda",
        cover: "https://vgboxart.com/boxes/WiiU/75322-zelda-breath-of-the-wild-nintendo-switch.png",
        points: 60
      }, {
        name: "Halo Infinite",
        cover: "https://i.redd.it/uk00vkrvfkb11.png",
        points: 40
      }, {
        name: "Rocket League",
        cover: "https://cdn0.spong.com/pack/r/o/rocketleag434170l/_-Rocket-League-Xbox-One-_.jpg",
        points: 50
      }, {
        name: "GTA 5",
        cover: "https://www.gtabase.com/igallery/601-700/GTA_V_Cover_XboxOne-652-1920.jpg",
        points: 45
      }, {
        name: "Zelda",
        cover: "https://vgboxart.com/boxes/WiiU/75322-zelda-breath-of-the-wild-nintendo-switch.png",
        points: 60
      }, {
        name: "Halo Infinite",
        cover: "https://i.redd.it/uk00vkrvfkb11.png",
        points: 40
      }, {
        name: "Rocket League",
        cover: "https://cdn0.spong.com/pack/r/o/rocketleag434170l/_-Rocket-League-Xbox-One-_.jpg",
        points: 50
      }, {
        name: "GTA 5",
        cover: "https://www.gtabase.com/igallery/601-700/GTA_V_Cover_XboxOne-652-1920.jpg",
        points: 45
      }, {
        name: "Zelda",
        cover: "https://vgboxart.com/boxes/WiiU/75322-zelda-breath-of-the-wild-nintendo-switch.png",
        points: 60
      }]
    };
  }

// componentDidMount(){
// this.getUserInfo()
// // console.log( 'state:', this.state.user)
// // console.log('redux state:', this.props.user)
// }

toggleChange = () => {
  const {user_id} = this.props.user
  this.setState({points: !this.state.points})
  this.props.history.push(`/userProfile/${user_id}`)
}
// getUserInfo = async () => {
//   await this.setState({user: this.props.user})
// };
logout = () => {
  this.props.logout();
  this.props.history.push("/");
};
  
  render() {
    // console.log(this.state.points)
    // const {user} = this.props
    // if (this.props.user.username) {
      const {username, user_points, profile_pic, user_rating} = this.props.user
    // } else {
    //   var username, user_points, profile_pic, user_rating
    // }
    let miniGames = this.state.games.map((e, i) => {
      return (
        <div key={i} className="my-game-mini">
          <h4 className="mini-name">
            {e.name.length > 5 ? `${e.name.substring(0, 6)}...` : `${e.name}`}
          </h4>
          <h4 className="mini-name-hover">{e.name}</h4>
          <div className="home-mini-dispay">
            <img className="mini-cover-art" alt="" src={e.cover} />
            <div className="game-mini-points">{e.points}</div>
          </div>
        </div>
      )
    })
    return (
      <div className="userProfile">
        <div className="Profile_NavBar">
          <h1 className="link" onClick={this.logout}><Power size="large" color="#AED429" /></h1>

          <div className="Profile_Logo">
            <Link to="/about" ><img className="link" src={GTLogo} alt="Logo" /></Link>
          </div>

          <div className="nav-links">
            <Link to="/home" ><h1 className="link" ><Home size="large" color="#AED429" /></h1></Link>
          </div>

        </div>
        <div className="profileContainer">
          <div className="userInfo">
            
            <div className="user-rating">{user_rating}%</div>
            <img className='profile-pic' src={profile_pic} alt=""/>
            <h3 className='username'>{username}</h3>
            <p className='trade-count'>22 Trades</p>
            <div className='pointsHave'>
                <h1>{user_points}</h1>
                <div className='pointsAdd'>
                    <p>Points</p>
    {this.state.points === false ?<div className="add-points-btn"> <AddCircle color='rgb(252, 155, 0' size='medium' onClick={() => this.setState({points: !this.state.points})}/> </div>: <Stripe user_id={this.props.match.params.user_id} toggleChange={this.toggleChange}/>}
                </div>
            </div>
          </div>
          <div className='secondDiv'>
            <div className="pastTrades">
              <h3>Past Trades</h3>
              {/* dummy data */}
              <div className='actualTrades'>
                <div className='pastTradeBox'>
                  <div className='Title1'>{miniGames[0]}</div>
                  <div className='tradeArrows'><Transaction color='AED429' size='small' /></div>
                  <div>{miniGames[1]}</div>
                </div>
                <h4>Date</h4>
              </div>
              {/* dummy data */}
              <div className='actualTrades'>
                <div className='pastTradeBox'>
                  <div className='Title1'>{miniGames[3]}</div>
                  <div className='tradeArrows'><Transaction color='#AED429' size='small' /></div>
                  <div>{miniGames[4]}</div>
                </div>
                <h4>Date</h4>
              </div>
              {/* dummy data */}
              <div className='actualTrades'>
                <div className='pastTradeBox'>
                  <div className='Title1'>{miniGames[2]}</div>
                  <div className='tradeArrows'><Transaction color='AED429' size='small' /></div>
                  <div>{miniGames[5]}</div>
                </div>
                <h4>Date</h4>
              </div>
            </div>
            <div className="currentTrades">
              <h3>Current Trades</h3>
            </div>
            <div className="userFriends">
              <h3>Friends</h3>
              <div className='friendDiv'>
                <div className='friend'>Friend 1</div>
                <div className='friend'>Friend 2</div>
              </div>
            </div>

          </div>
        </div>
        <section className="bottom-section" ><MyGames /><WishList /></section>
      </div>
    );
  }
}



const mapStateToProps = (reduxState) => {
  return reduxState
}
export default connect(mapStateToProps, { logout })(UserProfile)