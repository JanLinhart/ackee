import React,{useState,useEffect,createContext,useReducer} from 'react';
import axios from 'axios';
import AppReducer from './AppReducer'


export const RecipeContext=createContext([[],() => {}]);

export default function RecipeProvider(props) {
    const[recipes,setRecipes]=useState([])
    const[state,dispatch]=useReducer(AppReducer,recipes)
    function addRecipe(id){
      dispatch({
        type:'ADD_RECIPE',
        payload:id
      })
    }
  
    useEffect(() => {
  axios.get('https://cookbook.ack.ee/api/v1/recipes?limit=10&offset=0')
  .then(res=>setRecipes(res.data))
  console.log(recipes)
    })   

    
  

    
    return (
       
<RecipeContext.Provider value={{recipes,setRecipes,addRecipe}}>
    {props.children}
</RecipeContext.Provider>
      
    )
}
