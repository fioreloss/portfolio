import React from 'react'
import "./Card.css"
import pic from "../../images/img.jpg"
import linkedin from "./linkedin.svg"
import git from "./github.svg"
export default function Card() {
    return (
        <aside className="profile-card">
            <header>
                <a href="/">
                    <img src={pic}  alt=""/>
                </a>
                <h1> Fiorelo Serjani</h1>
                <h2>Full Stack Web Developer</h2>
            </header>
            <div className="profile-bio">
                {/* <p>Hello there </p> */}
                <p>First, solve the problem. Then, write the code
                </p> 
            </div>
            <ul className="profile-social-links">
    
    <li>
      <a href="www.linkedin.com/in/fjorelo-serjani">
        <img src={linkedin}  alt=" "/>
      </a>
    </li>


    <li>
      <a href="https://github.com/fioreloss">
        <img src={git}  alt=""/>
      </a>
    </li>
  </ul>
        </aside>
    )
}
