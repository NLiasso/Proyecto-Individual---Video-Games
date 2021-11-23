import React from "react";
import '../App.css'



export default function Paginado({page, setPage, pages,}) {
    
    return (
        <nav className='paginadoDiv'>
            <ul className='paginado'>
                {pages.map((elem, index)=> {
                    return (
                    <div key={index} >
                        <button key={index} onClick={() => setPage(index)} >
                            {index+1}
                        </button>
                    </div>
                    
                    )}
                )}
                <div >
                    <button onClick={() => setPage(page-1)} disabled={page === 0} >
                    Prev</button>
                    <button onClick={() => setPage(page+1)} disabled={page === pages.length-1} >
                    Next</button>
                </div>
           </ul>
        </nav>

    )
}