import React from "react"
import ReactLogo from "./React-icon.svg"


export default function Navbar() {
    return (
        <div>
            <header>
                <nav className="nav">
                    <img src={ReactLogo} className="nav-logo" />
                    <h2 className="reactfacts">ReactFacts</h2>
                    <h2 className="reactcoursetext">React Course - Project 1</h2>
                </nav> 
            </header>
        </div>
    )
}