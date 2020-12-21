import RecipeList from './RecipeList';
import './App.css';
import RecipeProvider from './RecipeContext';
import Form from './Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from 'react-router-dom';

import Details from './Details';


function App() {
  return (
    <>
      <RecipeProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <RecipeList />
            </Route>
            <Route exact path="/pridat-recept">
              <Form />
            </Route>
            <Route path="/details/:recipeId">
              <Details />
            </Route>
          </Switch>
        </Router>
      </RecipeProvider>
    </>
  );
}

export default App;
