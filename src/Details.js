import { useParams } from 'react-router-dom';
import './Details.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from './vitaminDfood-1132105308-770x553.jpg';

function Details() {
  const [details, setDetails] = useState([]);
  const { recipeId } = useParams();
  useEffect(() => {
    axios
      .get(`https://cookbook.ack.ee/api/v1/recipes/${recipeId}`)
      .then((res) => setDetails(res.data));
    console.log(details);
  });

  return (
    <>
      <div className="details">
        <div className="food-photo">
          <img src={Image} alt="" />
          <h1>{details.name}</h1>
        </div>
        <div className="star-line">
          <h1 className="score">{details.score}</h1>
          <h1 className="duration">{details.duration}</h1>
        </div>
        <p className="info">{details.info}</p>
        <h1 className="ingredience">Ingredience</h1>

        <div className="ing">{details.ingredients}</div>

        <h1 className="ingredience">Příprava</h1>
        <p className="description">{details.description}</p>
      </div>
      <div className="score2">{details.score}</div>
    </>
  );
}

export default Details;
