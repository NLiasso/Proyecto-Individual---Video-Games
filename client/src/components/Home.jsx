import React from 'react';
import { Switch } from 'react-router';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {fetchGames, fetchGame, getGenres} from '../store/actions/index'
import Games from './games';
import Paginado from './paginado';
import NavBar from './navBar';
import {ASCENDENTE,DESCENDENTE} from "../constantes/sort"



export default function Home(){
    const dispatch = useDispatch();

  //Cargo mi store, searchAllGames y processGames para trabajar con este último
  useEffect(() => {
    let initial = async function() {
      await dispatch(fetchGames());
      await dispatch(getGenres());
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
