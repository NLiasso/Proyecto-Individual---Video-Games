import './App.css';
import React from 'react';
import { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Games from './components/games';
import GameDetail from './components/gameDetail';
import SearchBar from './components/searchBar';
import OrderByName from './components/orderByName';
import OrderByRating from './components/OrderByRating';
import AddGame from './components/addGame';
import FilteredBy from './components/filteredBy';
import NavBar from './components/navBar';







function App() {
  


  return (
    <div className= 'App'>
      <React.Fragment>
        <Switch>
          <Route exact path='/'>
            <LandingPage/>
          </Route>
          <Route exact path='/home' >
            <div>
            <NavBar/>
            <Games/>
            </div>
          </Route>
          <Route path='/add'>
            <AddGame/>
          </Route>
          <Route path='/:id'>
            <SearchBar/>
            <GameDetail/>
          </Route>
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;