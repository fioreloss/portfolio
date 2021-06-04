import React, { useEffect, useRef } from 'react'
import './homepage.css'
import Card from '../card/Card'
import {init} from 'ityped'
import Parallax from 'react-rellax'
import logo from "../../logos/logo4.png"
export default function Homepage() {
    const textRef= useRef();
    useEffect(()=>{
        init(textRef.current,{
            showCursor:false,
            backDelay:1500,
            backSpeed:60,
            strings:["React Developer ","Backend Developer", "SalesForce Developer"],
        });
    },[])

    return (
        <div id="intro" className="intro">
            <img className="logo" src={logo} alt="logo"/>
            <div className="left">
                <Parallax speed={-2}>
            <div className="wrapper">
                    <h2>Hi there I'm </h2> 
                    <h1 >Fjorelo Serjani</h1>    
                    <span ref={textRef}>
                    </span>
                </div>
                </Parallax>
            </div>
            <div className="right">
                <Parallax speed={-1}>
            
                    <Card/>
                </Parallax>
            </div>
        </div>
        )
}
