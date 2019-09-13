import React from "react"
import {Route, Switch} from "react-router-dom"
import Authentication from "./Components/Authentication/Authentication.js"
import Dashboard from "./Components/Dashboard/Dashboard.js"
import Search from "./Components/Search/Search"
import UserProfile from './Components/Profiles/UserProfile'
import Trader from './Components/Trader/Trader'
import Trades from './Components/Trades/Trades'
import About from './Components/About/About'
import AddPoints from './Components/Wizards/AddPoints/AddPoints'

export default (
    <Switch>
        <Route component = {Authentication}  path = "/" exact/>
        <Route component = {Dashboard}  path = "/home" exact/>
        <Route component = {Trader}  path = "/trader/:roomId" exact/>
        <Route component = {Search}  path = "/search" />
        <Route component = {UserProfile} path = '/userProfile/:user_id'/>
        <Route component = {Trader} path = '/trader/:game_id/:user_id'/>
        <Route component = {Trades} path = '/trades/:game_id'/>
        <Route component = {About} path = '/about'/>
        <Route component = {AddPoints} path = '/add-points'/>
        <Route/>
    </Switch>
)