import React from 'react';
import {Link} from 'react-router-dom';

const LandingPage = () => {
    return (
    <div>
    <h1>
        Pagina Inicial
    </h1>
    <Link to='/home'>
    Explorar Juegos
    </Link>
    </div>
    )
}


export default LandingPage