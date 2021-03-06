import React, {useEffect} from "react"
import "./LoadingAnimation.css"

import {TweenMax} from "gsap/all"

export default function LoadingAnimation() {

    useEffect(()=> {
        TweenMax.to(document.getElementsByClassName("Loading_Box"), 5.5, {repeat: -1, yoyo: true, rotation: 360,})
        TweenMax.to(document.getElementsByClassName("Loading_text"), 5.5, { repeat: -1, yoyo: true, rotation: -360})
       
    }, [])

    return(
            <div className="Loading_Container">
            <div className="Loading_Box">
                
            </div>
            <div className="Loading_Box">
            
            </div>
            <div className="Loading_Box">
            
            </div>
            <div className="Loading_Box">
            
            </div>
            <div className="Loading_Box Center">
            <h3 className ="Loading_text">Loading</h3>
            </div>
            <div className="Loading_Box">
            
            </div>
            <div className="Loading_Box">
                
            </div>
            <div className="Loading_Box">
                
            </div>
            <div className="Loading_Box">
                
            </div>
            </div>
    )
}

