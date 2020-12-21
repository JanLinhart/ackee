import { useParams } from 'react-router-dom';
import './Details.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from './vitaminDfood-1132105308-770x553.jpg';
import {Link} from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
 import { RecipeContext } from './RecipeContext';
 import { useContext } from 'react';

function Details() {
  const [details, setDetails] = useState([]);
  const { recipeId } = useParams();
  const initialRatings = JSON.parse(localStorage.getItem(`rating-${recipeId}`) || "[]");
  const{recipes,setRecipes}=useContext(RecipeContext)
  const[rating,setRating]=useState(initialRatings)
  useEffect(() => {
    axios
      .get(`https://cookbook.ack.ee/api/v1/recipes/${recipeId}`)
      .then((res) => setDetails(res.data));
    
  });

  useEffect(() => {
    localStorage.setItem(`rating-${recipeId}`, JSON.stringify(rating));
  }, [rating, recipeId])


  const ratingChanged = (newRating) => {
    
    var rate={
      score:newRating
      
    }
    setRating(newRating)
    axios.post(`https://cookbook.ack.ee/api/v1/recipes/${recipeId}/ratings`,rate)
    .then((res) => {
     console.log(res.data) 
      setRecipes(recipes)
      
    })
    
  };

  return (
    <>
      <div className="details">
        <div className="food-photo">
          <img src={Image} alt="" />
      <Link to="/"> <i className="fas fa-arrow-left arrow"></i></Link>   
          <h1>{details.name}</h1>
        </div>
        <div className="star-line">
       
        {new Array(rating).fill(null).map(() => (
          <i className="fas fa-star stari"/>
        ))}
        
        <p className="duration"><i className="far fa-clock"></i>{details.duration}<span>min.</span></p>
        </div>
        <p className="info">{details.info}</p>
        <h1 className="ingredience">Ingredience</h1>

        <div className="ing">{details.ingredients}</div>

        <h1 className="ingredience">Příprava</h1>
        <p className="description">{details.description}</p>
      </div>
    <div className="stars">

      <ReactStars
      classNames="star"
      size={48}
      onChange={ratingChanged}
      count={5}
      value={1}
      edit
      />
      </div>
    </>
  );
}

export default Details;
