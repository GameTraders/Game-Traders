import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import { Home } from 'grommet-icons';
import GTLogo from '../../GTLogo.png'
import { TweenMax, Elastic } from "gsap/all"
import "./About.css"


export default function About() {
    useEffect(() => {
        rob()
        blake()
        dan()
    }, [])


    function rob() {
        TweenMax.from(document.getElementsByClassName("Rob_1"), .1, { opacity: 0, y: -20, delay: 1 })
        TweenMax.from(document.getElementsByClassName("Rob_2"), .1, { opacity: 0, y: -20, delay: 1.1 })
        TweenMax.from(document.getElementsByClassName("Rob_3"), .1, { opacity: 0, y: -20, delay: 1.2 })
        TweenMax.from(document.getElementsByClassName("Rob_4"), .1, { opacity: 0, y: -20, delay: 1.3 })
        TweenMax.from(document.getElementsByClassName("Rob_5"), .1, { opacity: 0, y: -20, delay: 1.4 })
        TweenMax.from(document.getElementsByClassName("Rob_6"), .1, { opacity: 0, y: -20, delay: 1.5 })
        TweenMax.from(document.getElementsByClassName("Rob_7"), .1, { opacity: 0, y: -20, delay: 1.6 })
        TweenMax.from(document.getElementsByClassName("Rob_8"), .1, { opacity: 0, y: -20, delay: 1.7 })
        TweenMax.from(document.getElementsByClassName("Rob_9"), .1, { opacity: 0, y: -20, delay: 1.8 })
        TweenMax.from(document.getElementsByClassName("Rob_10"), .1, { opacity: 0, y: -20, delay: 1.9 })
        TweenMax.from(document.getElementsByClassName("Rob_11"), .1, { opacity: 0, y: -20, delay: 2 })
    }
    function blake() {
        TweenMax.from(document.getElementsByClassName("About_Blake_Text_Container"), .2, { rotation: 360, opacity: 0, y: -20,  delay: 3.6, ease: Elastic })

    }
    function dan() {
        TweenMax.from(document.getElementsByClassName("Dan_1"), .1, { opacity: 0, X: 50, delay: 2 })
        TweenMax.from(document.getElementsByClassName("Dan_2"), .1, { opacity: 0, X: 50, delay: 2.1 })
        TweenMax.from(document.getElementsByClassName("Dan_3"), .1, { opacity: 0, X: 50, delay: 2.2 })
        TweenMax.from(document.getElementsByClassName("Dan_4"), .1, { opacity: 0, X: 50, delay: 2.3 })
        TweenMax.from(document.getElementsByClassName("Dan_5"), .1, { opacity: 0, X: 50, delay: 2.4 })
        TweenMax.from(document.getElementsByClassName("Dan_6"), .1, { opacity: 0, X: 50, delay: 2.5 })
        TweenMax.from(document.getElementsByClassName("Dan_7"), .1, { opacity: 0, X: 50, delay: 2.6 })
        TweenMax.from(document.getElementsByClassName("Dan_8"), .1, { opacity: 0, X: 50, delay: 2.7 })
        TweenMax.from(document.getElementsByClassName("Dan_9"), .1, { opacity: 0, X: 50, delay: 2.8 })
        TweenMax.from(document.getElementsByClassName("Dan_10"), .1, { opacity: 0, x: 50, delay: 2.9 })
        TweenMax.from(document.getElementsByClassName("Dan_11"), .1, { opacity: 0, x: 50, delay: 3 })
        TweenMax.from(document.getElementsByClassName("Dan_12"), .1, { opacity: 0, x: 50, delay: 3.1 })
        TweenMax.from(document.getElementsByClassName("Github"), .1, { opacity: 0, y: -20, delay: 4})
    }


    return (
        <div>
            <div className="Dashboard_NavBar">

                <div className="Dashboard_Logo">
                    <img src={GTLogo} alt="Logo" />
                </div>

                <div className="nav-links">
                    <Link to="/home" ><h1 className="link" ><Home size="large" color="#AED429" /></h1></Link>
                </div>

            </div>
            <div className="About_Outer_Main">
                <h1>about</h1>
                <div className="About_Creators">
                    <div className="About_Rob">
                        <div className="About_Rob_Text_Container">
                            <h1 className="About_Rob_Knowles Rob_1">R</h1>
                            <h1 className="About_Rob_Knowles Rob_2">O</h1>
                            <h1 className="About_Rob_Knowles Space Rob_3">B</h1>
                            <h1 className="About_Rob_Knowles Rob_4">K</h1>
                            <h1 className="About_Rob_Knowles Rob_5">N</h1>
                            <h1 className="About_Rob_Knowles Rob_6">O</h1>
                            <h1 className="About_Rob_Knowles Rob_7">W</h1>
                            <h1 className="About_Rob_Knowles Rob_8">L</h1>
                            <h1 className="About_Rob_Knowles Rob_9">E</h1>
                            <h1 className="About_Rob_Knowles Rob_10">S</h1>
                            <h1 className="About_Rob_Knowles Rob_11">:</h1>
                        </div>
                        <a className="Github" href="https://github.com/mutantrobbyk">Robert Knowles Github Profile</a>
                    </div>

                    <div className="About_Danny">
                        <div className="About_Danny_Text_Container">
                            <h1 className="About_Danny_Strachan Dan_1">D</h1>
                            <h1 className="About_Danny_Strachan Dan_2">A</h1>
                            <h1 className="About_Danny_Strachan Space Dan_3">N</h1>
                            <h1 className="About_Danny_Strachan Dan_4">S</h1>
                            <h1 className="About_Danny_Strachan Dan_5">T</h1>
                            <h1 className="About_Danny_Strachan Dan_6">R</h1>
                            <h1 className="About_Danny_Strachan Dan_7">A</h1>
                            <h1 className="About_Danny_Strachan Dan_8">C</h1>
                            <h1 className="About_Danny_Strachan Dan_9">H</h1>
                            <h1 className="About_Danny_Strachan Dan_10">A</h1>
                            <h1 className="About_Danny_Strachan Dan_11">N</h1>
                            <h1 className="About_Danny_Strachan Dan_12">:</h1>
                        </div>
                        <a className="Github" href="https://github.com/DannyStrachan">Dan Strachan Github Profile</a>
                    </div>
                    <div className="About_Blake">
                        <div className="About_Blake_Text_Container">
                            <h1>BLAKE TRAPNELL:</h1>
                        </div>
                        <a className="Github" href="https://github.com/Blake-Trapnell">Blake Trapnell Github Profile</a>

                    </div>
                </div>
                <h4>Game Traders Made possible by Rawg!</h4>
                <a href="https://rawg.io">https://rawg.io</a>
            </div>
        </div>

    )

}