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
        
    </div>
    )
}


export default LandingPage