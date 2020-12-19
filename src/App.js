import RecipeList from './RecipeList';
import './App.css';
import RecipeProvider from './RecipeContext'
import Form from './Form';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom'
import {RecipeContext} from './RecipeContext';
import {useContext} from 'react';
import Details from './Details';
import Recipe from './Recipe'

function App() {

  const [recipes,setRecipes]=useContext(RecipeContext) 
  
  return (

<>
<RecipeProvider>

<Router>
<Switch>
  


<Route exact path="/">
<RecipeList/>
</Route>
<Route exact path="/pridat-recept">
<Form/>
</Route>


<Route path="/details/:recipeId">
<Details/>
</Route>



</Switch>

</Router>

</RecipeProvider>
</>
  );
}

export default App;
