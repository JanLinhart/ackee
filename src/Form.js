import React from 'react'
import './Form.css'
function Form() {
    return (
        <div className="form">
          <p className="nazev">Název receptu</p>
          <input type="text"/>
          <input type="text" className="uvodni" placeholder="Úvodní text"/>
          <h2>Ingredience</h2>
          <input placeholder="Vaše ingredience" type="text"/>
          <button>+ Přidat</button>
          <input type="text" className="postup" placeholder="Postup"/>
         <input type="text" placeholder="Čas" className="cas"/>
        </div>
    )
}

export default Form
