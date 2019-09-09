import React from "react"
import {Route, Switch} from "react-router-dom"
import Authentication from "./Components/Authentication/Authentication.js"

export default (
    <Switch>
        <Route component = {Authentication}  path = "/" exact/>
    </Switch>
)