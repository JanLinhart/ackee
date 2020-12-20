import React,{useState,useEffect,createContext,useReducer} from 'react';
import axios from 'axios';
import AppReducer from './AppReducer'


export const RecipeContext=createContext({recipes: [], setRecipes: () => {}, addRecipe: () => {}});

export default function RecipeProvider(props) {
    const[recipes,setRecipes]=useState([])
    const[state,dispatch]=useReducer(AppReducer,{recipes})
    const updateRecipes = (id) => {
      dispatch({
        type:'UPDATE_RECIPES',
        payload: id
      })
      axios.get('cookbook.ack.ee/api/v1/recipes?limit=1000&offset=0')
      .then(res=>setRecipes(res.data))
      }
    
  
    useEffect(() => {
  axios.get('https://cookbook.ack.ee/api/v1/recipes?limit=1000&offset=0')
  .then(res=>setRecipes(res.data))
  console.log(recipes)
    },[])   

    
  

    
    return (
       
<RecipeContext.Provider value={{recipes,setRecipes,updateRecipes}}>
    {props.children}
</RecipeContext.Provider>
      
    )
}
