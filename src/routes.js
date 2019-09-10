import React from "react"
import {Route, Switch} from "react-router-dom"
import Authentication from "./Components/Authentication/Authentication.js"
import Dashboard from "./Components/Dashboard/Dashboard.js"
import Search from "./Components/Search/Search"

export default (
    <Switch>
        <Route component = {Authentication}  path = "/" exact/>
        <Route component = {Dashboard}  path = "/home" exact/>
        <Route component = {Search}  path = "/search" />
    </Switch>
)