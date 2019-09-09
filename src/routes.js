import React from "react"
import {Route, Switch} from "react-router-dom"
import Authentication from "./Components/Authentication/Authentication.js"
import Dashboard from "./Components/Dashboard/Dashboard.js"

export default (
    <Switch>
        <Route component = {Authentication}  path = "/" exact/>
        <Route component = {Dashboard}  path = "/home" exact/>
    </Switch>
)