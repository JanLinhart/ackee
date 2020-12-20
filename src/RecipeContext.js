import React, { useState, useEffect, createContext
  // , useReducer 
} from 'react';
import axios from 'axios';
// import AppReducer from './AppReducer';

export const RecipeContext = createContext({
  recipes: [],
  setRecipes: () => {},
  updateRecipes: () => {},
});

export default function RecipeProvider(props) {
  const [recipes, setRecipes] = useState([]);
  // the state below is not being used anywhere so I commented it
  // const [state, dispatch] = useReducer(AppReducer, { recipes });
  const updateRecipes = (id) => {
    // dispatch({
    //   type: 'UPDATE_RECIPES',
    //   payload: id,
    // });
    axios
      .get('https://cookbook.ack.ee/api/v1/recipes?limit=1000&offset=0')
      .then((res) => setRecipes(res.data));
  };

  useEffect(() => {
    axios
      .get('https://cookbook.ack.ee/api/v1/recipes?limit=1000&offset=0')
      .then((res) => setRecipes(res.data));
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, updateRecipes }}>
      {props.children}
    </RecipeContext.Provider>
  );
}
