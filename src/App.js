import RecipeList from './RecipeList';
import './App.css';
import RecipeProvider from './RecipeContext'
import Form from './Form';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {RecipeContext} from './RecipeContext';
import {useContext} from 'react';
import Details from './Details';

function App() {

  const [recipes,setRecipes]=useContext(RecipeContext) 
  
  return (


<RecipeProvider>

<Router>
<Switch>
  

<>
<Route exact path="/">
<RecipeList/>
</Route>
<Route exact path="/pridat-recept">
<Form/>
</Route>

{recipes.map(item=>(
  
<Route exact path={`/${item.name}`} >
<Details key={item.name}/>
</Route>

)

)}



</>
</Switch>
</Router>

</RecipeProvider>

  );
}

export default App;
