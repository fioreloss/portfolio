import React from 'react'
import "./Portfoliocard.scss"
export default function PortofolioCard(props) {
    return (
        <div className="container"  >
            <div className="example-2 card" >
                <div className="wrapper" style={{"background":`url(${props.img}) 30% 1% / cover no-repeat`}} >
                    <div className="data">
                        <div className="content">
                            <span className="type">{props.type}</span>
                            <h1 className="title">{props.title}</h1>
                            <p className="text">{props.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
