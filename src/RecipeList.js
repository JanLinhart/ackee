import { RecipeContext } from './RecipeContext';
import { useContext } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';
import { Link } from 'react-router-dom';

function RecipeList() {
  const { recipes } = useContext(RecipeContext);

  return (
    <>
      <div className="navbar">
        <h1>Recepty</h1>
        <h3>Počet receptů:{recipes.length}</h3>
        <Link to="/pridat-recept">
          {' '}
          <h2 className="plus">+</h2>
        </Link>
      </div>
      <div className="recipe-list">
        {recipes.map((item) => (
          <Recipe
            name={item.name}
            id={item.id}
            duration={item.duration}
            score={item.score}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
}

export default RecipeList;
