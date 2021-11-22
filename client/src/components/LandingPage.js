import React from 'react';
import {Link} from 'react-router-dom';
import "./landingStyles.css";

const LandingPage = () => {
    return (
    <div className="landing">
    <h1 >
        Pagina Inicial
    </h1>
    <Link to='/home' className='principal'>
    Explorar Juegos
    </Link>
    </div>
    )
}


export default LandingPage