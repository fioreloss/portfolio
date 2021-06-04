import React from 'react'
import './Navbar.css'
import logo from "../../logos/logo4.png"

export default function Navbar() {

return (
        <div className="menu">
		<img src={logo} alt="logo"/>
        <a href="#intro">
                Home
        </a>
        <a href="#about">
                About 
        </a>
        <a href="#portfolio">
                Portfolio
        </a>
        <a href="#contact">
                Contact
        </a>
        </div>

        )
}
