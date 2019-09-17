import React, {useEffect, useRef} from "react"
import "./LoadingAnimation.css"

import {TweenMax, Power3, Bounce} from "gsap/all"

export default function LoadingAnimation() {

    useEffect(()=> {
        TweenMax.to(document.getElementsByClassName("Loading_Box"), 5.2, {repeat: -1, yoyo: true, rotation: 360,})
        TweenMax.to(document.getElementsByClassName("Loading_text"), 5.2, { repeat: -1, yoyo: true, rotation: -360})
       
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

