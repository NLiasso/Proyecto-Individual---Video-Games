import React from 'react';
import {Link} from 'react-router-dom';
import "./landingStyles.css";

const LandingPage = () => {
    return (
    <div className="landing">
    <div className='btn-neonPrincipal'>
        Pagina Inicial
    </div>
    <br></br>
        
    <Link to='/home' className='btn-neon'>
    Explorar Juegos
    </Link>
    <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
    </div>
    )
}


export default LandingPage