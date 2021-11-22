import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { orderBy, filterBy, getGenres } from '../store/actions/index'
import './FilterBy.css'

function FilteredBy({orderBy, genres, filterBy, getGenres}) {

    useEffect (()=>{
        getGenres()
    },[]) 

    
    const handleSelect = (e) => {
        filterBy(e.target.value)
    }

 
    return (
        <div className='container-div'>
            <select  className="selectCont" onChange={handleSelect} name="" id="">
                <option className="option" value="default">TODOS...</option>
                <optgroup className="optionGroup" label="DataBase">
                    <option className="option" value="DB">CREADOS</option>
                </optgroup>
                <optgroup className="optionGroup" label="API">
                    <option className="option" value="API">API</option>
                </optgroup>              
                <optgroup className="optionGroup" label="GENRES">
                    {genres && genres.map(g => <option key={g.genre_name} value={g.genre_name}>{g.genre_name}</option>)}
                </optgroup>                
            </select>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

        genres: state.genres
    }
}


export default connect(mapStateToProps, {orderBy, filterBy, getGenres})(FilteredBy)