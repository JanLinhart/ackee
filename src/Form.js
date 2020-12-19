import React from 'react'
import './Form.css'
import {RecipeContext} from './RecipeContext';
import {useContext,useState} from 'react';
import axios from 'axios';

function Form() {
    const [nazev,setNazev]=useState('');
    const[uvodni,setUvodni]=useState('');
    const[ingredience,setIngredience]=useState('');
    const[postup,setPostup]=useState('');
    const[time,setTime]=useState(0);
    const [score,setScore]=useState(0);
    const{recipes,setRecipes}=useContext(RecipeContext)
    const onSubmit=e=>{
      const newRecipe={id:Math.floor(Math.random() * 100000000),
      description:postup,name:nazev,duration:time,info:uvodni,score:+score}
      
      e.preventDefault()
      setRecipes([...recipes,newRecipe])
      axios.post("https://cookbook.ack.ee/api/v1/recipes")
         
    
    }
    
    return (
        <>
        <button className="pridat" onClick={onSubmit}>+</button>
        <form className="form" >
          <p className="nazev">Název receptu</p>
          <input type="text" value={nazev}
          onChange={(e) => setNazev(e.target.value)}/>
          <input type="text" className="uvodni" placeholder="Úvodní text"
          value={uvodni}
          onChange={(e) => setUvodni(e.target.value)}/>
          <h2>Ingredience</h2>
          <input placeholder="Vaše ingredience" type="text"
          value={ingredience}
          onChange={(e) => setIngredience(e.target.value)}/>
          <button>+ Přidat</button>
          <input type="text" className="postup" placeholder="Postup"
          value={postup}
          onChange={(e) => setPostup(e.target.value)}/>
         <input type="text" placeholder="Čas" className="cas" value={time}
          onChange={(e) => setTime(e.target.value)}/>
        </form>
        </>
    )
          }

export default Form
