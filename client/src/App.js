import './App.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Games from './components/games';
import GameDetail from './components/gameDetail';
import SearchBar from './components/searchBar';
import Order from './components/order';
import AddGame from './components/addGame';


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
            <Link to='/add'>
              Agregar juego
            </Link>
            <Order/>
            <Games/>
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