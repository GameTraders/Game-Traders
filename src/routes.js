import React from "react"
import {Route, Switch} from "react-router-dom"
import Authentication from "./Components/Authentication/Authentication.js"
import Dashboard from "./Components/Dashboard/Dashboard.js"
import Search from "./Components/Search/Search"
import UserProfile from './Components/Profiles/UserProfile'
import Trader from './Components/Trader/Trader'

export default (
    <Switch>
        <Route component = {Authentication}  path = "/" exact/>
        <Route component = {Dashboard}  path = "/home" exact/>
        <Route component = {Search}  path = "/search" />
        <Route component = {UserProfile} path = '/userProfile/:user_id'/>
        <Route component = {Trader} path = '/trader'/>
    </Switch>
)