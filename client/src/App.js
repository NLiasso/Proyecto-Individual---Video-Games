import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
//import Home from './components/Home';
import Games from './components/games';
import SearchBar from './components/searchBar';
import Order from './components/order';


function App() {
  return (
    <div className= 'App'>
      <React.Fragment>
        <Switch>
          <Route exact path='/'>
            <LandingPage/>
          </Route>
          <Route exact path='/home'>
            <SearchBar/>
            <Order/>
            <Games/>
          </Route>
        </Switch>
      </React.Fragment>
    </div>
   
  );
}

export default App;