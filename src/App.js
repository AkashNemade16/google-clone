import React from 'react'
import './App.css';
import Home from './pages/home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/search'>
            <h1>HI this is google clone</h1>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
      
      {/* HOME */}
      {/* SEARCH */}
    </div>
  );
}

export default App;
