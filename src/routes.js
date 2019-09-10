import React from "react"
import {Route, Switch} from "react-router-dom"
import Authentication from "./Components/Authentication/Authentication.js"
import Dashboard from "./Components/Dashboard/Dashboard.js"
import Trader from "./Components/Trader/Trader.js"
import Search from "./Components/Search/Search.js"

export default (
    <Switch>
        <Route component = {Authentication}  path = "/" exact/>
        <Route component = {Dashboard}  path = "/home" exact/>
        <Route component = {Trader}  path = "/trader" exact/>
        <Route component = {Search}  path = "/search" />
    </Switch>
)