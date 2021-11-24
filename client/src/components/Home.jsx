import React from 'react';
import { Switch } from 'react-router';
import {useEffect} from 'react'
import { useDispatch} from "react-redux"
import {fetchGames, getGenres} from '../store/actions/index'
import Games from './games';
import NavBar from './navBar';




export default function Home(){
    const dispatch = useDispatch();

  //Cargo mi store, searchAllGames y processGames para trabajar con este último
  useEffect(() => {
    let initial = async function() {
      dispatch(fetchGames());
      dispatch(getGenres());
    }
      initial();
  }, []);

    return (
        <div className= 'App'>
          <React.Fragment>
            <Switch>
                <NavBar/>
                <Games/>
            </Switch>
          </React.Fragment>
        </div>
        
      );
}
