import React, {Component} from 'react';
import './App.css';
import {HashRouter, withRouter} from "react-router-dom"
import routes from "./routes"
import { connect } from 'react-redux'
import { refreshUser } from './ducks/userReducer'

class App extends Component {

  componentDidMount = async () => {
    // console.log('hit cdu in app');
    this.props.refreshUser()
  }

  render() {
    return (
      <HashRouter>
      <div className="App">
        {routes}
    </div>
      </HashRouter>
  );
}
}

const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(
  connect( mapStateToProps, { refreshUser })(App)
  )
