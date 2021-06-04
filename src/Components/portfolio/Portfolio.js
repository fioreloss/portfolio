import React from 'react'

import "./Portfolio.scss"
import PortofolioCard from './PortofolioCard'
import comingsoon from '../../logos/cominsoon.jpg'

export default function Portfolio() {  


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="showcase">
            <PortofolioCard type="Frontend Project"
            img={comingsoon}
            title="Instagram Clone"
            desc="Clone of Instagram with some basic functions"/>
            <PortofolioCard type="Mobile Project"
            img={comingsoon}
            title="Transport System"
            desc="Booking system for Interurban 
            transportation in Albania"/>
            </div>
        </div>
    )
}
