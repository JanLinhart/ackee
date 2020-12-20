import { RecipeContext } from './RecipeContext';
import { useContext,useState } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';
import { Link } from 'react-router-dom';

function RecipeList() {
  const { recipes } = useContext(RecipeContext);
  const[search,setSearch]=useState('')
  const handleChange=e=>{
    setSearch(e.target.value)
  }

  const filteredRecipes=recipes.filter(recipe=>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div className="navbar">
        <h1>Recepty</h1>
        <h3>Počet receptů:{filteredRecipes.length}</h3>
        <Link to="/pridat-recept">
          {' '}
          <h2 className="plus">+</h2>
        </Link>
      </div>
     <div className="hledej">
     <input type="text" placeholder="hledej recept"className="recipe-input" onChange={handleChange}/> 
    </div> 
      
      <div className="recipe-list">
        {filteredRecipes.map((item) => (
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
