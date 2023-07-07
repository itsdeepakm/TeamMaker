import React from 'react'
import './Card.css'
import {Link} from "react-router-dom";

function Card(props){
    return(
        <div className="cardInner">
            <div className = "cardContainer">
            <div className = "card">
            <div className = "cardImage">
            <img href = " " src ={props.image} />
            </div>
            <div className = "cardContent">
            <h3 className="cardHeading">{props.heading}</h3>
            <p className="cardDescription">{props.content}</p>
            <button className="links linkRegister"><span class="front"><Link to={"/profile"}>Explore</Link></span></button>
            </div>
            </div>    
            </div>
        </div>
    )
}

export default Card;