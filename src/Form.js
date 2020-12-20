import React from 'react';
import './Form.css';
import { RecipeContext } from './RecipeContext';
import {
  useContext,
  useState,
  // , useEffect
} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Form() {
  const [nazev, setNazev] = useState('');
  const [uvodni, setUvodni] = useState('');
  const [ingredience, setIngredience] = useState('');
  const [postup, setPostup] = useState('');
  const [time, setTime] = useState(0);
  // const [score, setScore] = useState(0);
  const { updateRecipes } = useContext(RecipeContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name: nazev,
      description: postup,
      ingredients: [ingredience],
      duration: +time,
      info: uvodni,
    };

    axios
      .post('https://cookbook.ack.ee/api/v1/recipes', newRecipe)
      .then((res) => {
        console.log(res.data); // confirm if it's the new recipe
        updateRecipes();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="navbar">
        {' '}
        <Link to="/">
          <i class="fas fa-arrow-left arrow"></i>
        </Link>
        <button className="pridat" onClick={onSubmit}>
          +
        </button>
      </div>

      <form className="form">
        <p className="nazev">Název receptu</p>
        <input
          type="text"
          value={nazev}
          onChange={(e) => setNazev(e.target.value)}
        />
        <input
          type="text"
          className="uvodni"
          placeholder="Úvodní text"
          value={uvodni}
          onChange={(e) => setUvodni(e.target.value)}
        />
        <h2>Ingredience</h2>
        <input
          placeholder="Vaše ingredience"
          type="text"
          value={ingredience}
          onChange={(e) => setIngredience(e.target.value)}
        />

        <input
          type="text"
          className="postup"
          placeholder="Postup"
          value={postup}
          onChange={(e) => setPostup(e.target.value)}
        />

        <input
          type="text"
          placeholder="Čas"
          className="cas"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </form>
    </>
  );
}

export default Form;
