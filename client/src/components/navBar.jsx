import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './navBar.css'
import SearchBar from './searchBar';
import OrderByName from './orderByName';
import OrderByRating from './OrderByRating';
import FilteredBy from './filteredBy';




function NavBar() {
    return (
        <div className='navbar-div'>

            <div className='navBuscador'>
                <SearchBar />
            </div>

            <Link to='/add'>
                <div classname='navAddGame'>
                    <button> Agregar Juego</button>
                </div>
            </Link>

            <div className='navBuscador'>
                <OrderByName />
            </div>

            <div className='navBuscador'>
                <OrderByRating/>
            </div>

            <div className='navBuscador'>
                <FilteredBy/>
            </div>
               
        </div>
    )
}

export default NavBar


/*
 <NavLink to="/"><button>Intro</button></NavLink>
                <NavLink to="/videogames"><button>Videogames</button></NavLink>
                <NavLink to="/crearjuego"><button>CrearJuego</button></NavLink>
                <NavLink to="/about"><button>About</button></NavLink>
*/