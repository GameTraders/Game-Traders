import React from "react"
import {Route, Switch} from "react-router-dom"
import Authentication from "./Components/Authentication/Authentication.js"
import Dashboard from "./Components/Dashboard/Dashboard.js"
import Search from "./Components/Search/Search"
import UserProfile from './Components/Profiles/UserProfile'
import Trader from './Components/Trader/Trader'
import Trades from './Components/Trades/Trades'
import About from './Components/About/About'

export default (
    <Switch>
        <Route component = {Authentication}  path = "/" exact/>
        <Route component = {Dashboard}  path = "/home" exact/>
        <Route component = {Trader}  path = "/trader/:roomId"/>
        <Route component = {Search}  path = "/search" />
        <Route component = {UserProfile} path = '/userProfile/:user_id' exact/>
        <Route component = {Trades} path = '/trades/:game_id'/>
        <Route component = {About} path = '/about'/>
        <Route/>
    </Switch>
)