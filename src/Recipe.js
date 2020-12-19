import React from 'react'
import Image from "./vitaminDfood-1132105308-770x553.jpg"
import './Recipe.css'
import {Link} from 'react-router-dom'
import Details from './Details';
function Recipe(props) {
    return (
        <div className="recipe">
        <div className="first-column">
        <img src={Image} alt="cam"/>
        </div>
        <div className="second-column">
     <Link to={ `/details/${props.id}`}><p className="name">{props.name}</p></Link> 
       <p> {props.score.toFixed(2)}</p>
       <p className="time"><i className="far fa-clock"></i>{props.duration}<span>min.</span></p> 
        </div>
        </div>
    )
}

export default Recipe
