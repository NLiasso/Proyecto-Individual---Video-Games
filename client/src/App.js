import './App.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Games from './components/games';
import GameDetail from './components/gameDetail';
import AddGame from './components/addGame';
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
          <div className='navToHome'>
            <Link to='/home'>
              <button>To Home</button>
            </Link>
          </div>
            <GameDetail/>
          </Route>
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;