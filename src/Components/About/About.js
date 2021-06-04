import React from 'react'
import Cloud from './Cloud'
import './About.css'
import Parallax from 'react-rellax'
import Timeline from './timeline/Timeline'




export default function About() {
    return (
        <div id="about">
            <div className="firstsection">
            <Parallax speed={5}>
              <div className="info">
              
              <article >
            <div className="title">
            <h3>About Me</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Fiorelo.</h4>
            <p>
              I am a web developer based in Tirana Albania.
              I really enjoy solving problems as well as making things pretty and easy to use. I
              can't stop learning new things; the more, the better. I also love sports , videogames ,one of my main goals is to develop my own game.
            </p>
          </div>
          <div className="title">
            <h3>What do I do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with React. I also make the web pretty by using Sass,
              CSS and, whenever needed, any of their friends: Bootstrap, Material-Ui etc.
            </p>
            <p>
              For the back-end  work with Javascript (NodeJS, Express, MongoDB, etc). But, of
              course, whenever the project requires Java, I do Java as well (Spring Boot).
            </p>
          </div>
          </article>
            </div></Parallax>
            <div className="cloud">
            
              <Cloud/>
            </div>
            </div>
                <Timeline/>
        </div>
    )
}
