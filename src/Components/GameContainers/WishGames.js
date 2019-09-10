import "./WishGames.css";
import React, { Component } from "react";
// import { connect } from "react-redux";

class WishGames extends Component {
  constructor() {
    super();
    this.state = {
      state: ""
    };
  }

  render() {
    return (
      <div className="WishGames">
          <h1>My Wish List</h1>
      </div>
    );
  }
}

export default WishGames

// const mapStateToProps = reduxState => {
//   return reduxState;
// };

// export default connect(
//   mapStateToProps,
//   null
// )(Trader);
