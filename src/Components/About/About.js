import React from "react"
import {Link} from 'react-router-dom'
import { Home } from 'grommet-icons';

export default function About() {
            return (
                <div>
                <div className="Dashboard_NavBar">
        
                                <div className="Dashboard_Logo">
                                    <h1>Game Traders</h1>
                                </div>
        
                                <div className="nav-links">
                                    <Link to="/home" ><h1><Home size="large" color="#AED429" /></h1></Link>
                                </div>
        
                </div>
                    <h5>About</h5>
                </div>
            
            )
    
}