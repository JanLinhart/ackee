import React,{useState,useEffect,createContext} from 'react';
import axios from 'axios';



export const RecipeContext=createContext([[],() => {}]);

export default function RecipeProvider(props) {
    const[recipes,setRecipes]=useState([])
    
  
    useEffect(() => {
  axios.get('https://cookbook.ack.ee/api/v1/recipes?limit=10&offset=0')
  .then(res=>setRecipes(res.data))
  console.log(recipes)
    })   

    
  

    
    return (
       
<RecipeContext.Provider value={[recipes,setRecipes]}>
    {props.children}
</RecipeContext.Provider>
      
    )
}
